import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Subject} from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ROLE = 'auth-role';

const TOKEN_KEY_MEMBER = 'auth-token-member';
const USER_KEY_MEMBER = 'auth-user-member';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  isLoggedIn: string = 'false';

  userInfo: any;

  LoggedInChange: Subject<string> = new Subject<string>();

  UserInfoChange: Subject<any> = new Subject<any>();

  isLoggedIn_member: string = 'false';

  userInfo_member: any;

  LoggedInChange_member: Subject<string> = new Subject<string>();

  UserInfoChange_member: Subject<any> = new Subject<any>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (this.getToken() == null) {
      this.isLoggedIn = 'false';
    } else {
      this.isLoggedIn = 'true';
    }

    this.userInfo = this.getUser();

    if (this.getToken_member() == null) {
      this.isLoggedIn_member = 'false';
    } else {
      this.isLoggedIn_member = 'true';
    }

    this.userInfo_member = this.getUser_member();
  }

  signOut(): void {
    if (isPlatformBrowser(this.platformId)) {
      // window.sessionStorage.clear();
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.removeItem(USER_KEY);

      this.LoggedInChange.next('false');
      this.UserInfoChange.next(this.getUser());
    }
  }

  signOut_user(): void {
    if (isPlatformBrowser(this.platformId)) {
      // window.sessionStorage.clear();
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.removeItem(USER_ROLE);

      this.LoggedInChange.next('false');
      this.UserInfoChange.next(this.getUser());
    }
  }
  public saveToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);

      this.LoggedInChange.next('true');
      this.UserInfoChange.next(this.getUser());
    }
  }

  public getToken(): string {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem(TOKEN_KEY);
    }
  }

  public saveUser(user): void {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

      this.UserInfoChange.next(this.getUser());
    }
  }

  public saveRole(isPatient): void{
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(USER_ROLE);
      window.sessionStorage.setItem(USER_ROLE, isPatient);

      this.UserInfoChange.next(this.getRole());
    }
  }

  public getRole(): any {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(sessionStorage.getItem(USER_ROLE));
    }
  }

  public getUser(): any {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
  }

  signOut_member(): void {
    if (isPlatformBrowser(this.platformId)) {
      // window.sessionStorage.clear();
      window.sessionStorage.removeItem(TOKEN_KEY_MEMBER);
      window.sessionStorage.removeItem(USER_KEY_MEMBER);

      this.LoggedInChange_member.next('false');
      this.UserInfoChange_member.next(this.getUser_member());
    }
  }

  public saveToken_member(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(TOKEN_KEY_MEMBER);
      window.sessionStorage.setItem(TOKEN_KEY_MEMBER, token);

      this.LoggedInChange_member.next('true');
      this.UserInfoChange_member.next(this.getUser_member());
    }
  }

  public getToken_member(): string {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem(TOKEN_KEY_MEMBER);
    }
  }

  public saveUser_member(user): void {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(USER_KEY_MEMBER);
      window.sessionStorage.setItem(USER_KEY_MEMBER, JSON.stringify(user));

      this.UserInfoChange_member.next(this.getUser_member());
    }
  }

  public getUser_member(): any {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(sessionStorage.getItem(USER_KEY_MEMBER));
    }
  }

}
