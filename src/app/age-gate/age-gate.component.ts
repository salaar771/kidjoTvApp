import { Component, OnInit, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  Enter = 13,
  Up_key = 38,
  Down_key = 40
}
@Component({
  selector: 'app-age-gate',
  templateUrl: './age-gate.component.html',
  styleUrls: ['./age-gate.component.css']
})
export class AgeGateComponent implements OnInit {
  age: string = "";

  constructor() { }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.Enter) {
      document.getElementById('age-Gate').style.display = "none";
    }
  }

  ngOnInit() {
  }
  getAge(number: string) {
    this.age = this.age + number;
  }
  remove() {
    this.age = "";
  }

}
