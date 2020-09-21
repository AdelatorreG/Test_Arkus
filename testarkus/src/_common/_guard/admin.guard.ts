import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestService } from '../_services/request.service';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (localStorage.getItem('currentUser')=="admin") {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }



    }
}
