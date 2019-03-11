import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class DefaultHomePage implements OnInit {
  protected message: string = 'Welcome to Customizable App!';
  protected links: { ref: string, text: string }[] = [
    { ref: "person", text: "Persons" },
    { ref: "terms-and-conditions", text: "Terms and conditions" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
