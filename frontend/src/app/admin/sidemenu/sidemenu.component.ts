import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';

import {CommonServiceService} from '../../common-service.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  page = 'Dashboard';
  showDropdown = true;
  userEmail;
  userinfo = [];
  errorMessage: String;
  imageSrc;

  public bellCollapsed = true;
  public userCollapsed = true;

  constructor(
    @Inject(DOCUMENT) private document,
    public router: Router,
    private commonService: CommonServiceService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.userEmail = this.tokenStorage.getUser();
      this.getAdminInfo();
    }
  }

  getAdminInfo() {
    this.commonService.getUserinfo(this.userEmail).subscribe(
      (data: any[]) => {
        this.userinfo = data[0];
        if (this.userinfo['avatar'] != null && this.userinfo['avatar'] != '') {
          this.imageSrc = this.userinfo['avatar'];
        } else {
          this.imageSrc = 'assets/img/doctors/doctor-thumb-01.jpg';
        }
      },
      (error) => (this.errorMessage = <any> error)
    );
  }

  ngAfterViewInit() {
    this.loadDynmicallyScript('assets/admin/js/script.js');
  }

  loadDynmicallyScript(js) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.head.appendChild(script);
    script.onload = () => this.doSomethingWhenScriptIsLoaded();
  }

  doSomethingWhenScriptIsLoaded() {
  }

  change(name) {
    this.page = name;
    this.commonService.nextmessage('admin');
  }

  main() {
    this.commonService.nextmessage('main');
  }

  clickLogout() {
    // window.location.href = '/admin/login-form';
    this.tokenStorage.signOut();
  }

  bell() {
    this.bellCollapsed = !this.bellCollapsed;
    if (!this.userCollapsed) {
      this.userCollapsed = true;
    }
  }

  user() {
    this.userCollapsed = !this.userCollapsed;
    if (!this.bellCollapsed) {
      this.bellCollapsed = true;
    }
  }
}
