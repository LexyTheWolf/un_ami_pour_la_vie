import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from './../shared/services/auth.service';
import { first } from 'rxjs/operators';
declare let $: any;

export interface Error {
    objStringError: string;
    objError: any;
    ErrorstatusText: any;
    Errormessage: string;
    ErrorStatus: string;
  }
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public email: string;
    public password: string;
    public objStringError: string;
    public objError: any;
    public ErrorstatusText: any;
    public Errormessage: string;
    public ErrorStatus: string;
    public error: Error;
    alerts: Array<any> = [];
    http: any;
    constructor(private auth: AuthService, public router: Router ) {
        console.log(this.Errormessage);
        this.alerts.push( {
            id: 3,
            type: 'danger',
            message: 'this.Errormessage',
            });
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
        }

    public submit() {
        this.auth.login(this.email, this.password).pipe(first()).subscribe(
            result => this.router.navigate(['']),
            err => this.Errormessage = 'Votre email ou votre mot de passe ne sont pas corrects, ou bien votre compte n\'est pas activé.'

          );

      }
      ngOnInit() {

    }
}
