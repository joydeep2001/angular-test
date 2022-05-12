import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-image',
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.css']
})
export class CustomImageComponent {

  @Input() loader:string='tenor.gif';
  @Input() height:number=128;
  @Input() width:number=128;
  @Input() image:string = "";

  isLoading:boolean;
  
  constructor() { 
    this.isLoading=true;
  }

  hideLoader(){
    this.isLoading=false;
  }

}
