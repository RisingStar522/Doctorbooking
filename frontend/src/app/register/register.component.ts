import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {CommonServiceService} from '../common-service.service';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name = '';
  mobile = '';
  password = '';
  isPatient: boolean = true;
  doctors: any = [];
  patients: any = [];
  reg_type = 'Patient Register';
  doc_patient = 'Are you a Doctor?';
  isRegister: boolean = false;
  isSignUpFailed: boolean = false;
  isSuccessful: boolean = false;

  constructor(
    private toastr: ToastrService,
    public commonService: CommonServiceService,
    public router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  changeRegType() {
    if (this.reg_type === 'Doctor Register') {
      this.reg_type = 'Patient Register';
      this.doc_patient = 'Are you a Doctor?';
      this.isPatient = true;
    } else {
      this.reg_type = 'Doctor Register';
      this.doc_patient = 'Not a Doctor?';
      this.isPatient = false;
    }
  }

  signup() {
    if (this.name === '' || this.mobile === '' || this.password === '') {
      this.toastr.error('', 'Please enter required fields!');
    } else {
      if (!this.isPatient) {
        this.authService.register_doctor(this.name, this.mobile, this.password).subscribe(
          data => {            
            if(data.status != "failed"){
              this.isSuccessful = true;
              this.isSignUpFailed = false;
              this.toastr.success('', 'Register successfully!');
              this.router.navigate(['/login-page']);
            }else{
              this.toastr.error('', data.msg);
            }
          },
          err => {
            this.toastr.error('', 'Register faid!');
            this.isSuccessful = false;
            this.isSignUpFailed = true;
          }
        );
      } else {
        this.authService.register_patient(this.name, this.mobile, this.password).subscribe(
          data => {
            if(data.status != "failed"){
              this.isSuccessful = true;
              this.isSignUpFailed = false;
              this.toastr.success('', 'Register successfully!');
              this.router.navigate(['/login-page']);
            }else{
              this.toastr.error('', data.msg);
            }
          },
          err => {
            this.toastr.error('', 'Register faid!');
            this.isSuccessful = false;
            this.isSignUpFailed = true;
          }
        );
      }
    }
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe((res) => {
      this.doctors = res;
    });
  }

  getpatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.patients = res;
    });
  }


}
