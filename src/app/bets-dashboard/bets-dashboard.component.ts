import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { BetsService } from '../bets-service/bets.service';
import { Bet, DisplayedColor } from '../models/Bet';

@Component({
  selector: 'app-bets-dashboard',
  templateUrl: './bets-dashboard.component.html',
  styleUrls: ['./bets-dashboard.component.scss'],
})
export class BetsDashboardComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Bet>([]);

  betsSub: Subscription;
  updatedBetsSub: Subscription;

  displayedColumns: string[] = [
    'firstPlayerName',
    'secondPlayerName',
    'firstPlayerWin',
    'secondPlayerWin',
    'draw',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private betsService: BetsService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.betsSub = this.betsService.getBets().subscribe((bets) => {
      this.dataSource.data = bets.map((bet) => {
        bet.teams[0].winDisplayedColor = DisplayedColor.Default;
        bet.teams[1].winDisplayedColor = DisplayedColor.Default;
        return bet;
      });
    });

    this.updatedBetsSub = this.betsService
      .getBetUpdated()
      .subscribe((updatedBets) => {
        this.dataSource.data = this.dataSource.data.map((bet) => {
          const updatedBet = updatedBets.find(
            (updatedBet) => bet.id === updatedBet.id
          );
          this.updateBetDisplayedColors(updatedBet, bet);
          return updatedBet || bet;
        });
      });
  }

  updateBetDisplayedColors(updatedBet: Bet, bet: Bet) {
    if (updatedBet) {
      updatedBet.teams[0].winDisplayedColor = this.getDisplayedColor(
        updatedBet.teams[0].win,
        bet.teams[0].win
      );
      updatedBet.teams[1].winDisplayedColor = this.getDisplayedColor(
        updatedBet.teams[1].win,
        bet.teams[1].win
      );
      updatedBet.drawDisplayedColor = this.getDisplayedColor(
        updatedBet.draw,
        bet.draw
      );
    }
  }

  getDisplayedColor(updatedValue: number, value: number) {
    if (updatedValue > value) {
      return DisplayedColor.Increase;
    } else if (updatedValue < value) {
      return DisplayedColor.Decrease;
    } else {
      return DisplayedColor.Default;
    }
  }

  ngOnDestroy(): void {
    this.betsSub.unsubscribe();
    this.updatedBetsSub.unsubscribe();
  }
}
