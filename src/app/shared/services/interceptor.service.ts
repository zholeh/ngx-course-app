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
      // tslint:disable-next-line:max-line-length
      .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imlnb3IiLCJpYXQiOjE1NjQwNjY3MDN9.qffbo3vf28MzaKcRT6flxhP-uFMShK81xBQQJQKyJsM');
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
    return event instanceof HttpResponse;
  }
}
