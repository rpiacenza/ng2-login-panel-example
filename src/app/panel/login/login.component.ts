import { Component, OnInit } from '@angular/core';
import { AuthenticationService }    from '../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
        .subscribe(result => {
            if (result === true) {
                this.router.navigate(['panel']);
            } else {
                this.error = 'Email o password incorrecto!';
                this.loading = false;
            }
        });
  }
}
