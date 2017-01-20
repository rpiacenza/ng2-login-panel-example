import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }            from './guards/auth.guard';

import { PanelComponent }       from './panel/panel/panel.component';
import { LoginComponent }       from './panel/login/login.component';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { Pagina1Component }    from './pagina1/pagina1.component';
import { Pagina2Component }    from './pagina2/pagina2.component';
import { Pagina3Component }    from './pagina3/pagina3.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'panel',
        component: PanelComponent,
        children:[
          { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
          { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
          { path: 'pagina1', component: Pagina1Component, canActivate: [AuthGuard] },
          { path: 'pagina2', component: Pagina2Component, canActivate: [AuthGuard] },
          { path: 'pagina3', component: Pagina3Component, canActivate: [AuthGuard] },
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
