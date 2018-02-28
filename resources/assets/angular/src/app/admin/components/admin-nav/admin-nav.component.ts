import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.sass']
})
export class AdminNavComponent implements OnDestroy {
  public mobileQuery: MediaQueryList;
  public isMobile: boolean;
  public sideNavOpened: boolean;

  constructor(
    private media: MediaMatcher,
    private cd: ChangeDetectorRef,
    private router: Router,
    private auth: AuthService
  ) {
    // Create MediaQueryList and add listener
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this.mobileQuery.addListener(this.mobileQueryListener.bind(this));
    // Use MediaQueryList to set initial sidenav state
    this.isMobile = this.mobileQuery.matches;
    this.sideNavOpened = !this.mobileQuery.matches;

    // Closes side nav on route change on mobile
    this.router.events.subscribe(val => {
      if (this.isMobile) {
        this.sideNavOpened = false;
      }
    });
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

  logout() {
    this.auth.logout('/admin/login');
  }

}
