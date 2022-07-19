import { Component, OnInit } from '@angular/core';
import { BetsService } from '../bets-service/bets.service';

@Component({
  selector: 'app-bets-dashboard',
  templateUrl: './bets-dashboard.component.html',
  styleUrls: ['./bets-dashboard.component.scss'],
})
export class BetsDashboardComponent implements OnInit {
  bets;
  constructor(private betsService: BetsService) {}

  ngOnInit() {
    this.betsService
      .getBetUpdated()
      .subscribe((response) => (this.bets = response));
  }

  startPulling() {
    this.betsService.startPulling(0.5).subscribe((response) => {
      console.log(response);
    });
  }

  stopPulling() {
    this.betsService.stopPulling().subscribe((response) => {
      console.log(response);
    });
  }
}
