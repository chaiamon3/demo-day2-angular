import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  @Input() name: any;

  @Output() changedNameEvent = new EventEmitter<any>();

  doSomeChange() {
    console.log("Click on doSomeChange !!");
    this.name.age = 30;
    this.changedNameEvent.emit(this.name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
