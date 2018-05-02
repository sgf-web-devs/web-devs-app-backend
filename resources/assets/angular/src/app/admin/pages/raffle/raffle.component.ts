import { Component, OnInit } from '@angular/core';
import { PrizesService } from '../../providers/prizes.service';
import { Prize } from '../../models/prize';
import {Winner} from '../../models/winner';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.sass']
})
export class RaffleComponent implements OnInit {

  public winner = {
    name: '????? ??????',
    image: 'https://parents.lionheartfitnesskids.com/media/profile-images/default.png'
  };

  public prizes: Prize[] = [];
  public selectedPrize: Prize;

  constructor(private prizesService: PrizesService) { }

  ngOnInit() {
    this.prizesService.enabledPrizes().
      subscribe((prizes: Prize[]) => this.prizes = prizes);
  }

  selectWinner() {
    this.prizesService.assignPrize(this.selectedPrize).subscribe((winner: Winner) => {
        this.winner = winner;
    });
  }

}
