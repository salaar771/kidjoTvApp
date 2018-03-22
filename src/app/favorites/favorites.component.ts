import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FavoriteService } from './../shared/services/favoritesService/index';
import { VideoService } from './../shared/services/videoService/index';
import { TimerService } from './../shared/services/TimerService';
import { RemoveFav } from './../shared/entities/index';
import { NgxCarousel } from 'ngx-carousel';
import { VgAPI } from 'videogular2/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'



export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  Enter = 13,
  Up_key = 38,
  Down_key = 40,
  escape_key = 27
}


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  countDown: any;
  isPlaying: any = false;
  FavVideoArray: any;
  videoIndex = 0;
  videoItem: any;
  api: VgAPI;
  innerheigth: any;
  bucketName: any;
  @ViewChild('video') openVideo: ElementRef;
  @ViewChild('overtime') OverTimeError: ElementRef;
  @ViewChild('delete') deleteButton: ElementRef;
  @ViewChild('close') close: ElementRef;
  @ViewChild('next') myRight: ElementRef;
  @ViewChild('home') myHomeBtn: ElementRef;
  public carouselTile: NgxCarousel;
  time: any;
  color: any;
  Favorites: any[] = [];
  FavVideo: any[] = [];
  downCount = 0;
  upCount = 0;
  arrayIndex: any = 0;
  timeInSeconds: any;
  remainingTime: any = 0;
  timeInMinut: any;
  overTime: any = false;
  constructor(public favService: FavoriteService,
    public router: Router,
    private videoService: VideoService,
    public timerService: TimerService,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.getList();
    if (localStorage.getItem('screenTimeLimit')) {
      this.timerService.getCountdownTimer().subscribe(data => {
        this.countDown = data + "min";
        if (localStorage.getItem('screenTimeLimit') == "Off") {
          this.countDown = "Off";
        }
        if (data == 1) {
          this.overTime = true;
          this.api.pause();
          this.api.getDefaultMedia().subscriptions.ended.subscribe();
          this.api.currentTime = 0;
        }
        console.log(this.countDown);
        this.timeInSeconds = this.countDown * 60 + 's';
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

      // var video = this.FavVideo[this.arrayIndex];
      // if (video) {
      //   this.openNav();
      // }
    }
    if (event.keyCode === KEY_CODE.escape_key) {
      this.close.nativeElement.focus();
      this.closeNav();
    }
    if (event.keyCode && this.overTime == true) {
      this.gotoSettings();
    }

  }
  btnIndex: any;
  GoDown() {
    if (this.downCount < 3) {
      this.downCount++;
    }
    if (this.downCount == 1) {
      this.deleteButton.nativeElement.focus();
      this.btnIndex = this.arrayIndex;
      this.arrayIndex = 76764532734;
    }
    if (this.downCount == 2) {
      this.myHomeBtn.nativeElement.focus();
      this.deleteButton.nativeElement.blur();
      this.color = 1;
      this.btnIndex = -1;
      this.arrayIndex = 76764532734;
    }
    if (this.downCount == 3) {
      this.goToHome();
      this.downCount = 0;
    }
  }
  GoUp() {
    if (this.upCount < 1) {
      this.upCount++;
    }
    if (this.upCount == 1) {
      this.deleteButton.nativeElement.blur();
      this.btnIndex = -1;
      this.arrayIndex = 0;
      this.color = 0;
      this.upCount = 0;
      this.downCount = 0;
    }
  }
  onmoveFn($event) {
  }
  GoLeft() {
    --this.arrayIndex;
    if (this.arrayIndex == -1) {
      this.arrayIndex = 0;
    }
  }
  GoRight() {
    ++this.arrayIndex;
    if (this.arrayIndex == this.FavVideo.length) {
      this.arrayIndex = 0;
    }
  }
  ngOnInit() {
    this.time = localStorage.getItem('screenTimeLimit');
    this.carouselTile = {
      grid: { xs: 3, sm: 3, md: 4, lg: 4, all: 0 },
      slide: 1,
      speed: 400,
      loop: true,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
        .tile {
          position: relative;
          max-width:56%;
          transform: scale(1.43);
          border-radius: 10px;
          box-shadow: none !important;
      }
      .ngxcarousel-inner {
        height: 500px;
    }
      .ngxcarouselPoint {
        display: none;
    }
    ngx-carousel.ngxcarouselBqQEaX{
      width:100% !important;
    }
    .ngxcarousel-items {
      top: 20%;
      left: 10%;
  }
  @media(max-width:812px){
    .tile {
      transform: scale(1.2);
    }
  }
    `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }
  sourceUrl: any;
  openNav(url: any, videoId: any) {
    localStorage.setItem('videoId', videoId);
    this.videoService.startVideo(videoId).subscribe(data => {
      console.log(data);
    });
    this.sourceUrl = url;
    document.getElementById("myNav").style.display = "block";
    this.isPlaying = true;
    this.sourceUrl.api.play();
  }
  closeNav() {
    let timeLeft = localStorage.getItem('timeleft').match(/\d+/g).map(Number);
    console.log(timeLeft[0]);
    this.remainingTime = timeLeft[0] * 60 - this.api.currentTime;
    this.timeInMinut = Math.round(this.remainingTime / 60);
    console.log(this.timeInMinut);
    localStorage.setItem('timeleft', this.timeInMinut + "" + "Minutes");
    let obj = new Object();
    obj['videoId'] = localStorage.getItem('videoId');
    obj['kidId'] = localStorage.getItem('kidId');
    obj['endedAtSeconds'] = this.remainingTime;
    console.log(obj);
    this.videoService.EndVideo(obj).subscribe(data => {
      console.log(data);
    });
    document.getElementById("myNav").style.display = "none";
    this.api.pause();
    this.sourceUrl = "";
    this.api.getDefaultMedia().subscriptions.ended.subscribe();
    this.api.currentTime = 0;
  }
  getList() {
    var kidId = localStorage.getItem('kidId');
    this.spinnerService.show();
    this.favService.GetFavorite(kidId).subscribe(data => {
      this.spinnerService.hide();
      this.Favorites = data.favorites;
      var subCard = [];
      var temp = [];
      for (var index = 0; index < this.Favorites.length; index++) {
        subCard = [{ 'id': this.Favorites[index].id, 'videourl': this.videoURL(this.Favorites[index].formats, this.Favorites[index].id), 'duration': this.Favorites[index].duration, 'imgUrl': this.VideoImageUrl(this.Favorites[index].id), 'Title': this.Favorites[index].title }];
        temp.push(subCard);
      }
      this.FavVideo = temp;
      console.log(this.FavVideo);
    },
      Error => {
        this.spinnerService.hide();
      });
  }
  videoURL(FormateIds: any[], id: any) {
    var url = localStorage.getItem('videoUrl');
    this.innerheigth = window.innerHeight;
    if (this.innerheigth >= 720) {
      var formateArray = FormateIds.filter(x => x.id == 3);
      var index = FormateIds.findIndex(a => a.id == 3);
      if (index > -1) {
        var ID = FormateIds[index].id;
        this.bucketName = '.mp4';
        var VideoUrl = url + ID + '/' + id + this.bucketName;
        return VideoUrl;
      }
    } else if (this.innerheigth >= 480) {
      var formateArray = FormateIds.filter(x => x.id == 6);
      var index = FormateIds.findIndex(a => a.id == 6);
      if (index > -1) {
        var ID = FormateIds[index].id;
        this.bucketName = '.mp4';
        var VideoUrl = url + ID + '/' + id + this.bucketName;
        return VideoUrl;
      }
    } else if (this.innerheigth <= 360) {
      var formateArray = FormateIds.filter(x => x.id == 7);
      var index = FormateIds.findIndex(a => a.id == 7);
      if (index > -1) {
        var ID = FormateIds[index].id;
        this.bucketName = '.mp4';
        var VideoUrl = url + ID + '/' + id + this.bucketName;
        return VideoUrl;
      }
    } else if (this.innerheigth <= 240) {
      var formateArray = FormateIds.filter(x => x.id == 8);
      var index = FormateIds.findIndex(a => a.id == 8);
      if (index > -1) {
        var ID = FormateIds[index].id;
        this.bucketName = '.mp4';
        var VideoUrl = url + ID + '/' + id + this.bucketName;
        return VideoUrl;
      }
    }
  }
  VideoImageUrl(id) {
    var url = localStorage.getItem('videoImageUrl');
    this.innerheigth = window.innerHeight;
    if (this.innerheigth <= 1440 && this.innerheigth >= 1080) {
      this.bucketName = 'phone-l';
    } else if (this.innerheigth <= 1080 && this.innerheigth >= 768) {
      this.bucketName = 'phone-m';
    } else if (this.innerheigth <= 360 && this.innerheigth >= 0) {
      this.bucketName = 'phone-s';
    } else if (this.innerheigth <= 2048 && this.innerheigth >= 1536) {
      this.bucketName = 'tablet-l';
    } else if (this.innerheigth <= 1536 && this.innerheigth >= 1440) {
      this.bucketName = 'tablet-m';
    } else if (this.innerheigth <= 768 && this.innerheigth >= 360) {
      this.bucketName = 'tablet-s';
    }
    return url + this.bucketName + '/' + id + '.png';
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe();
    this.api.getDefaultMedia().subscriptions.ended.subscribe();
  }
  deleteFav(id: any) {
    console.log(id);
    let remove = new RemoveFav();
    remove.kidId = localStorage.getItem("kidId");
    remove.videoId = id;
    this.spinnerService.show();
    let index = this.FavVideo.findIndex(a => a[0].id == id);
    console.log(this.FavVideo);
    console.log(index);
    if (index > -1) {
      console.log(index);
      this.FavVideo.splice(index, 1);
    }
    this.favService.RemoveFavorite(remove).subscribe(data => {
      console.log("test");

      this.spinnerService.hide();
    },
      Error => {

        this.spinnerService.hide();
      });

  }
  goToHome() {
    this.router.navigate(['./']);
  }
  gotoSettings() {
    this.router.navigate(['./settings']);
  }

}
