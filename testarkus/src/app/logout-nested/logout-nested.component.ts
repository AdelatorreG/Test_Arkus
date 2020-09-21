import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-logout-nested',
  templateUrl: './logout-nested.component.html',
  styleUrls: ['./logout-nested.component.css']
})
export class LogoutNestedComponent implements OnInit {
  isAddmin;
  inAdmin;
  constructor(
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkAdmin()
      }
    });
  }

  ngOnInit() {
    this.checkAdmin()
  }

  checkAdmin(){
    if (localStorage.getItem("currentUser") == 'admin' && this.router.url != '/admin') {
      this.isAddmin = true;
      this.inAdmin = false;
    }else if(localStorage.getItem("currentUser") == 'admin' && this.router.url == '/admin'){
      this.inAdmin=true;
      this.isAddmin = false;
    } else {
      this.isAddmin = false;
      this.inAdmin=false;
    }
  }


  Logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
