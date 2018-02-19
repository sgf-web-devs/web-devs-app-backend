import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.sass']
})
export class InlineEditComponent implements OnInit {

  @Input() public value: string;
  @ViewChild('inputEl') public inputEl;
  public editing = false;
  constructor() { }

  ngOnInit() {
  }

  startEditing() {
    this.editing = true;
    setTimeout(() => {
      this.inputEl.nativeElement.select();
    }, 0);
  }

}
