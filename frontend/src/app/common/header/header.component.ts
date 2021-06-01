import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  Inject,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {TokenStorageService} from '../../services/token-storage.service';
import {CommonServiceService} from './../../common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  auth: boolean = false;
  isPatient: boolean = false;
  page;
  splitVal;
  headerTop: boolean = false;
  userData =[];
  base;
  url1;
  roles;
  userEmail;
  userRules;
  imageSrc;

  constructor(
    @Inject(DOCUMENT) private document,
    private cdr: ChangeDetectorRef,
    public router: Router,
    private activeRoute: ActivatedRoute,
    public commonService: CommonServiceService,
    private tokenStorageService: TokenStorageService, 
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        var res = event.url.split('/');
        this.base = res[1];
        this.page = res[2];
        if (event.url == '/home-slider-one') {
          this.headerTop = true;
        } else {
          this.headerTop = false;
        }
      }
    });
    this.url1 = this.router.url;
    if(this.tokenStorageService.getToken()){
      this.auth = true;
    }else{
      this.auth = false;
      this.isPatient = false;
    }
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.auth = true;
      this.isPatient = this.tokenStorageService.getRole();
      this.userEmail = this.tokenStorageService.getUser();
      if(this.isPatient){
        this.getPatient();
      }else{
        this.getDoctor()
      }
    } 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        $('html').removeClass('menu-opened');
        $('.sidebar-overlay').removeClass('opened');
        $('.main-wrapper').removeClass('slide-nav');
      }
    });

  }

  ngAfterViewInit() {
    this.cdr.detectChanges();

    this.loadDynmicallyScript('assets/js/script.js');

  }

  getDoctor(){
    this.commonService.getDoctorinfo(this.userEmail).subscribe(
      (data: any[]) => {
        console.log(data[0])
        this.userData = data[0];
        if (this.userData['profile'] != null && this.userData['profile'] != '') {
          this.imageSrc = this.userData['profile'];
        } else {
          this.imageSrc = 'assets/img/doctors/doctor-thumb-01.jpg';
        }
      },
    );
  }

  getPatient(){
    this.commonService.getPatientinfo(this.userEmail).subscribe(
      (data: any[]) => {
        this.userData = data[0];
        if (this.userData['img'] != null && this.userData['img'] != '') {
          this.imageSrc = this.userData['img'];
        } else {
          this.imageSrc = 'assets/img/doctors/doctor-thumb-01.jpg';
        }
      },
    );
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
    this.commonService.nextmessage('main');
  }

  mapGrid() {
    this.router.navigate(['/map-grid']);
  }

  mapList() {
    this.router.navigate(['/map-list']);
  }

  addStyle(val) {
    if (val === 'home') {
      if (document.getElementById('home').style.display == 'block') {
        document.getElementById('home').style.display = 'none';
      } else {
        document.getElementById('home').style.display = 'block';
      }
    }
    if (val === 'doctor') {
      if (document.getElementById('doctor').style.display == 'block') {
        document.getElementById('doctor').style.display = 'none';
      } else {
        document.getElementById('doctor').style.display = 'block';
      }
    }
    if (val === 'patient') {
      if (document.getElementById('patient').style.display == 'block') {
        document.getElementById('patient').style.display = 'none';
      } else {
        document.getElementById('patient').style.display = 'block';
      }
    }
    if (val === 'blog') {
      if (document.getElementById('blog').style.display == 'block') {
        document.getElementById('blog').style.display = 'none';
      } else {
        document.getElementById('blog').style.display = 'block';
      }
    }
    if (val === 'admin') {
      if (document.getElementById('admin').style.display == 'block') {
        document.getElementById('admin').style.display = 'none';
      } else {
        document.getElementById('admin').style.display = 'block';
      }
    }
  }

  doctor(name) {
    this.page = name;
    this.router.navigate(['/doctor/dashboard']);
  }

  logout() {
    
    this.tokenStorageService.signOut_user();
    this.router.navigate(['/login-page']);

    
  }

  home() {
    this.commonService.nextmessage('main');
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/']);
    });
  }

  navigate(name) {
    this.page = name;
    if (name === 'Admin') {
      this.router.navigate(['/admin']);
      this.commonService.nextmessage('admin');
    } else if (name === 'Pharmacy Admin') {
      this.router.navigate(['/pharmacy-admin']);
      this.commonService.nextmessage('pharmacy-admin');
    }
  }
}
