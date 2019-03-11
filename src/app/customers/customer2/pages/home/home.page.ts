import { DefaultHomePage } from '../../../_default/pages/home/home.page';

export class Customer2HomePage extends DefaultHomePage{
    constructor(){
        super();
        this.links = this.links.filter(link => link.ref != 'terms-and-conditions');
        this.links.push({ ref: 'privacy-policies', text: 'Privacy Policies' });
    }
}