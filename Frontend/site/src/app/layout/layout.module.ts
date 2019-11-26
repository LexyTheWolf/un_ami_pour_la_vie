import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {BreadcrumbModule} from 'primeng/primeng';
import { TimerBisComponent} from './timer-bis/timer-bis.component';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        BreadcrumbModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,
        BreadcrumbComponent, TimerBisComponent]
})
export class LayoutModule {}
