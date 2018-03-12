import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FavoriteService } from './../shared/services/favoritesService/index';
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
  isPlaying: any;
  api: VgAPI;
  innerheigth: any;
  bucketName: any;
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
  currentStream = "https://d23sw6prl9jc74.cloudfront.net/6/NavdQMkX7J.mp4";
  waterpx: any = "100";
  waterPxCountdown: any = "100px";
  initialTime = localStorage.getItem('screenTimeLimit').match(/\d+/g).map(Number);
  UnitOfTIme = 100 / this.initialTime[0];
  timeInSeconds: any;
  
  constructor(public favService: FavoriteService,
    public router: Router,
    public timerService: TimerService,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.getList();
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

      var video = this.FavVideo[this.arrayIndex];
      if (video) {
        this.openNav();
      }
    }
    if (event.keyCode === KEY_CODE.escape_key) {
      this.close.nativeElement.focus();
      this.closeNav();
    }

  }

  GoDown() {
    if (this.downCount < 2) {
      this.downCount++;
    }
    if (this.downCount == 1) {
      this.myHomeBtn.nativeElement.focus();
      this.color = 1;
      this.arrayIndex = 76764532734;
      // this.downCount = 0;
    }
    if (this.downCount == 2) {
      this.goToHome();
      this.downCount = 0;
    }
  }
  GoUp() {
    if (this.upCount < 1) {
      this.upCount++;
    }
    if (this.upCount == 1) {
      this.myRight.nativeElement.focus();
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
      }
      .ngxcarousel-inner {
        height: 500px;
    }
      .ngxcarouselPoint {
        display: none;
    }
    .ngxcarousel-items {
      top: 20%;
      left: 10%;
  }
    `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }
  openNav() {
    document.getElementById("myNav").style.display = "block";
    this.isPlaying = true;
    this.api.play();
  }
  closeNav() {
    document.getElementById("myNav").style.display = "none";
    this.api.pause();
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
        subCard = [{ 'id': this.Favorites[index].id, 'duration': this.Favorites[index].duration, 'imgUrl': this.VideoImageUrl(this.Favorites[index].id), 'Title': this.Favorites[index].title }];
        temp.push(subCard);
      }
      this.FavVideo = temp;
      console.log(this.FavVideo);
    },
      Error => {
        this.spinnerService.hide();
      });
  }
  videoURL(FormateId: any[], id: any) {
    var url = localStorage.getItem('videoUrl');
    this.innerheigth = window.innerHeight;
    if (this.innerheigth >= 720) {
      var formateArray: any[] = FormateId.filter(x => x.id == 3);
      var ID = formateArray[0].id;
      this.bucketName = '.mp4';
      var VideoUrl = url + ID + '/' + id + this.bucketName;
      return VideoUrl;
    } else if (this.innerheigth >= 480) {
      var formateArray: any[] = FormateId.filter(x => x.id == 6);
      var ID = formateArray[0].id;
      this.bucketName = '.mp4';
      var VideoUrl = url + ID + '/' + id + this.bucketName;
      return VideoUrl;
    } else if (this.innerheigth <= 360) {
      var formateArray: any[] = FormateId.filter(x => x.id == 7);
      var ID = formateArray[0].id;
      this.bucketName = '.mp4';
      var VideoUrl = url + ID + '/' + id + this.bucketName;
      return VideoUrl;
    } else if (this.innerheigth <= 240) {
      var formateArray: any[] = FormateId.filter(x => x.id == 8);
      var ID = formateArray[0].id;
      this.bucketName = '.mp4';
      var VideoUrl = url + ID + '/' + id + this.bucketName;
      return VideoUrl;
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
    var x = 1;
    this.api = api;

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
        x++;
        if (x > 2) {
          this.onPlayerReady(this.api);
          setTimeout(function () {
            $("#myButton").trigger("click");
          }, 1000);
          x = 0;
        }
        else {
          this.api.play();
        }
      }
    );
  }
  deleteFav(id: any) {
    let remove = new RemoveFav();
    remove.kidId = localStorage.getItem("kidId");
    remove.videoId = id;
    // var kidId = localStorage.getItem("kidId");
    this.spinnerService.show();
    this.favService.RemoveFavorite(remove).subscribe(data => {
      console.log("test");
      this.FavVideo[0].pop(id);
      this.spinnerService.hide();
    },
      Error => {
        this.spinnerService.hide();
      });

  }
  goToHome() {
    this.router.navigate(['./']);
  }

}
