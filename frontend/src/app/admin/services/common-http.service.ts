import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { filter, map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";


function getFirstValue(obj) {
  if (typeof obj === "string") {
    return obj;
  } else {
    const key = Object.keys(obj)[0];
    return getFirstValue(obj[key]);
  }
}
export class CommonHttpService {
  constructor() { }
  public handleError(err: Response | any) {
    let errMsg: string;
    if (err.error) {
      if (err.error.errors) {
        errMsg = getFirstValue(err.error.errors);
      } else {
        errMsg = getFirstValue(err.error);
      }
    } else if (err.message) {
      errMsg = getFirstValue(err.message);
    } else {
      errMsg = getFirstValue(err);
    }
    return throwError(errMsg);
  }

}
