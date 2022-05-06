import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { SubSink } from 'subsink';
import { PostService } from '../post.service';
import { RxStorage } from 'rxjs-storage';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css']
})
export class PostServiceComponent implements OnInit {
  private subSink = new SubSink();
  contactForm:FormGroup;
  rxjs:RxStorage;

  
  constructor(private formBuilder: FormBuilder, private postService:PostService, private localStorage:LocalStorage) { 
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required]
    });
    this.rxjs = new RxStorage();
    
  }
  onSubmit(): void {
    this.subSink.sink = this.postService.createUser(this.contactForm.value).subscribe((res:any) => {
      this.rxjs.setItem(localStorage, "key", "val");
    });
    
  }
  ngOnInit(): void {

  }
  ngOnDestroy(){
    console.log("unsubscribed");
    this.subSink.unsubscribe();
  }

}
