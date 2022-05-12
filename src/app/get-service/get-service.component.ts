import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { GetService } from '../get.service'; 

@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.component.html',
  styleUrls: ['./get-service.component.css']
})
export class GetServiceComponent implements OnInit {
  public userData:any;
  public loading:boolean
  subSink = new SubSink();
  constructor(private getService:GetService) { 
    this.userData = null;
    this.loading = false;
    
  }

  ngOnInit(): void {
    
  }
  getData() {
    this.loading = true;
    this.subSink.sink = this.getService.getUsers().subscribe((userData:any) => {
      this.userData = userData.data;
      console.log(userData);
      this.loading = false;
    });
  }
  ngOnDestroy() {
    this.subSink.unsubscribe();
  }
  showImageLoader() {
    console.log("loading...");
  }
}
