import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.sass']
})
export class InlineEditComponent implements OnInit {

  @Input()
  public value: string;

  @Output()
  public update: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('inputEl')
  public inputEl;

  public editing = false;
  public newValue = '';

  public saveBtnReferenceId = 'save-button';

  constructor() { }

  ngOnInit() {
    this.newValue = this.value;
  }

  startEditing() {
    this.editing = true;

    // We can't select an input that has display none.
    // This setTimeout gives the browser a moment to change
    // the input's display property
    setTimeout(() => {
      this.inputEl.nativeElement.select();
    }, 0);
  }

  cancel(event) {
    // cancel is fired on blur, and clicking the save button
    // blurs the input. This is here to check that we didn't
    // hit the save button before canceling
    if (
      event &&
      event.relatedTarget &&
      event.relatedTarget.id &&
      event.relatedTarget.id === this.saveBtnReferenceId
    ) return;

    this.editing = false;
    this.newValue = this.value;
  }

  save() {
    this.editing = false;
    this.update.emit(this.newValue);
  }

}
