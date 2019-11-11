
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { User, UserService } from './../../shared/index';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';


class DataTablesResponse {
    data: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
  }

@Component({
    selector: 'app-adminuser',
    templateUrl: './adminuser.component.html',
    styleUrls: ['./adminuser.component.scss'],
    animations: [routerTransition()]
})
export class AdminuserComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    user$: Observable<User[]>;


    constructor(private users: UserService, private http: HttpClient) {}


    ngOnInit(): void  {
        this.user$ = this.users.getUsers();
        this.dtOptions = {
            pagingType: 'full_numbers'
          };

    }


}
