export class SNMP {

    constructor(
      public community: string,
      public ip_addr: string,
      public mib_oid: string,
      public version: number,
      public tipo: number,
      public authkey: string,
      public auth_prot: string,
      public privkey: string,
      public priv_proto: string,
      public new_value: string,
      public user_name: string
    ) {}
  
  }