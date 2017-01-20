import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    private _profile = {};

    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

/*
Edu: la url de la api "http://api.panel.org/authenticate" debería devolver un json similar a ...
    {"profile":{"name":"Rodrigo Piacenza","email":"rpiacenza@w3sys.com.ar"},"token":"654321598"}
*/
    login(username, password): Observable<boolean> {
        return this.http.post('http://api.panel.org/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
                    this._profile = response.json().profile;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ profile: this._profile, token: token }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }

    isLogged() {
        return (this.token!=null);
    }

    get profile(): any {
        return this._profile;
    }
}