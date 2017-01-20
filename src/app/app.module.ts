import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { AppRoutingModule }         from './app-routing.module';
import { HttpModule }               from '@angular/http';
import { PanelModule }              from './panel/panel.module';

import { AppComponent }             from './app.component';

import { AuthenticationService }    from './services/authentication.service';
import { AuthGuard }                from './guards/auth.guard';

import { DashboardComponent }       from './dashboard/dashboard.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
