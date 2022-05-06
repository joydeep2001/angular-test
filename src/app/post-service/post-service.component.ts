import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css']
})
export class PostServiceComponent implements OnInit {

  contactForm:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private postService:PostService) { 
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required]
    })
  }
  onSubmit(): void {
    this.postService.createUser(this.contactForm.value).subscribe((res:any) => {
      console.table(res);
    });

    
  }
  ngOnInit(): void {

  }

}
