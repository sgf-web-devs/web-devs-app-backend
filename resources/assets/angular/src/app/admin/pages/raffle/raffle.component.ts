import { Component, OnInit } from '@angular/core';
import { PrizesService } from '../../providers/prizes.service';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.sass']
})
export class RaffleComponent implements OnInit {

  public winner = {
    name: '????? ??????',
    photo: 'https://parents.lionheartfitnesskids.com/media/profile-images/default.png'
  };
  public prizes = [];
  public selectedPrize = '';

  constructor(private prizesService: PrizesService) { }

  ngOnInit() {
    this.prizesService.enabledPrizes().
      subscribe(prizes => this.prizes = prizes);
  }

  selectWinner() {

    if (this.selectedPrize === '') return;

    this.winner = {
      name: 'Levi Zitting',
      photo: 'https://pbs.twimg.com/profile_images/960725896561803264/NzuHUANL_400x400.jpg'
    };
  }

}
