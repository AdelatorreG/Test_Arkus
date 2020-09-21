import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/_common/_guard/auth.guard';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminComponent } from './admin.component';
import { AdminGuard } from 'src/_common/_guard/admin.guard';

const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
            { path: '', component: AdminViewComponent, canActivate: [AdminGuard] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingComponent { }