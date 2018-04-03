import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { RefreshWebService } from './../shared/services/RefreshWeb/index';
import { TimerService } from './../shared/services/TimerService';
import { Card } from './../shared/entities/index';
import { User } from './../shared/entities/user';
import { NgxCarousel } from 'ngx-carousel';
declare var $: any;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { routerTransition } from './../animations/index';



export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  Enter = 13,
  Up_key = 38,
  Down_key = 40
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class HomeComponent implements OnInit {
  backgroundImgSrc: any;
  countDown;
  @ViewChild('overtime') OverTimeError: ElementRef;
  @ViewChild('setting') mySettingsBtn: ElementRef;
  @ViewChild('favorite') myFavBtn: ElementRef;
  @ViewChild('previous') myLeft: ElementRef;
  @ViewChild('next') myRight: ElementRef;
  @ViewChild('slider') slider: ElementRef;
  videoImageUrl: any;
  currentSlide: any;
  deviceId: string;
  kidId: string;
  activeSubscription: boolean;
  favSection: boolean;
  cardSection: boolean = true;
  settingSection: boolean;
  obj = new Object();
  public innerheigth: any;
  ImageUrl: string;
  cards: any[] = [];
  folders: any[] = [];
  bucketName: any;
  videoUrl: string;
  time: any;
  arrayIndex: any = 0;
  currentCardIndex: any = 0;
  downCount = 0;
  upCount = 0;
  Favcolor: any = 0;
  settingsColor: any = 0;
  settingsUpCount: any = 0;
  public carouselTile: NgxCarousel;
  FavIndex: any = 0;

  timeInSeconds: any;
  overTime: any = false;
  constructor(public refreshweb: RefreshWebService,

    public router: Router,
    public timerService: TimerService,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.refreshWeb();
    if (localStorage.getItem('screenTimeLimit')) {
      this.timerService.getCountdownTimer().subscribe(data => {
        localStorage.setItem('timeleft', data);
        this.countDown = data + "" + "min";
        this.timeInSeconds = data * 60 + 's';
        if (localStorage.getItem('screenTimeLimit') == "Off") {
          this.countDown = "Off";
        }
        if (data == 1) {
          this.overTime = true;
        }

      });
    }

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

      var folder = this.folders[this.arrayIndex];
      this.goToVideoPage(folder[0].id, folder[0].imgUrl, folder[0].color);

    }
    if (event.keyCode && this.overTime == true) {
      this.OverTimeError.nativeElement.focus()
      this.goToSettingsPage();
    }

  }
  onmoveFn(data) {
    this.currentSlide = data.currentSlide;
  }
  GoDown() {

    if (this.settingSection) {
      this.goToSettingsPage();
    }

    if (this.cardSection) {
      this.cardSection = false;
      this.favSection = false;
      this.settingSection = true;
      this.currentCardIndex = this.arrayIndex;
      this.arrayIndex = 100;
      this.settingsColor = 1;
      this.mySettingsBtn.nativeElement.focus();
    }
    if (this.favSection) {
      this.favSection = false;
      this.settingSection = false;
      this.cardSection = true;
      this.arrayIndex = this.currentCardIndex;
      this.myLeft.nativeElement.focus();
      this.Favcolor = 0;
    }
  }
  GoUp() {

    if (this.favSection) {
      this.goToFavPage();
    }

    if (this.cardSection) {

      this.cardSection = false;
      this.settingSection = false;
      this.favSection = true;
      this.currentCardIndex = this.arrayIndex;
      this.arrayIndex = 100;
      this.myFavBtn.nativeElement.focus();
      this.Favcolor = 1;
    }
    if (this.settingSection) {
      this.settingSection = false;
      this.favSection = false;
      this.cardSection = true;
      this.settingsColor = 0;
      this.arrayIndex = this.currentCardIndex;
      this.myLeft.nativeElement.focus();
    }
  }
  GoLeft() {
    --this.arrayIndex;
    this.cardSection = true;
    this.favSection = false;
    this.settingSection = false;
    if (this.arrayIndex == -1) {
      this.arrayIndex = 0;
    }
  }
  GoRight() {

    ++this.arrayIndex;
    this.cardSection = true;
    this.favSection = false;
    this.settingSection = false;
    if (this.arrayIndex == this.folders.length) {
      this.arrayIndex = 0;
    }
  }
  ngOnInit() {

    this.GetCard();
    if (localStorage.getItem('screenTimeLimit') !== null) {
      this.time = localStorage.getItem('screenTimeLimit');
    }

    this.carouselTile = {
      grid: { xs: 3, sm: 3, md: 4, lg: 5, all: 0 },
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
          height: 360px;
          width: 108%;
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
          margin-left: 30px;
        }
        .ngxcarousel-items {
          top: 53px;
          left:4%;
        }
        @media(max-width:812px)
        {
          ngx-tile.item {
            margin-left:0px;
          }
          .ngxcarousel > .ngxcarousel-inner > .ngxcarousel-items > .item{
            width : 27% !important;
          }
          .ngxcarousel-items {
            left:10%;
          }
          
        }
        .tile {
          width: 60%;
          border-radius: 18px;
          transform: scale(1);
          box-shadow: none !important;
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
    this.innerheigth = window.innerHeight;
    if (this.innerheigth <= 1440 && this.innerheigth >= 1080) {
      this.backgroundImgSrc = "/assets/phone-l/background_day_bottom.jpg";
    } else if (this.innerheigth <= 1080 && this.innerheigth >= 768) {
      this.backgroundImgSrc = "/assets/phone-m/background_day_bottom.jpg";
    } else if (this.innerheigth <= 360 && this.innerheigth >= 0) {
      this.backgroundImgSrc = "/assets/phone-s/background_day_bottom.jpg";
    } else if (this.innerheigth <= 2048 && this.innerheigth >= 1536) {
      this.backgroundImgSrc = "/assets/tablet-l/background_day_bottom.jpg";
    } else if (this.innerheigth <= 1536 && this.innerheigth >= 1440) {
      this.backgroundImgSrc = "/assets/tablet-m/background_day_bottom.jpg";
    } else if (this.innerheigth <= 768 && this.innerheigth >= 360) {
      this.backgroundImgSrc = "/assets/tablet-s/background_day_bottom.jpg";
    }

  }
  refreshWeb() {

    this.deviceId = localStorage.getItem('X-Kidjo-DeviceId');
    if (!this.deviceId) {

      this.refreshweb.RefreshWeb().subscribe(data => {
        // this.walkThrough = true;
        this.ImageUrl = data.folderImageUrl;
        this.videoUrl = data.videoUrl;
        this.videoImageUrl = data.videoImageUrl;
        localStorage.setItem('videoImageUrl', this.videoImageUrl);
        localStorage.setItem('videoUrl', this.videoUrl)
        localStorage.setItem('folderImageUrl', this.ImageUrl);
        localStorage.setItem('X-Kidjo-DeviceId', data.deviceId);
        this.kidId = data.kids[0].id;
        localStorage.setItem('kidId', this.kidId);
        // this.activeSubscription = data.User[0].activeSubscription;
      });
      if (this.activeSubscription == true) {
        localStorage.setItem('premiumActive', 'true');
      } else {
        localStorage.setItem('premiumActive', 'false');
      }
    }

  }
  GetCard() {
    this.spinnerService.show();
    this.refreshweb.GetCard().subscribe(data => {
      this.spinnerService.hide();
      this.cards = data.cards;
      var tempData = [];
      var test = [];
      var color: any[] = ['red', 'yellow', 'blue', 'green', 'orange', 'prple'];
      var backgroundImages: any[] = ['assets/svgs/red-img.svg', 'assets/svgs/yellow-img.svg', 'assets/svgs/blue-img.svg', 'assets/svgs/green-img.svg', 'assets/svgs/orange-img.svg', 'assets/svgs/purple-img.svg'];
      var counter = 0;
      for (var index = 0; index < this.cards.length; index++) {
        if (counter == 6) {
          counter = 0;
        }
        if (this.cards[index].id) {
          test = [{ 'id': this.cards[index].id, 'back-color': color[counter], 'color': backgroundImages[counter], 'imgUrl': this.folderImage(this.cards[index].id) }]
          tempData.push(test);
          // increment counter
          counter++;
        }
      }
      this.folders = tempData;
    },
      Error => {
        this.spinnerService.hide();
      });
  }
  folderImage(id) {
    var url = localStorage.getItem('folderImageUrl');
    this.innerheigth = window.innerHeight;
    if (this.innerheigth <= 1440 && this.innerheigth >= 1080) {
      this.bucketName = '/phone-l';
    } else if (this.innerheigth <= 1080 && this.innerheigth >= 768) {
      this.bucketName = '/phone-m';
    } else if (this.innerheigth <= 360 && this.innerheigth >= 0) {
      this.bucketName = '/phone-s';
    } else if (this.innerheigth <= 2048 && this.innerheigth >= 1536) {
      this.bucketName = '/tablet-l';
    } else if (this.innerheigth <= 1536 && this.innerheigth >= 1440) {
      this.bucketName = '/tablet-m';
    } else if (this.innerheigth <= 768 && this.innerheigth >= 360) {
      this.bucketName = '/tablet-s';
    }
    return url + 'folderImage' + this.bucketName + '/' + id + '.png';
  }
  goToVideoPage(id: any, url: string, color: any) {
    this.router.navigate(['./video', id, url, color], { skipLocationChange: true });
  }
  goToFavPage() {
    this.router.navigate(['./favorites'], { skipLocationChange: true });
  }
  goToSettingsPage() {
    this.router.navigate(['./settings'], { skipLocationChange: true });
  }

}
