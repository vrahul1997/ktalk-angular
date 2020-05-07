import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class blogsservice {
  httpOptions = {
    headers: new HttpHeaders ({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private http: HttpClient) { }

  fetchblog(): Observable<[]> {
    return this.http.post<[]>("http://127.0.0.1:9899/post", this.httpOptions,{})
  }

}