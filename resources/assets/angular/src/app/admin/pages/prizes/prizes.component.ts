import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { NewPrizeComponent } from '../../components/new-prize/new-prize.component';
import { PrizesService } from '../../providers/prizes.service';
import { Prize } from '../../models/prize';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.sass']
})
export class PrizesComponent implements OnInit, AfterViewInit {
  public shownColumns = ['id', 'name', 'enabled'];
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

  updatePrize(prize, event) {
    prize.name = event;
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
