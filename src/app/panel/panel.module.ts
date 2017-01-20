import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { RouterModule }              from '@angular/router';

import { PanelComponent }           from './panel/panel.component';
import { LoginComponent }           from './login/login.component';

import { AuthenticationService }    from '../services/authentication.service';

@NgModule({
  imports:      [ CommonModule,
                  FormsModule,
                  RouterModule
  ],
  declarations: [ PanelComponent,
                  LoginComponent
  ],
  exports:      [ PanelComponent,
                  LoginComponent
  ],
  providers:    [ AuthenticationService
  ]
})
export class PanelModule { }