import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  API: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  reqGET(url:string){
    return this.http.get<any>(this.API + url)
    .pipe(map(data => {
      return data;
    }, err => {
      return err;
    }));
  }

  reqDELETE(url:string){
    return this.http.delete<any>(this.API + url)
    .pipe(map(data => {
      return data;
    }, err => {
      return err;
    }));
  }

  reqPOST(url:string, data:any){
    return this.http.post<any>(this.API + url, data)
    .pipe(map(data => {
      return data;
    }, err => {
      return err;
    }));
  }
}
