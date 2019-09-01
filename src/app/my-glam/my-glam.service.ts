import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { MyGlamData } from './my-glam-data';
import { Observable } from 'rxjs';

const apiLink = "https://api.myglamapp.pl/api/categories?language=EN";

@Injectable({
  providedIn: 'root'
})
export class MyGlamService {
   
  constructor(private http: HttpClient) {}
  
  getData(): Observable<MyGlamData> {
     return this.http.get<MyGlamData>(apiLink);
  }

}
