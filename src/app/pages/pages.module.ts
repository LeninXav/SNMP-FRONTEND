import { NgModule, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeConstants } from '../shared/config/theme-constant';

import { PagesRoutes } from './pages-routing.module';

import 'd3';
import 'nvd3';
import { NvD3Module } from 'ng2-nvd3';

import {CommonModule} from '@angular/common';

// Directives
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Date Pipe
import { DatePipe } from '@angular/common';


// Pages Component
import { SnmpGetComponent } from './snmp-get/snmp-get.component';
import { SnmpGetnextComponent } from './snmp-getnext/snmp-getnext.component';
import { SnmpSetComponent } from './snmp-set/snmp-set.component';
import { SnmpTrap12Component } from './snmp-trap12/snmp-trap12.component';
import { SnmpTrap3Component } from './snmp-trap3/snmp-trap3.component';

@NgModule({
    imports: [
        RouterModule.forChild(PagesRoutes),
        CommonModule,
        NgbModule,
        NvD3Module,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
    ],
    declarations: [
        SnmpGetComponent,
        SnmpGetnextComponent,
        SnmpSetComponent,
        SnmpTrap12Component,
        SnmpTrap3Component,
    ],
    providers: [
        ThemeConstants,
        DatePipe
    ]
})
export class PagesModule { }