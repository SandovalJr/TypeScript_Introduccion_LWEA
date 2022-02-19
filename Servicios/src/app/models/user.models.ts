import { address } from './address.models';

export class user {
  id: number;
  name: string;
  email: string;
  adress: address;
  constructor(id: number, name: string, email: string, adress: address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.adress = adress;
  }
}
