import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { NewPrizeComponent } from '../../components/new-prize/new-prize.component';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.sass']
})
export class PrizesComponent implements OnInit, AfterViewInit {
  public shownColumns = ['id', 'name', 'enabled'];
  public tableData = new MatTableDataSource();

  @ViewChild(MatSort) public sort: MatSort;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // TODO fetch data from server
    const prizes = [
      { id: 1, name: 'JetBrains License', enabled: true },
      { id: 2, name: 'Mug', enabled: true },
      { id: 3, name: 'T-shirt', enabled: true },
      { id: 4, name: 'Stickers', enabled: true },
    ];
    this.tableData.data = prizes;
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
