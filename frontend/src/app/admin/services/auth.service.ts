import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signin_admin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  updatePassword(username: string,oldpassword: string, newpassword: string): Observable<any> {
    return this.http.post(AUTH_API + 'user/changePwd', {
      username,
      oldpassword,
      newpassword
    }, httpOptions);
  }
}
