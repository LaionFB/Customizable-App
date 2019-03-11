import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class DefaultInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit() {
  }

}
