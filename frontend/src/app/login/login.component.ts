import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import {CommonServiceService} from '../common-service.service';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isPatient: boolean = false;
  doctors: any = [];
  patients: any = [];
  username = '';
  password = '';

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    public router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService
  ) {
    this.username = '';
    this.password = '';
    this.doctors = [];
    this.patients = [];
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  checkType(event) {
    this.isPatient = event.target.checked ? true : false;
  }

  login(name, password) {
    if (name === '' || password === '') {
      this.toastr.error('', 'Please enter required fields!');
    } else {
      if (!this.isPatient) {
        this.authService.login_doctor(name, password).subscribe(
          data => {
            console.log('data = ', data);
            if (data.status != 'failed') {
              this.tokenStorage.saveToken(data.accessToken);
              this.tokenStorage.saveUser(data.data['email']);
              this.tokenStorage.saveRole(this.isPatient);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.roles = this.tokenStorage.getUser().roles;
              this.toastr.success('', 'Welcome !');              
              this.router.navigate(['/doctor/dashboard']);
            } else {
              this.toastr.error('', data.msg);
              this.isLoginFailed = true;
            }
          },
          err => {
            this.toastr.error('', 'Login failed!');
            this.isLoginFailed = true;
          }
        );
      }else{
        this.authService.login_patient(name, password).subscribe(
          data => {
            console.log('data = ', data);
            if (data.status != 'failed') {
              this.tokenStorage.saveToken(data.accessToken);
              this.tokenStorage.saveUser(data.data['email']);
              this.tokenStorage.saveRole(this.isPatient);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.roles = this.tokenStorage.getUser().roles;
              this.toastr.success('', 'Welcome !');
              this.router.navigate(['/patients/dashboard']);
            } else {
              this.toastr.error('', data.msg);
              this.isLoginFailed = true;
            }
          },
          err => {
            this.toastr.error('', 'Login failed!');
            this.isLoginFailed = true;
          }
        );
      }
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
