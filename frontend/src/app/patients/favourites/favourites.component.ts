import { Component, OnInit } from '@angular/core';

import { CommonServiceService } from './../../common-service.service'

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
	favourites:any = [];
  constructor(public commonService:CommonServiceService) { }

  ngOnInit(): void {
  	this.getFavourites();
  }

  getFavourites() {
  	this.commonService.getFav()
  		.subscribe(res=>{
        this.favourites = res;
  		})
  }

  unfav(fav) {
    this.commonService.deleteFav(fav.id)
      .subscribe(res=>{
          this.getFavourites();
      })
  }

}
