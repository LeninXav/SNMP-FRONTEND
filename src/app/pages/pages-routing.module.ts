import { SnmpTrap12Component } from './snmp-trap12/snmp-trap12.component';
import { SnmpGetnextComponent } from './snmp-getnext/snmp-getnext.component';
import { SnmpGetComponent } from './snmp-get/snmp-get.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SnmpSetComponent } from './snmp-set/snmp-set.component';
import { SnmpTrap3Component } from './snmp-trap3/snmp-trap3.component';


// Pages Components

export const PagesRoutes: Routes = [
    { path: 'snmpGet', component: SnmpGetComponent, data: { title: 'SNMP GET' }},
    { path: 'snmpGetNext', component: SnmpGetnextComponent, data: { title: 'SNMP GETNEXT' }},
    { path: 'snmpSet', component: SnmpSetComponent, data: { title: 'SNMP SET' }},
    { path: 'snmpTrap12', component: SnmpTrap12Component, data: { title: 'SNMP TRAP 1-2' }},
    { path: 'snmpTrap3', component: SnmpTrap3Component, data: { title: 'SNMP TRAP 3' }},
  ];