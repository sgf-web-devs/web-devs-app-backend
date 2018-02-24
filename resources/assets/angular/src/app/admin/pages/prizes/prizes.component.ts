import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { NewPrizeComponent } from '../../components/new-prize/new-prize.component';
import { PrizesService } from '../../providers/prizes.service';

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
      .subscribe((prizes: any) => this.tableData.data = prizes);
  }

  ngAfterViewInit() {
    this.tableData.sort = this.sort;
  }

  updatePrize(prize, event) {
    prize.name = event;
  }

  showAddPrizeForm() {
    const dialogRef = this.dialog.open(NewPrizeComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO POST this data to server
      result.id = 5;
      this.tableData.data = [...this.tableData.data, result];
    });
  }

}
