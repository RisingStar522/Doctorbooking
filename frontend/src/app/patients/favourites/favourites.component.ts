import {Component, OnInit} from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import {CommonServiceService} from './../../common-service.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites: any = [];
  isLoggedIn;
  roles;
  userEmail;
  user_id;
  userData = [];

  constructor(
    public commonService: CommonServiceService,
    private tokenStorage: TokenStorageService,
    ) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getRole();
      this.userEmail = this.tokenStorage.getUser();   
      this.getPatient();
    }
  }

  getPatient() {
    this.commonService.getPatientinfo(this.userEmail).subscribe(
      (data: any[]) => {
        this.userData = data[0]
        this.user_id = data[0]._id;      
        this.getFavourites();
      },
    );
  }

  getFavourites() {
    this.commonService.getFav_byPatient(this.user_id)
      .subscribe(res => {
        this.favourites = res;
      });
  }

  unfav(fav) {
    this.commonService.deleteFav(fav.id)
      .subscribe(res => {
        this.getFavourites();
      });
  }

}
