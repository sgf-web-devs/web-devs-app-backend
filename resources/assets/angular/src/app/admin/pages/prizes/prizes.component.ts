import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange, MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { NewPrizeComponent } from '../../components/new-prize/new-prize.component';
import { PrizesService } from '../../providers/prizes.service';
import { Prize } from '../../models/prize';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.sass']
})
export class PrizesComponent implements OnInit, AfterViewInit {
  public shownColumns = ['id', 'name', 'enabled', 'delete'];
  public tableData = new MatTableDataSource();

  @ViewChild(MatSort) public sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public prizeService: PrizesService
    ) {}

  ngOnInit() {
    this.prizeService.allPrizes()
      .subscribe((prizes: Prize[]) => this.tableData.data = prizes);
  }

  ngAfterViewInit() {
    this.tableData.sort = this.sort;
  }

  createPrize(prize: Prize) {
    this.prizeService.newPrize(prize).subscribe(newPrize => {
      this.tableData.data = [...this.tableData.data, newPrize];
    });
  }

  updatePrizeName(prize: Prize, name: string) {
    prize.name = name;
    this.prizeService.updatePrize(prize)
      .subscribe((newPrize: Prize) => prize = newPrize);
  }

  updatePrizeEnabled(prize: Prize, event: MatCheckboxChange) {
    prize.enabled = event.checked;
    this.prizeService.updatePrize(prize)
      .subscribe((newPrize: Prize) => prize = newPrize);
  }

  deletePrize(prize: Prize) {
    this.prizeService.deletePrize(prize).subscribe(message => {
      // Angular Material's datatable only updates when a new array of data
      // is assigned. Here we create a new array, remove prize that we
      // deleted, then reassign the datatables datasource to be our new array
      const newPrizeList = [...this.tableData.data];
      newPrizeList.splice(newPrizeList.indexOf(prize), 1);
      this.tableData.data = newPrizeList;
    });
  }

  showAddPrizeForm() {
    const dialogRef = this.dialog.open(NewPrizeComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createPrize(result);
    });
  }

}
