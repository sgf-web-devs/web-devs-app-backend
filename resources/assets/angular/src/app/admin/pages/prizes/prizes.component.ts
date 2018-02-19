import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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

  showAddPrizeForm() {
    const dialogRef = this.dialog.open(NewPrizeComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.tableData.data = [...this.tableData.data, result];
    });
  }

}
