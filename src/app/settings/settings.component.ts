import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';


export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  Enter = 13,
  Up_key = 38,
  Down_key = 40
}


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @ViewChild('home') myHomeBtn: ElementRef;
  @ViewChild('box1') firstBox: ElementRef;
  @ViewChild('box2') secondBox: ElementRef;
  @ViewChild('box3') thirdBox: ElementRef;
  @ViewChild('box4') forthBox: ElementRef;
  arrayIndex: any = 0;
  age: any[] = [3, 4, 5, 6, 7];
  timeLimit: any[] = [5, 20, 40, 60, 90];
  content: any[] = ["Mix", "Entertainment", "Educational"];
  language: any[] = ["English", "Espanol", "Français", "Portugues"];
  ageValue: any;
  timeVlaue: any;
  contentValue: any;
  langValue: any;
  off: any;
  testt: any[] = [];
  selectedAge: any;
  selectedTime: any;
  selectedContent: any;
  selectedLanguage: any;
  constructor() {
    this.off = "Off";
    this.selectedAge = localStorage.getItem('Age');
    this.selectedTime = localStorage.getItem('screenTimeLimit');
    this.selectedContent = localStorage.getItem('selectedContentType');
    this.selectedLanguage = localStorage.getItem('language');
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      console.log("right key ");
      this.GoRight();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      console.log("left key ");
      this.GoLeft();
    }
    if (event.keyCode === KEY_CODE.Up_key) {
      console.log("Up key ");
      this.GoUp();
    }
    if (event.keyCode === KEY_CODE.Down_key) {
      console.log("Down key ");
      this.GoDown();

    }
    if (event.keyCode === KEY_CODE.Enter) {
      console.log("Enter key ");

    }

  }

  GoDown() {

    // if (this.downCount < 2) {
    //   this.downCount++;
    // }
    // if (this.downCount == 1) {
    //   this.myRight.nativeElement.focus();
    // }

    // if (this.downCount == 2) {
    //   this.mySettingsBtn.nativeElement.focus();
    //   this.downCount = 0;
    // }
    // console.log("test");

  }
  GoUp() {
    this.myHomeBtn.nativeElement.focus();
    // if (this.upCount < 2) {
    //   this.upCount++;
    // }
    // if (this.upCount == 1) {
    //   this.myLeft.nativeElement.focus();
    // }
    // if (this.upCount == 2) {
    //   this.myFavBtn.nativeElement.focus();
    //   this.upCount = 0;
    // }
    // this.myFavBtn.nativeElement.focus();
  }
  GoLeft() {
    --this.arrayIndex;
    // this.myLeft.nativeElement.focus();
  }
  GoRight() {
    console.log("test");
    ++this.arrayIndex;
  }
  ngOnInit() {
  }
  setAgeTick(val: any) {
    let age = localStorage.getItem('Age');
    if (val == age) {
      return true;
    }
    else {
      return false
    }
  }
  setTimeTick(val: any) {
    let time = localStorage.getItem('screenTimeLimit');
    if (val == time) {
      return true;
    } else {
      return false;
    }
  }
  setContentTick(val: any) {
    let content = localStorage.getItem('selectedContentType');
    if (val == content) {
      return true;
    } else {
      return false;
    }
  }
  setLanguageTick(val: any) {
    let language = localStorage.getItem('language');
    if (val == language) {
      return true;
    } else {
      return false;
    }
  }

  getAge(age: any) {
    localStorage.setItem('Age', age);
    this.selectedAge = age;
  }
  getTime(time: any) {
    localStorage.setItem('screenTimeLimit', time);
    this.selectedTime = time;
  }
  getContent(content: any) {
    localStorage.setItem('selectedContentType', content);
    this.selectedContent = content;
  }
  getLanguage(lang: any) {
    localStorage.setItem('language', lang);
    this.selectedLanguage = lang;
  }
}
