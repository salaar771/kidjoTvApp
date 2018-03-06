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
  @ViewChild('lost') LostFocus: ElementRef;

  @ViewChild('box1') firstBox: ElementRef;
  @ViewChild('box2') secondBox: ElementRef;
  @ViewChild('box3') thirdBox: ElementRef;
  @ViewChild('box4') forthBox: ElementRef;
  @ViewChild('fitrstList') fitrstList: ElementRef;
  @ViewChild('secondList') secondList: ElementRef;
  @ViewChild('thirdtList') thirdtList: ElementRef;
  @ViewChild('forthList') forthList: ElementRef;
  arrayIndex: any = 1;
  liIndex: any = 0;
  age: any[] = [3, 4, 5, 6, 7];
  timeLimit: any[] = ['5 Minutes', '20 Minutes', '40 Minutes', '60 Minutes', '90 Minutes','Off'];
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

  downCount: any = 0;
  upCount: any = 0;
  ageItemsIndex: any = 0;
  timeItemsIndex: any;
  contentItemsIndex: any;
  langItemsIndex: any;
  ageIndex: any = this.age.length;
  timeIndex: any = this.timeLimit.length;

  contentIndex: any = this.content.length;
  langIndex: any = this.language.length;
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

      if (this.arrayIndex != 0) {
        this.myHomeBtn.nativeElement.blur();
      }

      if (this.arrayIndex == 1) {

        this.getAge(this.age[this.ageItemsIndex]);
        this.ageItemsIndex = 8;
        // this.arrayIndex = 2;

      }
      if (this.arrayIndex == 2) {

        this.getTime(this.timeLimit[this.timeItemsIndex]);
        this.timeItemsIndex = 8;
      }
      if (this.arrayIndex == 3) {

        this.getContent(this.content[this.contentItemsIndex]);
        this.contentItemsIndex = 6;
      }
      if (this.arrayIndex == 4) {

        this.getLanguage(this.language[this.langItemsIndex]);
        this.langItemsIndex = 8;
      }


      this.arrayIndex = 0;
    }

  }


  GoDown() {
    if (this.arrayIndex == 0) {
      this.myHomeBtn.nativeElement.blur();
      this.arrayIndex = 1;
    }
    if (this.arrayIndex == 1) {
      this.fitrstList.nativeElement.focus();
    }

    if (this.ageIndex < 6 && this.arrayIndex == 1) {
      // this.getAge(this.age[this.itemsIndex++]);
      this.ageItemsIndex++;
      if (this.ageItemsIndex == 5) {
        this.ageItemsIndex = 0;
      }
    }
    if (this.timeIndex < 7 && this.arrayIndex == 2) {
      // this.getTime(this.timeLimit[this.itemsIndex++]);
      this.timeItemsIndex++;
      if (this.timeItemsIndex == 6) {
        this.timeItemsIndex = 0;
      }
    }
    if (this.contentIndex < 4 && this.arrayIndex == 3) {
      // this.getTime(this.timeLimit[this.itemsIndex++]);
      this.contentItemsIndex++;
      if (this.contentItemsIndex == 3) {
        this.contentItemsIndex = 0;
      }
    }
    if (this.langIndex < 5 && this.arrayIndex == 4) {
      // this.getTime(this.timeLimit[this.itemsIndex++]);
      this.langItemsIndex++;
      if (this.langItemsIndex == 4) {
        this.langItemsIndex = 0;
      }
    }

  }


  GoUp() {

    if (this.arrayIndex != 0) {

    }


    if (this.upCount < 1) {
      this.upCount++;
    }
    if (this.upCount == 1 && this.arrayIndex == 0) {
      this.myHomeBtn.nativeElement.focus();
      this.upCount = 0;
    }

    if (this.selectedAge > 3 && this.arrayIndex == 1) {
      // this.getAge(this.age[--this.itemsIndex]);
      --this.ageItemsIndex;

    }

    if (this.timeIndex > 0 && this.arrayIndex == 2) {
      // this.getAge(this.age[--this.itemsIndex]);
      --this.timeItemsIndex;

    }

    if (this.contentIndex > 0 && this.arrayIndex == 3) {
      // this.getAge(this.age[--this.itemsIndex]);
      --this.contentItemsIndex;

    }

    if (this.langIndex > 0 && this.arrayIndex == 4) {
      // this.getAge(this.age[--this.itemsIndex]);
      --this.langItemsIndex;

    }

  }
  GoLeft() {
    --this.arrayIndex;
    if (this.arrayIndex == 0) {
      this.arrayIndex = 1;
    }
    if (this.arrayIndex == 3) {
      this.timeItemsIndex = 8;
      this.contentItemsIndex = 0;
      this.langItemsIndex = 6;
      this.ageItemsIndex = 7;
    }
    if (this.arrayIndex == 2) {
      this.timeItemsIndex = 0;
      this.contentItemsIndex = 6;
      this.langItemsIndex = 6;
      this.ageItemsIndex = 7;
    }
    if (this.arrayIndex == 1) {
      this.timeItemsIndex = 8;
      this.contentItemsIndex = 6;
      this.langItemsIndex = 6;
      this.ageItemsIndex = 0;
    }
  }
  GoRight() {
    ++this.arrayIndex;
    if (this.arrayIndex == 5) {
      this.arrayIndex = 1;
      this.ageItemsIndex = 0;
      this.langItemsIndex = 7;
    }
    if (this.arrayIndex == 2) {
      this.timeItemsIndex = 0;
      this.contentItemsIndex = 5;
      this.langItemsIndex = 6;
      this.ageItemsIndex = 7;
    }
    if (this.arrayIndex == 3) {
      this.contentItemsIndex = 0;
      this.langItemsIndex = 6;
      this.ageItemsIndex = 7;
      this.timeItemsIndex = 8;
    }
    if (this.arrayIndex == 4) {
      this.langItemsIndex = 0;
      this.ageItemsIndex = 7;
      this.timeItemsIndex = 8;
      this.contentItemsIndex = 5;
    }
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
