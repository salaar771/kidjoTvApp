import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { VideoService } from './../shared/services/videoService/index';
import { FavoriteService } from './../shared/services/favoritesService/index';
import { TimerService } from './../shared/services/TimerService';
import { AddFav, RemoveFav } from './../shared/entities/index';
import { NgxCarousel } from 'ngx-carousel';
import { Observable } from 'rxjs/Rx';
import { VgAPI } from 'videogular2/core';
import * as $ from 'jquery';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { routerTransition } from "../animations/index";


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
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class VideoSelectionComponent implements OnInit {
  backgroundImgSrc: any;
  FavouriteBtnSrc: any = "assets/svgs/like.svg";
  FavouriteBtnText: any = "Favorite";
  countDown;
  isPlaying: any = false;
  videoIndex = 0;
  videoItem: any;
  videoArray: any[] = [];
  sources: Array<Object>;
  api: VgAPI;
  @ViewChild('overtime') OverTimeError: ElementRef;
  @ViewChild('video') openVideo: ElementRef;
  @ViewChild('deletebtn') deleteButton: ElementRef;
  @ViewChild('favbtn') FavouriteButton: ElementRef;
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
  FavouritesArray: any[] = [];
  downCount = 0;
  upCount = 0;
  btnIndex: any;
  crossColor: any;
  currentSlide: any;
  success: any = false;
  beforeFavCall: any = true;
  remainingTime: any = 0;
  timeInMinut: any;
  timeInSeconds: any;
  overTime: any = false;
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
    if (localStorage.getItem('screenTimeLimit')) {
      this.Time();
    }
  }
  Time() {
    this.timerService.getCountdownTimer().subscribe(data => {
      this.countDown = data + "min";
      if (localStorage.getItem('screenTimeLimit') == "Off") {
        this.countDown = "Off";
      }
      // this.countDown = this.countDown - this.timeInMinut;
      if (data == 1) {
        this.overTime = true;
        this.api.pause();
        this.api.getDefaultMedia().subscriptions.ended.subscribe();
        this.api.currentTime = 0;
      }
      this.timeInSeconds = this.countDown * 60 + 's';

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
    }
    if (event.keyCode === KEY_CODE.escape_key) {
      this.close.nativeElement.focus();
      this.closeNav();
    }
    if (event.keyCode && this.overTime == true) {
      this.goToSettingsPage();
    }

  }
  GoDown() {
    if (this.downCount < 1) {
      this.downCount++;
    }
    //runs when we move from cross button to slider
    if (this.downCount == 1 && this.upCount == 1) {
      this.myRight.nativeElement.focus();
      // this.openVideo.nativeElement.focus();
      this.crossColor = 0;
      this.arrayIndex = 0;
      this.upCount = 0;
    }

    //runs when we move from slider's first index to Favourite button 
    if (this.downCount == 1) {
      this.FavouriteButton.nativeElement.focus();
      // this.deleteButton.nativeElement.blur();
      this.btnIndex = this.arrayIndex;
      this.arrayIndex = 74578;
      this.downCount = 0;
    }
    if (this.downCount == 1 && this.upCount == 1) {
      this.FavouriteButton.nativeElement.blur();
      this.deleteButton.nativeElement.focus();
      // this.btnIndex = this.arrayIndex;
      this.arrayIndex = 74578;
      this.downCount = 0;
    }
    // if (this.downCount == 1 && this.arrayIndex == this.currentSlide) {
    //   console.log("test");
    //   this.arrayIndex = 74578;
    //   this.FavouriteButtonColor = 1;
    //   this.downCount = 0;
    // }

  }

  GoUp() {
    if (this.upCount < 2) {
      this.upCount++;
    }
    //runs when we move from slider to cross button
    if (this.upCount == 1) {
      this.myHomeBtn.nativeElement.focus();
      this.crossColor = 1;
      // this.btnIndex = 6433567;
      this.arrayIndex = 354635423;
    }
    //runs when we move from Favourite button to slider's first index
    if (this.upCount == 1 && this.btnIndex == 0) {
      this.FavouriteButton.nativeElement.blur();
      this.arrayIndex = 0;
      this.btnIndex = -1;
      this.crossColor = 0;
      this.upCount = 0;
    }
    //runs when we move from slider first index to cross button 
    if (this.upCount == 1 && this.btnIndex == -1) {
      this.FavouriteButton.nativeElement.blur();
      this.myHomeBtn.nativeElement.focus();
      this.crossColor = 1;
      this.arrayIndex = 67834689;
    }
    //runs when we move from Favourite button to slider's current index
    // if (this.upCount == 1 && this.btnIndex == this.currentSlide) {
    //   console.log("test");
    //   this.arrayIndex = this.currentSlide;
    //   this.btnIndex = -1;
    //   this.crossColor = 0;
    //   this.upCount = 0;
    // }
    if (this.upCount == 2 && this.crossColor == 1) {
      this.goToHome();
      this.upCount = 0;
    }
  }
  onmoveFn(data) {
    this.currentSlide = data.currentSlide + 1;
  }

  GoLeft() {
    --this.arrayIndex;
    this.openVideo.nativeElement.focus();
    this.FavouriteButton.nativeElement.blur();
    if (this.arrayIndex == -1) {
      this.arrayIndex = 0;
    }
  }
  GoRight() {
    ++this.arrayIndex;
    this.openVideo.nativeElement.focus();
    this.FavouriteButton.nativeElement.blur();
    if (this.arrayIndex == this.video.length - 3) {
      this.arrayIndex = 0;
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
          box-shadow:none !important;
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
    @media(max-width:991px)
    {
      .tile{
        max-width:72%;
      }
      
    }
    @media(min-width: 813px) and (min-width: 534px){
      .tile{
        max-width:66%;
      }
    }
    @media(max-width:812px){
      .tile{
        transform: scale(.8);
        max-width:72%;
      }
      ngx-tile.item{
        margin:-2% !important;
        margin-left:-4px !important;
      }
      .ngxcarousel-items {
        left: 17%;
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
      this.backgroundImgSrc = "/assets/phone-l/background_day_bottom.png";
    } else if (this.innerheigth <= 1080 && this.innerheigth >= 768) {
      this.backgroundImgSrc = "/assets/phone-m/background_day_bottom.png";
    } else if (this.innerheigth <= 360 && this.innerheigth >= 0) {
      this.backgroundImgSrc = "/assets/phone-s/background_day_bottom.png";
    } else if (this.innerheigth <= 2048 && this.innerheigth >= 1536) {
      this.backgroundImgSrc = "/assets/tablet-l/background_day_bottom.png";
    } else if (this.innerheigth <= 1536 && this.innerheigth >= 1440) {
      this.backgroundImgSrc = "/assets/tablet-m/background_day_bottom.png";
    } else if (this.innerheigth <= 768 && this.innerheigth >= 360) {
      this.backgroundImgSrc = "/assets/tablet-s/background_day_bottom.png";
    }
  }
  getSubCard() {
    this.spinnerService.show();
    this.videoService.GetSubCard(this.idss).subscribe(data => {
      this.spinnerService.hide();
      this.cards = data.subcards;
      var subCard = [];
      var temp = [];
      for (var index = 0; index < this.cards.length; index++) {
        subCard = [{ 'id': this.cards[index].id, 'videourl': this.videoURL(this.cards[index].formats, this.cards[index].id), 'duration': this.cards[index].duration, 'imgUrl': this.VideoImageUrl(this.cards[index].id), 'Title': this.cards[index].title }];

        temp.push(subCard);
      }
      this.video = temp;
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
  sourceUrl: any;
  openNav(url: any, videoId: any) {
    localStorage.setItem('videoId', videoId);
    this.videoService.startVideo(videoId).subscribe(data => {
    });
    this.sourceUrl = url;
    document.getElementById("myNav").style.display = "block";
    this.isPlaying = true;
  }
  closeNav() {
    let timeLeft = localStorage.getItem('timeleft').match(/\d+/g).map(Number);
    this.remainingTime = timeLeft[0] * 60 - this.api.currentTime;
    this.timeInMinut = Math.round(this.remainingTime / 60);
    localStorage.setItem('timeleft', this.timeInMinut + "" + "Minutes");
    let obj = new Object();
    obj['videoId'] = localStorage.getItem('videoId');
    obj['kidId'] = localStorage.getItem('kidId');
    obj['endedAtSeconds'] = this.remainingTime;
    this.videoService.EndVideo(obj).subscribe(data => {
    });
    document.getElementById("myNav").style.display = "none";
    this.api.pause();
    this.sourceUrl = "";
    this.api.getDefaultMedia().subscriptions.ended.subscribe();
    this.api.currentTime = 0;
  }

  addToFav(id: any) {
    let favourite = new AddFav();
    favourite.videoId = id;
    favourite.kidId = +localStorage.getItem('kidId');
    this.spinnerService.show();
    var index = this.video.findIndex(a => a[0].id == id);

    this.FavouritesArray.push(id);
    this.favService.addFavrouit(favourite).subscribe(data => {
      this.success = true;
      this.beforeFavCall = false;
      this.spinnerService.hide();
    },
      Error => {
        this.spinnerService.hide();
      });
  }
  unFavourite(id: any) {
    var index = this.FavouritesArray.findIndex(a => a == id);
    if (index > -1) {
      this.FavouritesArray.splice(index, 1);
    }
    let remove = new RemoveFav();
    remove.kidId = localStorage.getItem("kidId");
    remove.videoId = id;
    this.spinnerService.show();
    this.favService.RemoveFavorite(remove).subscribe(data => {

      this.spinnerService.hide();
    },
      Error => {

        this.spinnerService.hide();
      });
  }
  IsFavourite(id: any) {
    // let data = this.vid
    var index = this.FavouritesArray.findIndex(a => a == id);
    if (index > -1) {
      return true;

    }
    else {
      return false;
    }
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe();
    this.api.getDefaultMedia().subscriptions.ended.subscribe();
  }
  goToHome() {
    this.router.navigate(['./']);
  }
  goToSettingsPage() {
    this.router.navigate(['./settings']);
  }
}