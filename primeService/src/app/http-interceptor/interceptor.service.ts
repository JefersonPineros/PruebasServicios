import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Mi interceptor');
    let respuesta = req;

    const headers = new HttpHeaders({
      'Accept': 'Application/json',
      'Content-type': 'Application/json'
    });
    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone);
  }
}
