import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { BASE_URL_TOKEN } from '../../config';
import { filter, map } from "rxjs/operators";

export interface IRes {
  data: any;
  error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {
  public constructor(@Inject(BASE_URL_TOKEN) private _baseUrl: string) {
  }

  public intercept<T extends IRes>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    const headers: HttpHeaders = req.headers
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imlnb3IiLCJpYXQiOjE1NjM0NTYyODl9.hxDtApKLT4gZIQCldGAbVCrk0YgVudADE4HQAxZd7v4');
    const jsonReq: HttpRequest<T> = req.clone({
      headers,
      url: `${this._baseUrl}${req.url}`,
    });
    return next.handle(jsonReq)
      .pipe(
        filter(this._isHttpResponse),
        map((res: HttpResponse<IRes>) => {
          return res.clone({body: res.body && res.body.data});
        })
      );
  }

  private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<IRes> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}
