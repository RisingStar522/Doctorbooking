import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {CommonServiceService} from '../../common-service.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  password;
  confirmpass;
  userEmail;
  oldpassword;
  userinfo = [];
  errorMessage: string;
  isLoggedIn;
  roles;



  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private commonService: CommonServiceService,
    private toastr: ToastrService,
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

  updatePassword() {
    if (this.password != this.confirmpass) {
      this.toastr.error('', 'New password does not match !');
    } else {
      this.authService.updatePassword(this.userEmail, this.oldpassword, this.password).subscribe(
        data => {
          console.log('data = ', data);
          if (data.status != 'failed') {
            this.tokenStorage.saveToken(data.accessToken);
            this.toastr.success('', 'Successfully updated!');
            this.getPatient();
          } else {
            this.toastr.error('', data.msg);
          }
        },
        err => {
          this.toastr.error('', 'Password update failed!');
        }
      );
    }
  }

  getPatient() {

    this.commonService.getPatientinfo(this.userEmail).subscribe(
      (data: any[]) => {
       this.userinfo = data[0];
      },
    );
  }

}
