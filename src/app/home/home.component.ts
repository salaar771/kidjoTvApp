import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { RefreshWebService } from './../shared/services/RefreshWeb/index';
import { Card } from './../shared/entities/index';
import { NgxCarousel } from 'ngx-carousel';
import { HotkeysService, Hotkey } from "angular2-hotkeys";
declare var $: any;


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
})
export class HomeComponent implements OnInit {
  @ViewChild('setting') mySettingsBtn: ElementRef;
  @ViewChild('favorite') myFavBtn: ElementRef;
  @ViewChild('previous') myLeft: ElementRef;
  @ViewChild('next') myRight: ElementRef;
  @ViewChild('slider') slider: ElementRef;
  videoImageUrl: any;

  deviceId: string;
  kidId: string;
  activeSubscription: boolean;
  obj = new Object();
  public innerheigth: any;
  ImageUrl: string;
  ids: any[] = [];
  cards: any[] = [];
  folders: any[] = [];
  bucketName: any;
  videoUrl: string;
  time: any;
  arrayIndex: any = 0;
  downCount = 0;
  upCount = 0;
  public carouselTile: NgxCarousel;
  constructor(public refreshweb: RefreshWebService,
    public router: Router,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.refreshWeb();

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

      var folder = this.folders[this.arrayIndex];
      this.goToVideoPage(folder[0].id, folder[0].imgUrl, folder[0].color);

    }

  }
  onmoveFn(data) {

    console.log(data);
  }


  GoDown() {

    if (this.downCount < 2) {
      this.downCount++;
    }
    if (this.downCount == 1) {

      this.myRight.nativeElement.focus();
      this.arrayIndex = 0;
    }

    if (this.downCount == 2) {
      this.mySettingsBtn.nativeElement.focus();
      this.arrayIndex = 645734;
      this.downCount = 0;
    }
    console.log("test");

  }
  GoUp() {
    if (this.upCount < 2) {
      this.upCount++;
    }
    if (this.upCount == 1) {
      this.myLeft.nativeElement.focus();
      this.arrayIndex = 0;
    }
    if (this.upCount == 2) {
      this.myFavBtn.nativeElement.focus();
      this.arrayIndex = 23443;
      this.upCount = 0;
    }
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

    this.GetCard();
    this.time = localStorage.getItem('screenTimeLimit');
    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 4, lg: 5, all: 0 },
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
        height: 350px;
        width: 108%;
         }
       .ngx-tile.item {
        width:80%;
       }
        .tile {
        width: 60%;
        border-radius: 15px;
       }
      .ngxcarousel-items {
      top: 39px;
      left:8%;
       }
         @media (min-width: 992px){
              .ngxcarouselxUMiWG > .ngxcarousel > .ngxcarousel-inner > .ngxcarousel-items > .item {
                   width: 31% !important;
              }
  
          }
        `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }

  }
  refreshWeb() {
    this.deviceId = localStorage.getItem('X-Kidjo-DeviceId');
    if (!this.deviceId) {
      this.refreshweb.RefreshWeb().subscribe(data => {
        console.log(data);
        this.ImageUrl = data.folderImageUrl;
        this.videoUrl = data.videoUrl;
        this.videoImageUrl = data.videoImageUrl;
        localStorage.setItem('videoImageUrl', this.videoImageUrl);
        localStorage.setItem('videoUrl', this.videoUrl)
        localStorage.setItem('folderImageUrl', this.ImageUrl);
        localStorage.setItem('X-Kidjo-DeviceId', data.deviceId);
        this.kidId = data.kids[0].id;
        localStorage.setItem('kidId', this.kidId);
        this.activeSubscription = data.User[0].activeSubscription;
      })
    }
    if (this.activeSubscription == true) {
      localStorage.setItem('premiumActive', 'true');
    } else {
      localStorage.setItem('premiumActive', 'false');
    }
  }
  GetCard() {
    this.obj = localStorage.getItem('kidId');
    this.obj = localStorage.getItem('premiumActive');
    this.spinnerService.show();
    this.refreshweb.GetCard(this.obj).subscribe(data => {
      this.spinnerService.hide();
      this.cards = data.cards;
      var tempData = [];
      var test = [];
      var color: any[] = ['red', 'yellow', 'blue', 'green', 'orange', 'purple'];
      var counter = 0;
      for (var index = 0; index < this.cards.length; index++) {
        if (counter == 5) {
          counter = 0;
        }
        if (this.cards[index].id) {
          test = [{ 'id': this.cards[index].id, 'color': color[counter], 'imgUrl': this.folderImage(this.cards[index].id) }]
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
    console.log(color);
    this.router.navigate(['./video', id, url, color]);
  }

}
