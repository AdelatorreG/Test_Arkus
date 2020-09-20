import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DefaultComponent } from './default/default.component';
import { AuthGuard } from 'src/_common/_guard/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            { path: '', component: DefaultComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingComponent { }