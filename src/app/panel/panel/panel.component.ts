import { Component, ElementRef, Renderer } from '@angular/core';
import { Router }                   from '@angular/router';
import { AuthenticationService }    from '../../services/authentication.service';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  
  profile: any [];
  
  constructor(private element: ElementRef, private renderer: Renderer, private auth: AuthenticationService, private router: Router) {
    if (!auth.isLogged()) {
      router.navigate([ 'login' ]);
    }
    this.profile = this.auth.profile;
  }

  logout() {
    this.auth.logout();
  }
}
