import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/_common/_services/request.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  isRegister = false;
  constructor(
    private router: Router,
    private API: RequestService
  ) { }

  ngOnInit() {
  }

  Submit() {
    this.API.reqGET("/users?username=" + this.username + "&password=" + this.password)
      .pipe(first())
      .subscribe(res => {
        console.log(res);
        if (res.length > 0 && res[0].username == this.username) {
          localStorage.setItem("currentUser", this.username);
          this.router.navigate(['']);
        }

      });


  }

  gotoRegister() {
    this.router.navigate(['/register']);
  }

}
