import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testarkus';
  loginStyles=false;
  constructor(
    private router: Router
  ){
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
            this.loginStyles = false;
        } else {
            this.loginStyles = true;
        }
      }
    });
  }

  ngOnInit(){
    if(this.router.url == '/login' || this.router.url === '/login?returnUrl=%2F' || localStorage.getItem("currentUser")){
      this.loginStyles = false;
    }
  }
}
