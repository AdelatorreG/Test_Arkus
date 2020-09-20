import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  API: string = "https://api.rushstarwireless.com/web_api_crm"; 
  // API: string = "http://rodolforodrdcf6:43565";
  constructor(private http: HttpClient) { }

  reqGET(url:string){
    return this.http.get<any>(this.API + url)
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
