import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BetsService } from '../bets-service/bets.service';

@Component({
  selector: 'app-pulling-buttons',
  templateUrl: './pulling-buttons.component.html',
  styleUrls: ['./pulling-buttons.component.scss'],
})
export class PullingButtonsComponent implements OnInit, OnDestroy {
  startPullingSub: Subscription;
  stopPullingSub: Subscription;
  updatedBetsSub: Subscription;

  isStartPullingButtonDisabled: boolean = false;

  constructor(private betsService: BetsService) {}

  ngOnInit() {
    this.updatedBetsSub = this.betsService
      .getBetUpdated()
      .subscribe((updatedBets) => {
        this.isStartPullingButtonDisabled = true;
      });
  }

  startPulling() {
    this.startPullingSub = this.betsService.startPulling(5).subscribe();
  }

  stopPulling() {
    this.isStartPullingButtonDisabled = false;
    this.stopPullingSub = this.betsService.stopPulling().subscribe();
  }

  ngOnDestroy(): void {
    this.startPullingSub.unsubscribe();
    this.stopPullingSub.unsubscribe();
    this.updatedBetsSub.unsubscribe();
  }
}
