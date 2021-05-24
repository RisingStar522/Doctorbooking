import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { CommonServiceService } from '../../../../common-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAdmin = true;
  admin: any =[];
  loginForm: FormGroup;
  username = '';
  password = '';
  constructor(
    public router: Router,
    private _formBuilder: FormBuilder,
    public commonService: CommonServiceService,
    private toastr: ToastrService
    ) {
      this.username = '';
      this.password = '';
      this.admin = [];
  }

  ngOnInit(): void {
    this.getAdmin();
  }


  checkType(event) {
    this.isAdmin = event.target.checked ? true : false;
  }

  login(name, password) {
    localStorage.setItem('auth', 'true');
    localStorage.setItem('patient', this.isAdmin.toString());
    if (this.isAdmin) {
      let filter = this.admin.filter(
        (a) => a.name == this.username && a.password === this.password
      );
      if (filter.length != 0) {
        localStorage.setItem('id', filter[0]['id']);
        this.toastr.success('', 'Login success!');
        this.commonService.nextmessage('patientLogin');
        this.router.navigate(['/patients/dashboard']);
      } else {
        this.toastr.error('', 'Login failed!');
      }
    }
  }

  getAdmin() {
    this.commonService.getDoctors().subscribe((res) => {
      this.admin = res;
    });
  }

}
