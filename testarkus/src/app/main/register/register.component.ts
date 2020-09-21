import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/_common/_services/request.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = "";
  password = "";
  isRegister = false;
  registerForm = new FormGroup(
    {
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      DOB: new FormControl('', Validators.required),

    }
  )
  constructor(
    private router: Router,
    private API: RequestService
  ) { }

  ngOnInit() {
  }

  Submit() {
    var data = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      dob: this.registerForm.value.DOB,
      isAdmin: false
    }
    this.API.reqPOST("/users", data)
      .pipe(first())
      .subscribe(res => {
        console.log(res);
        // if (res.length > 0 && res[0].username == this.username) {
        //   localStorage.setItem("currentUser", this.username);
        //   this.router.navigate(['']);
        // }

      });
    localStorage.setItem("currentUser", this.registerForm.value.username);
    this.router.navigate(['']);
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

}
