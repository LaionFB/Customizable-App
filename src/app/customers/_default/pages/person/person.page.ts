import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss']
})
export class DefaultPersonPage implements OnInit {
  protected fields: string[] = [ 'First Name', 'Last Name', 'e-mail' ];

  constructor() {
  }

  ngOnInit() {
  }

}
