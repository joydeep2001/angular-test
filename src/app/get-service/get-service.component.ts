import { Component, OnInit } from '@angular/core';
import { GetService } from '../get.service'; 

@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.component.html',
  styleUrls: ['./get-service.component.css']
})
export class GetServiceComponent implements OnInit {

  constructor(private getService:GetService) { 
    
  }

  ngOnInit(): void {
    this.getService.getUsers().subscribe((userData:any) => {
      console.table(userData.data);
    });
    
  }

}
