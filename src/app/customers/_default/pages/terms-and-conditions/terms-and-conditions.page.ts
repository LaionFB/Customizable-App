import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss']
})
export class DefaultTermsAndConditionsPage implements OnInit {
  //@ViewChild('customArea') customArea: ElementRef;
  @ViewChild('customArea', { read: ViewContainerRef }) customArea: ViewContainerRef;
 
  constructor(protected resolver: ComponentFactoryResolver){ }

  ngOnInit() {
  }

}
