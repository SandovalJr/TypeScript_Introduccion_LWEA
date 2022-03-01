import { Address } from './address.models';

export class user {
  id: number;
  name: string;
  email: string;
  adress: Address;

  constructor(id: number, name: string, email: string, adress: Address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.adress = adress;
  }
}
