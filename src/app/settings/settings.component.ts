import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';


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
  @ViewChild('previous') myLeft: ElementRef;
  @ViewChild('next') myRight: ElementRef;
  arrayIndex: any = 1;
  public carouselTile: NgxCarousel;
  age: any[] = [3, 4, 5, 6, 7];
  timeLimit: any[] = ['5 Minutes', '20 Minutes', '40 Minutes', '60 Minutes', '90 Minutes', 'Off'];
  content: any[] = ["Mix", "Entertainment", "Educational"];
  language: any[] = ["English", "Espanol", "Français", "Portugues"];
  ageValue: any;
  timeVlaue: any;
  contentValue: any;
  langValue: any;
  testt: any[] = [];
  selectedAge: any;
  selectedTime: any;
  selectedContent: any;
  selectedLanguage: any;
  upCount: any = 0;
  ageItemsIndex: any = 0;
  timeItemsIndex: any;
  contentItemsIndex: any;
  langItemsIndex: any;
  ageIndex: any = this.age.length;
  timeIndex: any = this.timeLimit.length;
  contentIndex: any = this.content.length;
  langIndex: any = this.language.length;
  homeColor: any;
  constructor(public router: Router, ) {
    this.selectedAge = localStorage.getItem('Age');
    this.selectedTime = localStorage.getItem('screenTimeLimit');
    this.selectedContent = localStorage.getItem('selectedContentType');
    this.selectedLanguage = localStorage.getItem('language');

  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.GoRight();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.GoLeft();
    }
    if (event.keyCode === KEY_CODE.Up_key) {
      this.GoUp();
    }
    if (event.keyCode === KEY_CODE.Down_key) {
      this.GoDown();

    }
    if (event.keyCode === KEY_CODE.Enter) {

      this.GoToEnter();
    }
  }
  GoToEnter() {
    if (this.arrayIndex != 0) {
      this.myHomeBtn.nativeElement.blur();
    }
    if (this.arrayIndex == 1) {
      this.getAge(this.age[this.ageItemsIndex]);
      this.ageItemsIndex = 8;
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
  GoDown() {
    if (this.arrayIndex == 0) {
      this.myHomeBtn.nativeElement.blur();
      this.arrayIndex = 1;
      this.ageItemsIndex = -1;
      this.homeColor = 0;
    }
    if (this.ageIndex < 6 && this.arrayIndex == 1) {
      this.ageItemsIndex++;
      if (this.ageItemsIndex == 5) {
        this.ageItemsIndex = 0;
      }
    }
    if (this.timeIndex < 7 && this.arrayIndex == 2) {
      this.timeItemsIndex++;
      if (this.timeItemsIndex == 6) {
        this.timeItemsIndex = 0;
      }
    }
    if (this.contentIndex < 4 && this.arrayIndex == 3) {
      this.contentItemsIndex++;
      if (this.contentItemsIndex == 3) {
        this.contentItemsIndex = 0;
      }
    }
    if (this.langIndex < 5 && this.arrayIndex == 4) {
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
      this.goToHome();
      this.upCount = 0;
    }

    if (this.ageIndex > 0 && this.arrayIndex == 1) {
      --this.ageItemsIndex;
    }
    if (this.ageItemsIndex == -1 && this.arrayIndex == 1) {
      this.arrayIndex = 0;
      this.homeColor = 1;
    }
    if (this.timeIndex > 0 && this.arrayIndex == 2) {
      --this.timeItemsIndex;
    }
    if (this.timeItemsIndex == -1 && this.arrayIndex == 2) {
      this.arrayIndex = 0;
      this.homeColor = 1;
    }
    if (this.contentIndex > 0 && this.arrayIndex == 3) {
      --this.contentItemsIndex;
    }
    if (this.contentItemsIndex == -1 && this.arrayIndex == 3) {
      this.arrayIndex = 0;
      this.homeColor = 1;
    }
    if (this.langIndex > 0 && this.arrayIndex == 4) {
      --this.langItemsIndex;
    }
    if (this.langItemsIndex == -1 && this.arrayIndex == 4) {
      this.arrayIndex = 0;
      this.homeColor = 1;
    }
  }
  boxIndex: any = 0;
  GoLeft() {
    --this.boxIndex;
    --this.arrayIndex;
    if (this.boxIndex == 0) {
      this.boxIndex = 1;
    }
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
    ++this.boxIndex;
    ++this.arrayIndex;
    if (this.boxIndex == 4) {
      this.boxIndex = 0;
    }
    if (this.arrayIndex == 1) {
      this.ageItemsIndex == 0;
      this.homeColor = 0;
    }
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
  onmoveFn(data) {
  }
  ngOnInit() {
    this.carouselTile = {
      grid: { xs: 2, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 1,
      speed: 400,
      loop: true,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
        .ngxcarouselPoint {
          display: none;
        }
        .ngxcarousel-inner {
          height: 600px;
          width: 123%;
          left: -12%;
        }
        @media(max-width:1024px){
          .ngxcarousel-inner {
            left:2%;
          }

        }
        
        .ngx-tile.item {
          width:80%;
        }
        ngx-tile.item {
          margin-left: -10px;
        }
        @media(max-width:812px)
        {
          ngx-tile.item {
            margin-left:0px;

          }
          .ngxcarousel > .ngxcarousel-inner > .ngxcarousel-items > .item{
            width : 27% !important;
          }
          .ngxcarousel-items{
            top:0 !important;
          }
          .ngxcarousel-inner{
            height:290px !important;
            width: 88%;
            margin-left: -2%;
          }
        }
        .tile {
          width: 60%;
          border-radius: 18px;
          transform: scale(1);
          box-shadow:none !important;
        }
     
        @media(min-width:813px) and (max-width:991px){
          .tile{
            width:40%;
          }
          .ngxcarousel-inner{
            height: 380px !important;
            width: 111%;
            margin-left: 1%;
          }
          ngx-tile.item {
            margin-right: -25%;
          }
        }
        .ngxcarousel-items {
          top: 53px;
          left:6%;
        }
        @media(max-width:812px){
          .tile{
            width:79%;
          }
          .ngxcarousel-items {
            left:21%;
          }
        }

        @media (min-width: 992px){
          .ngxcarouselxUMiWG > .ngxcarousel > .ngxcarousel-inner > .ngxcarousel-items > .item {
            width: 27% !important;
          }

        }
        `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
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
  goToHome() {
    this.router.navigate(['./']);
  }
}
