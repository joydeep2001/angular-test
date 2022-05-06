import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService{

  apiUrl = "https://reqres.in/api/users?page=2";
  constructor(private httpClient: HttpClient) {
    
   }
  

  sendGetRequest() {
    console.log(" ========== > ");
    
    // console.log(this.httpClient.get(this.apiUrl));
    return this.httpClient.get(this.apiUrl);
  }
  
}
