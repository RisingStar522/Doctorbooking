import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';
import {CommonServiceService} from './../../common-service.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  name;
  isLoggedIn;
  roles;
  userEmail;
  userData = [];
  imageSrc;
  user_id;

  constructor(
    private router: Router,
    public commonService: CommonServiceService,
    private tokenStorage: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getRole();
      this.userEmail = this.tokenStorage.getUser();
    }
    this.getPatient();
  }

  logout() {
    this.tokenStorage.signOut_user();
    this.router.navigate(['/login-page']);
  }

  getPatient(){
    this.commonService.getPatientinfo(this.userEmail).subscribe(
      (data: any[]) => {
        this.userData = data[0];
        this.user_id = data[0]._id;
        if (this.userData['img'] != null && this.userData['img'] != '') {
          this.imageSrc = this.userData['img'];
        } else {
          this.imageSrc = 'assets/img/doctors/doctor-thumb-01.jpg';
        }
      },
    );
  }

  navigate(name) {
    this.name = name;
    this.commonService.nextmessage(name);
  }
}
