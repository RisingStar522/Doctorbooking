import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        console.log("data = ", data);
        if(data.status != "failed"){
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data.data['email']);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.reloadPage();
        }else{
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

  reloadPage(): void {
    window.location.reload();
  }
}
