import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../models/message';


@Injectable({
  providedIn: 'root'
})
export class HelloWordService {

  constructor(private http: HttpClient) { }

  helloWorldService() {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('javaguides' + ':' + 'password') });
    return this.http.get<Message>('http://localhost:8090/snbs/api/v1/greeting');
  }
}
