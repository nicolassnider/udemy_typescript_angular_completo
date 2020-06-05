import { Address } from './Address';

export class User {
  id: number;
  name: string;
  email: string;
  address: Address;
  constructor() {
    this.address=new Address();
  }
}
