import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {distinctUntilChanged, map, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from './constant.service';
import {CommonHttpService} from './common-http.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GlobalService extends CommonHttpService {
  // user Info
  private userInfoSource = new BehaviorSubject(null);
  public user$ = this.userInfoSource.asObservable();

  constructor(
    private http: HttpClient,
    public cs: ConstantService
  ) {
    super();
  }

  /** Method Name : setUserDetails()
   *   Purpose  : Set user selected folder name
   * Parameters : data
   */
  public setUserDetails(data) {
    if (data instanceof Object) {
      this.userInfoSource.next(data);
    } else {
      this.userInfoSource.next(null);
    }
  }

  public getUserInfo() {
    return this.http.get(this.cs.getApiUrl(this.cs.getUserInfo)).pipe(
      map((Response) => {
        return Response;
      }),
      catchError(this.handleError)
    );
  }

  public newPost(formData) {
    return this.http.post(this.cs.getApiUrl(this.cs.newPost), formData).pipe(
      map((Response) => {
        return Response;
      }),
      catchError(this.handleError)
    );
  }

  public newPostData(description, count) {
    return this.http.post(this.cs.getApiUrl(this.cs.newPostData), {description, count}).pipe(
      map((Response) => {
        return Response;
      }),
      catchError(this.handleError)
    );
  }

  public getPost() {
    return this.http.get(this.cs.getApiUrl(this.cs.getPost)).pipe(
      map((Response) => {
        return Response;
      }),
      catchError(this.handleError)
    );
  }

  public getPostDetail(_id) {
    return this.http.get(environment.baseUrl + 'post/get-post-detail/' + _id).pipe(
      map((Response) => {
        return Response;
      }),
      catchError(this.handleError)
    );
  }

  public addComment(postid, comment) {
    return this.http.post(this.cs.getApiUrl(this.cs.addComment), {postid, comment}).pipe(
      map((Response) => {
        return Response;
      }),
      catchError(this.handleError)
    );
  }
}
