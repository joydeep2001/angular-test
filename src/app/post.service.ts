import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl: string;
  constructor(private httpClient:HttpClient) {
    this.apiUrl = "https://reqres.in/api/users";
   }
   createUser(payload:any) {
    return this.httpClient.post(this.apiUrl, payload);
   }
}
