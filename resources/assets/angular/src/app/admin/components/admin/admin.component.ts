import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnDestroy {
  public mobileQuery: MediaQueryList;
  public isMobile: boolean;
  public sideNavOpened: boolean;

  constructor(media: MediaMatcher, private cd: ChangeDetectorRef) {
    // Create MediaQueryList and add listener
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this.mobileQuery.addListener(this.mobileQueryListener.bind(this));
    // Use MediaQueryList to set initial sidenav state
    this.isMobile = this.mobileQuery.matches;
    this.sideNavOpened = !this.mobileQuery.matches;
  }

  /**
   * Gets fired when screen sizes goes above or below 600px
   * @param e
   */
  mobileQueryListener(e) {
    this.sideNavOpened = !e.matches;
    this.isMobile = e.matches;
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }

}
