import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { VideoService } from './../shared/services/videoService/index';
import { FavoriteService } from './../shared/services/favoritesService/index';
import { TimerService } from './../shared/services/TimerService';
import { AddFav } from './../shared/entities/index';
import { NgxCarousel } from 'ngx-carousel';
import { Observable } from 'rxjs/Rx';
import { VgAPI } from 'videogular2/core';
import * as $ from 'jquery';
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
  selector: 'app-video-selection',
  templateUrl: './video-selection.component.html',
  styleUrls: ['./video-selection.component.css'],
})
export class VideoSelectionComponent implements OnInit {
  countDown;
  isPlaying: any = false;
  videoIndex = 0;
  videoItem: any;
  videoArray: any[] = [];
  sources: Array<Object>;
  api: VgAPI;
  @ViewChild('close') close: ElementRef;
  @ViewChild('next') myRight: ElementRef;
  @ViewChild('home') myHomeBtn: ElementRef;
  idss: any;
  video: any[] = [];
  cards: any[] = [];
  bucketName: any;
  innerheigth: any;
  imgUrl: any;
  color: any;
  arrayIndex: any = 0;
  public carouselTile: NgxCarousel;
  time: any;
  downCount = 0;
  upCount = 0;
  crossColor: any;
  currentSlide: any;
  success: any = false;
  beforeFavCall: any = true;
  waterpx: any = "100";
  waterPxCountdown: any = "100px";
  initialTime = localStorage.getItem('screenTimeLimit').match(/\d+/g).map(Number);
  UnitOfTIme = 100 / this.initialTime[0];
  timeInSeconds: any;
  constructor(private route: ActivatedRoute,
    private videoService: VideoService,
    public favService: FavoriteService,
    public timerService: TimerService,
    public router: Router,
    private spinnerService: Ng4LoadingSpinnerService) {
    var Url = this.route.snapshot.params['url'];
    this.imgUrl = Url;
    var Color = this.route.snapshot.params['color'];
    this.color = Color;
    var ids = this.route.params.subscribe(params => {
      this.idss = +params['id'];
    });
    this.getSubCard();
    this.timerService.getCountdownTimer().subscribe(data => {
      this.countDown = data;
      this.timeInSeconds = this.countDown * 60 + 's';
      this.waterpx = this.waterpx - this.UnitOfTIme;
      this.waterPxCountdown = this.waterpx + "px";
    });
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
      var video = this.video[this.arrayIndex];
      this.openNav();

    }
    if (event.keyCode === KEY_CODE.escape_key) {
      this.close.nativeElement.focus();
      this.closeNav();
    }

  }

  GoDown() {

    if (this.downCount < 1) {
      this.downCount++;
    }
    if (this.downCount == 1) {
      this.myRight.nativeElement.focus();
      this.crossColor = 0;
      this.arrayIndex = 0;
      this.upCount = 0;
      this.downCount = 0;
    }

  }
  GoUp() {
    if (this.upCount < 2) {
      this.upCount++;
    }
    if (this.upCount == 1) {
      this.myHomeBtn.nativeElement.focus();
      this.crossColor = 1;
    }
    if (this.upCount == 2) {
      this.goToHome();
      this.upCount = 0;
    }
  }
  onmoveFn(data) {
    this.currentSlide = data.currentSlide + 1;
  }

  GoLeft() {
    --this.arrayIndex;
    --this.videoIndex;
    this.nextVideo();
    if (this.arrayIndex == -1) {
      this.arrayIndex = 0;
      this.videoIndex = 0;
      this.nextVideo();
    }
  }
  GoRight() {
    ++this.arrayIndex;
    ++this.videoIndex;
    this.nextVideo();
    if (this.arrayIndex == this.video.length - 2) {
      this.arrayIndex = 0;
      this.videoIndex = 0;
    }
  }
  ngOnInit() {
    this.time = localStorage.getItem('screenTimeLimit');
    this.carouselTile = {
      grid: { xs: 3, sm: 3, md: 4, lg: 5, all: 0 },
      slide: 1,
      speed: 400,
      loop: true,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
        .tile {
          position: relative;
          max-width:80%;
          transform: scale(1.3);
          border-radius: 10px;
      }
      
      .ngxcarousel-inner {
        height: 450px;
        width: 108%;
    }
      .ngxcarouselPoint {
        display: none;
    }
    .ngxcarousel-items {
      top: 88px;
      left: 8%;
  }
  ngx-tile.item {
    margin: 3%;
    }
    @media(max-width:812px){
      .tile{
        transform: scale(.9);
        max-width:78%;
      }
      ngx-tile.item{
        margin:-2% !important;
      }
    }
        `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }
  getSubCard() {
    this.spinnerService.show();
    this.videoService.GetSubCard(this.idss).subscribe(data => {
      this.spinnerService.hide();
      this.cards = data.subcards;
      var subCard = [];
      var subCardArray = [];
      var temp = [];
      var arrayTemp = [];
      for (var index = 0; index < this.cards.length; index++) {
        subCard = [{ 'id': this.cards[index].id, 'duration': this.cards[index].duration, 'imgUrl': this.VideoImageUrl(this.cards[index].id), 'Title': this.cards[index].title }];
        subCardArray = [this.videoURL(this.cards[index].formats, this.cards[index].id)];
        temp.push(subCard);
        arrayTemp.push(subCardArray);
      }
      this.video = temp;
      this.FavouritesArray = this.video;
      this.videoArray = arrayTemp;

      console.log(this.videoArray);
      this.videoItem = this.videoArray[this.videoIndex];
      console.log(this.videoItem);
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
  openNav() {

    document.getElementById("myNav").style.display = "block";
    this.isPlaying = true;
    this.api.play();
  }
  closeNav() {
    document.getElementById("myNav").style.display = "none";
    this.api.pause();
    this.videoItem = "";
    this.api.getDefaultMedia().subscriptions.ended.subscribe();
    this.videoIndex++;
    this.nextVideo();
  }
  FavouritesArray: any;
  addToFav(id: any) {
    let favourite = new AddFav();
    favourite.videoId = id;
    favourite.kidId = +localStorage.getItem('kidId');
    this.spinnerService.show();
    this.favService.addFavrouit(favourite).subscribe(data => {
      console.log(data);
      console.log("test");
      this.success = true;
      this.beforeFavCall = false;
      this.spinnerService.hide();
    },
      Error => {
        console.log("test");

        this.spinnerService.hide();
      });
  }
  IsFavourite(id: any) {
    // let data = this.vid
    return true;
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe();
    this.api.getDefaultMedia().subscriptions.ended.subscribe();
  }
  nextVideo() {
    if (this.videoIndex === this.videoArray.length) {
      this.videoIndex = 0;
    }
    this.videoItem = this.videoArray[this.videoIndex];
    console.log(this.videoItem);
    this.api.getDefaultMedia().currentTime = 0;
  }
  goToHome() {
    this.router.navigate(['./']);
  }
}