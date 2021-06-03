import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:3000/api/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login_member(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signin_admin', {
      username,
      password
    }, httpOptions);
  }

  updatePassword_member(username: string, oldpassword: string, newpassword: string): Observable<any> {
    return this.http.post(AUTH_API + 'user/changePwd', {
      username,
      oldpassword,
      newpassword
    }, httpOptions);
  }

  login_doctor(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signin', {
      username,
      password
    }, httpOptions);
  }

  login_patient(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signin_patient', {
      username,
      password
    }, httpOptions);
  }

  register_doctor(email: string, phone: string, password: string): Observable<any> {
    let isPatient;
    isPatient = false;
    return this.http.post(AUTH_API + 'auth/signup', {
      email,
      phone, 
      password,
      isPatient
    }, httpOptions);
  }

  register_patient(email: string, phone: string, password: string): Observable<any> {
    let isPatient;
    isPatient = true;
    return this.http.post(AUTH_API + 'auth/signup', {
      email,
      phone, 
      password,
      isPatient
    }, httpOptions);
  }  

  updatePassword(username: string, oldpassword: string, newpassword: string): Observable<any> {
    return this.http.post(AUTH_API + 'user/changePwd_patient', {
      username,
      oldpassword,
      newpassword
    }, httpOptions);
  }
}
