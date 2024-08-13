export class Client {
  id!: string;
  companyName: string;
  tradeName: string;
  taxID: string;
  contact: string;
  status: number;

  constructor(
    companyName: string,
    tradeName: string,
    taxID: string,
    contact: string,
    status: number,
    id?: string
  ) {
    if (id !== null){
      // this.id = id;
    }
    this.companyName = companyName;
    this.tradeName = tradeName;
    this.taxID = taxID;
    this.contact = contact;
    this.status = status;
  }
}
