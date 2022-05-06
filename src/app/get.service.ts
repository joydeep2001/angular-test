import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  apiUrl: string;

  constructor(private httpClient:HttpClient) { 
    this.apiUrl = "https://reqres.in/api/users?page=2";

  }
  getUsers() {
    return this.httpClient.get(this.apiUrl);
  }
}
