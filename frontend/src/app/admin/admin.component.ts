import {
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  AfterViewInit,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
  Params,
} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { CommonServiceService } from '../common-service.service';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  adminShow: boolean = true;
  isLoggedIn: boolean = false;
  roles: string[] = [];
  constructor(
    @Inject(DOCUMENT) private document,
    public commonService: CommonServiceService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    public Router: Router
  ) {
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url === '/admin/forgot-pass' ||
          event.url === '/admin/lock-screen' ||
          event.url === '/admin/login-form' ||
          event.url === '/admin/register' ||
          event.url === '/admin/error-first' ||
          event.url === '/admin/error-second'
        ) {
          this.adminShow = false;
        } else {
          this.adminShow = true;
        }
      }
    });
  }
  ngOnInit(): void {
    this.commonService.nextmessage('admin');
    let scope = this;
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      setTimeout(() => {
        scope.Router.navigateByUrl('/admin/dashboard');
      }, 100);
    }else{
      setTimeout(() => {
        scope.Router.navigateByUrl('/admin/login-form');
      }, 100);
    }
  }
}
