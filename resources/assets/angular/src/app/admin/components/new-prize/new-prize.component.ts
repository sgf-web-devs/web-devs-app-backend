import { Component, } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-prize',
  templateUrl: './new-prize.component.html',
  styleUrls: ['./new-prize.component.sass']
})
export class NewPrizeComponent {

  public newPrize = { name: '', enabled: false };

  constructor(
    public dialogRef: MatDialogRef<NewPrizeComponent>,
  ) { }

  cancel() {
    this.dialogRef.close();
  }

}
