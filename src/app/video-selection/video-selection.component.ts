import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { VideoService } from './../shared/services/videoService/index';
import { FavoriteService } from './../shared/services/favoritesService/index';
import { AddFav } from './../shared/entities/index';
import { NgxCarousel } from 'ngx-carousel';
import { Observable } from 'rxjs/Rx';
import * as $ from 'jquery';


@Component({
  selector: 'app-video-selection',
  templateUrl: './video-selection.component.html',
  styleUrls: ['./video-selection.component.css'],
})
export class VideoSelectionComponent implements OnInit {
  kidID: string;
  idss: any;
  video: any[] = [];
  cards: any[] = [];
  bucketName: any;
  innerheigth: any;
  formate: any[] = [];
  imgUrl: any;
  color: any;
  public carouselTile: NgxCarousel;
  uri: any[] = [];
  time: any;
  AddToFav: boolean;
  elem: HTMLElement;
  vgFor: string;
  target: any;
  public carouselTileItems: Array<any>;
  manifestUri: any = "https://d23sw6prl9jc74.cloudfront.net/8/NavdQMkX7J.mp4";
  currentStream = "https://d23sw6prl9jc74.cloudfront.net/6/NavdQMkX7J.mp4";

  constructor(private route: ActivatedRoute,
    public ref: ElementRef,
    private videoService: VideoService,
    public favService: FavoriteService,
    private spinnerService: Ng4LoadingSpinnerService) {
    var Url = this.route.snapshot.params['url'];
    this.imgUrl = Url;
    var Color = this.route.snapshot.params['color'];
    this.color = Color;
    this.elem = this.ref.nativeElement;
    // var Url = this.route.params.subscribe(params => {
    //   this.imgUrl = +params['url'];
    //   console.log(this.imgUrl);
    // });
    var ids = this.route.params.subscribe(params => {
      this.idss = +params['id'];
      console.log(this.idss);
    });
    this.getSubCard();
    this.uri.push([this.manifestUri]);
    this.uri.push([this.manifestUri]);
    this.uri.push([this.manifestUri]);
    this.uri.push([this.manifestUri]);
    this.uri.push([this.manifestUri]);

  }

  
  ngOnInit() {
    this.time = localStorage.getItem('screenTimeLimit');
    // let timer = Observable.timer();
    // timer.subscribe(t => t);
    this.carouselTile = {
      grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
      slide: 2,
      speed: 400,
      loop: true,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
        .tile {
          position: relative;
          max-width:80%;
      }
      .ngxcarousel-inner {
        height: 450px;
    }
      .ngxcarouselPoint {
        display: none;
    }
    @media (max-width: 767px)
    .ngxcarouselQfNTUq > .ngxcarousel > .ngxcarousel-inner > .ngxcarousel-items > .item {
        width: 23.333333%;
    }

        `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
    this.uri.push(this.manifestUri);
    this.uri.push(this.manifestUri);
    this.uri.push(this.manifestUri);
    this.uri.push(this.manifestUri);
    this.uri.push(this.manifestUri);
    this.uri.push(this.manifestUri);
    this.uri.push(this.manifestUri);
    this.uri.push(this.manifestUri);
    this.uri.push(this.manifestUri);
  }
  getSubCard() {
    this.spinnerService.show();
    this.videoService.GetSubCard(this.idss).subscribe(data => {
      this.spinnerService.hide();
      console.log(data);
      this.cards = data.subcards;
      var subCard = [];
      var temp = [];
      var url = "assets/tablet-l/read-2799818_1920.jpg";
      for (var index = 0; index < this.cards.length; index++) {
        subCard = [{ 'id': this.cards[index].id, 'imgUrl': url, 'videourl': this.videoURL(this.cards[index].formats, this.cards[index].id), 'Title': this.cards[index].title }];

        temp.push(subCard);
      }
      this.video = temp;
      console.log(this.video);
    },
      Error => {
        this.spinnerService.hide();
      });
  }
  videoURL(FormateId: any[], id: any) {
    var url = localStorage.getItem('videoUrl');
    // console.log(FormateId, id);
    // this.size = this.formate[index].id;
    var formate = [1, 2, 3, 4, 5, 6, 7, 8];
    this.innerheigth = window.innerHeight;
    if (this.innerheigth <= 720 && this.innerheigth >= 480) {
      if (FormateId[0].id == formate || FormateId[0].id == formate || FormateId[0].id == formate) {
        var ID = FormateId[0].id;
        console.log(ID);
      }
      this.bucketName = '.mp4';
      return url + '/' + ID + '/' + id + '/' + id + this.bucketName;
    } else if (this.innerheigth <= 480 && this.innerheigth >= 360) {
      if (FormateId[0].id == 4 || FormateId[0].id == 5 || FormateId[0].id == 6) {
        var ID = FormateId[0].id;
      }
      this.bucketName = '.mp4';
      return url + '/' + ID + '/' + id + '/' + id + this.bucketName;
    } else if (this.innerheigth <= 360 && this.innerheigth >= 240) {
      if (FormateId[0].id == 7) {
        var ID = FormateId[0].id;
      }
      this.bucketName = '.mp4';
      return url + '/' + ID + '/' + id + '/' + id + this.bucketName;
    } else if (this.innerheigth <= 240 && this.innerheigth >= 0) {
      if (FormateId[0].id == 8) {
        var ID = FormateId[0].id;
      }
      this.bucketName = '.mp4';
      return url + '/' + ID + '/' + id + '/' + id + this.bucketName;
    }
  }
  openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  closeNav() {
    document.getElementById("myNav").style.display = "none";
  }
  addToFav(id: any) {
    let favourite = new AddFav();
    favourite.videoId = id;
    favourite.kidId = localStorage.getItem('kidId');
    this.spinnerService.show();
    this.favService.addFavrouit(favourite).subscribe(data => {
      console.log(data);
      this.AddToFav = true;
      this.spinnerService.hide();
    },
      Error => {
        this.spinnerService.hide();
      });
  }
}
