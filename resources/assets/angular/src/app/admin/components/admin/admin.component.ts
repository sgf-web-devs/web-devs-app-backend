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
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addListener(this.mobileQueryListener.bind(this));
    this.isMobile = this.mobileQuery.matches;
    this.sideNavOpened = !this.mobileQuery.matches;
  }

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
