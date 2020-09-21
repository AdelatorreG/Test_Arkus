import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/_common/_guard/auth.guard';

const routes: Routes = [
  {
    //Accounts
    path: '',  loadChildren: () =>
      import('./main/main.module').then(m => m.MainModule)
  },{
    path:'admin', loadChildren:() =>
    import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
