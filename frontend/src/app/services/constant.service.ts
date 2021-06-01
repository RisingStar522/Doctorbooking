import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  public getaccesstoken = 'user/login';
  public socialLogin = 'user/social-login';
  public createUser = 'user/register';
  public resetPasswordLink = 'user/send-reset-password-link';
  public verifyPasswordLink = 'user/verif-token';
  public resetNewPassword = 'user/new-password';
  public verifEmail = 'user/verif-email';
  public getUserInfo = 'user/getUserInfo';
  public newPost = 'post/new-post';
  public newPostData = 'post/new-post-data';
  public getPost = 'post/get-post';
  public addComment = 'post/add-comment';

  constructor() {
  }

  /**
   * @description get api endpoint from base url
   * @param path
   */
  public getApiUrl(path: string) {
    return environment.baseUrl + path;
  }
}
