import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.sass']
})
export class PrizesComponent implements OnInit, AfterViewInit {
  public shownColumns = ['id', 'name', 'enabled'];
  public tableData = new MatTableDataSource();

  @ViewChild(MatSort) public sort: MatSort;

  constructor() {}

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

}
