import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BetsService } from '../bets-service/bets.service';
import { Bet } from '../models/Bet';

@Component({
  selector: 'app-bets-dashboard',
  templateUrl: './bets-dashboard.component.html',
  styleUrls: ['./bets-dashboard.component.scss'],
})
export class BetsDashboardComponent implements OnInit, OnDestroy {
  bets: Bet[] = [];
  updatedBets: Bet[] = [];

  betsSub: Subscription;
  updatedBetsSub: Subscription;

  constructor(private betsService: BetsService) {}

  ngOnInit() {
    this.betsSub = this.betsService
      .getBets()
      .subscribe((response) => (this.bets = response));

    this.updatedBetsSub = this.betsService
      .getBetUpdated()
      .subscribe((response) => {
        this.updatedBets = response;
        this.bets = this.bets.map((bet) => {
          const updatedBet = this.updatedBets.find(
            (updatedBet) => bet.id === updatedBet.id
          );
          return updatedBet || bet;
        });
      });
  }

  startPulling() {
    this.betsService.startPulling(3).subscribe((response) => {
      console.log(response);
    });
  }

  stopPulling() {
    this.betsService.stopPulling().subscribe((response) => {
      console.log(response);
    });
  }

  ngOnDestroy(): void {
    this.betsSub.unsubscribe();
    this.updatedBetsSub.unsubscribe();
  }
}
