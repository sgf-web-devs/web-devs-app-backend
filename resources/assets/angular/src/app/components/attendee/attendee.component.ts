import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.sass']
})
export class AttendeeComponent {

  @Input()
  public attendee;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  getBackground(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
