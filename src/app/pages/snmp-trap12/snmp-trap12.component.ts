
import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { SNMPTRAP } from '../../models/snmpTrap.model';
import { URL_SOCKET } from '../../api/api';

const socket = io(URL_SOCKET);


@Component({
  selector: 'app-snmp-trap12',
  templateUrl: './snmp-trap12.component.html',
  styles: []
})



export class SnmpTrap12Component implements OnInit {

  public mensajeTrap: SNMPTRAP [] = [];
  constructor() { }

  ngOnInit() {
    socket.on('trap_event', (res:SNMPTRAP) => {
      this.updateData(res);
    });

    socket.on('trap3_event', (res: SNMPTRAP) => {
      this.updateData(res);
    });
  }

  updateData(res){
    this.mensajeTrap.push(res);
  }
  
}

