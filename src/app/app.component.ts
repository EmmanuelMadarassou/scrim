import { Component, HostBinding } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLogo = 'isRLPage';
  title = 'Scrim-community';


  @HostBinding('class') get HeadingClass() {
    return this.navLogo;
  }

  constructor(router: Router) {
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        if(router.url === '/' || router.url === '/home') {
          console.log("I am home")
        }else if(router.url === '/LOL') { this.navLogo = "isLOLPage"
        }else if(router.url === '/RL') { this.navLogo = "isRLPage"
        }else {
          console.log("wrong")
        }
      }
    });
  }
}
