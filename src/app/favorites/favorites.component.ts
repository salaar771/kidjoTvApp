import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FavoriteService } from './../shared/services/favoritesService/index';
import { NgxCarousel } from 'ngx-carousel';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public carouselTile: NgxCarousel;
  uri: any[] = [];
  public carouselTileItems: Array<any>;
  time: any;
  manifestUri: any = "assets/tablet-l/read-2799818_1920.jpg";
  currentStream = "https://d23sw6prl9jc74.cloudfront.net/6/NavdQMkX7J.mp4";
  constructor(public favService: FavoriteService,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.getList();
  }

  ngOnInit() {
    this.time = localStorage.getItem('screenTimeLimit');
    this.carouselTile = {
      grid: { xs: 4, sm: 4, md: 5, lg: 5, all: 0 },
      slide: 2,
      speed: 400,
      loop: true,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
        .tile {
          position: relative;
      }
      .ngxcarousel-inner {
        height: 400px;
    }
      .ngxcarouselPoint {
        display: none;
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
  openNav() {
    console.log("test");
    document.getElementById("myNav").style.display = "block";
  }
  closeNav() {
    document.getElementById("myNav").style.display = "none";
  }
  getList() {
    var kidId = localStorage.getItem('kidId');
    this.spinnerService.show();
    this.favService.GetFavorite(kidId).subscribe(data => {
      this.spinnerService.hide();
      console.log(data);
    },
      Error => {
        this.spinnerService.hide();
      });
  }
  deleteFav(id: any) {
    this.spinnerService.show();
    this.favService.RemoveFavorite(id).subscribe(data => {
      this.spinnerService.hide();
    },
      Error => {
        this.spinnerService.hide();
      });

  }

}
