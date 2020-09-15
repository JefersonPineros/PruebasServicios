import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from '../Models/item'
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ItemService {
  public header: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) {
  }
  getItems(): Observable<Items[]> {
    return this.http.get<any>('/apidata/catalog/distribution')
      .pipe(
        map(resp => resp.result.items),
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Ha ocurrido un error:', error.error.message);
    } else {
      console.error(
        `Se a presentado un error en el proveedor: ${error.status}, ` +
        `Mensaje de respues: ${error.error}`);
    }

    return throwError(
      'Por favor intente nuevamente mas tarde.');
  }
}
