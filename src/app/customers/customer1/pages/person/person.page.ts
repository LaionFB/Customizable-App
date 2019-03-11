import { DefaultPersonPage } from '../../../_default/pages/person/person.page';

export class Customer1PersonPage extends DefaultPersonPage{  
  constructor(){
    super();
    this.fields.push('RG');
  }
}