import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/_common/_services/request.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  users = [];
  constructor(
    private API: RequestService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.API.reqGET("/users?isAdmin=false")
      .pipe(first())
      .subscribe(res => {
        this.users = res;

      }
      )
  };

  deleteUser(user) {
    if (confirm("Are you want to delete " + user.name)) {
      this.API.reqDELETE("/users/" + user.id)
        .pipe(first())
        .subscribe(res => {
          console.log(res);
          this.getUsers();
        }
        )
    }


  }
}


