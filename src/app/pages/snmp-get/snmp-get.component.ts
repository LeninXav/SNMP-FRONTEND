import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SNMP } from '../../models/snmp.model';
import { SnmpService } from '../../services/snmp.service';
import { NgForm } from '@angular/forms';
declare var jQuery: any;

@Component({
  selector: 'app-snmp-get',
  templateUrl: './snmp-get.component.html',
  styles: []
})
export class SnmpGetComponent implements OnInit {

  public version : any [] = [];
  public tipo : any [] = [];
  public authProtocols : any [] = [];
  public privProtocols : any [] = [];
  public muestraTipo : boolean = false;
  public muestraAutenticacion : boolean = false;
  public muestraPrivacidad : boolean = false;
  public muestraComunidad : boolean = true;
  public snmpMessage : SNMP = new SNMP('', '', '', 1, 1, '', '', '', '', '', '');
  public mensaje : string = '';
  public valueVersion : number = 1;
  public valueTipo : number = 1;
  @ViewChild('dataModal') dataModal: ElementRef;
  constructor(
    public _snmpService: SnmpService
  ) { }

  ngOnInit() {
    for(let i = 1; i<4; i++){
      let auxVersion = {
        id: i,
        nombre: "Versión "+i
      }
      this.version.push(auxVersion);
    }
      let auxTipo = {
        id: 1,
        nombre: "NoAuth NoPriv"
      }
      this.tipo.push(auxTipo);
      auxTipo = {
        id: 2,
        nombre: "Auth noPriv"
      }
      this.tipo.push(auxTipo);
      auxTipo = {
        id: 3,
        nombre: "Auth Priv"
      }
      this.tipo.push(auxTipo);

      let auxAuthProtocol = {
        id: "md5",
        nombre : "MD5"
      }
      this.authProtocols.push(auxAuthProtocol);
      auxAuthProtocol = {
        id: "sha",
        nombre : "SHA"
      }
      this.authProtocols.push(auxAuthProtocol);
      auxAuthProtocol = {
        id: "sha128",
        nombre : "SHA 128"
      }
      this.authProtocols.push(auxAuthProtocol);
      auxAuthProtocol = {
        id: "sha256",
        nombre : "SHA 256"
      }
      this.authProtocols.push(auxAuthProtocol);
      auxAuthProtocol = {
        id: "sha384",
        nombre : "SHA 384"
      }
      this.authProtocols.push(auxAuthProtocol);
      auxAuthProtocol = {
        id: "sha512",
        nombre : "SHA 512"
      }
      this.authProtocols.push(auxAuthProtocol);

      let auxPrivProtocol = {
        id: "des",
        nombre : "DES"
      }
      this.privProtocols.push(auxPrivProtocol);
      auxPrivProtocol = {
        id: "3des",
        nombre : "3DES"
      }
      this.privProtocols.push(auxPrivProtocol);
      auxPrivProtocol = {
        id: "aes128",
        nombre : "AES 128"
      }
      this.privProtocols.push(auxPrivProtocol);
      auxPrivProtocol = {
        id: "aes192",
        nombre : "AES 192"
      }
      this.privProtocols.push(auxPrivProtocol);
      auxPrivProtocol = {
        id: "aes256",
        nombre : "AES 256"
      }
      this.privProtocols.push(auxPrivProtocol);
      auxPrivProtocol = {
        id: "aesb192",
        nombre : "AES Blumenthal 192"
      }
      this.privProtocols.push(auxPrivProtocol);
      auxPrivProtocol = {
        id: "aesb256",
        nombre : "AES Blumenthal 256"
      }
      this.privProtocols.push(auxPrivProtocol);
  }

  rechargeData(value: string, opcion:number) {
    if(opcion === 1){
      if (value === "3") {
        this.muestraTipo = true;
        this.muestraComunidad = false;
        this.valueVersion = +value;
      } else if(value !== ""){
        this.muestraTipo = false;
        this.muestraPrivacidad = false;
        this.muestraAutenticacion = false;
        this.muestraComunidad = true;
        this.valueVersion = +value;
      } else{
        this.muestraTipo = false;
        this.muestraPrivacidad = false;
        this.muestraAutenticacion = false;
        this.muestraComunidad = true;
      }
    }else{
      if(value === "1"){
        this.muestraPrivacidad = false;
        this.muestraAutenticacion = false;
        this.valueTipo = +value;
      }
      else if(value === "2"){
        this.muestraPrivacidad = false;
        this.muestraAutenticacion = true;
        this.valueTipo = +value;
      }else if(value === "3"){
        this.muestraPrivacidad = true;
        this.muestraAutenticacion = true;
        this.valueTipo = +value;
      }
      else{
        this.muestraPrivacidad = false;
        this.muestraAutenticacion = false;
      }
    }
  }

  sendSNMP(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.snmpMessage.version = this.valueVersion;
    this.snmpMessage.tipo = this.valueTipo;
    console.log(this.snmpMessage);
    this._snmpService.getSNMP(this.snmpMessage)
          .subscribe(respuesta => {
            if(respuesta){
              this.mensaje = respuesta.mensaje;
              this.showDataModal();
            }
          }, err =>{
        });
  }

  showDataModal() {
    jQuery(this.dataModal.nativeElement).modal('show');
  }

  hideDataModal() {
    jQuery(this.dataModal.nativeElement).modal('hide');
  }
}
