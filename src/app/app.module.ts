import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyserviceComponent } from './myservice/myservice.component';
import { GetServiceComponent } from './get-service/get-service.component';
import { PostServiceComponent } from './post-service/post-service.component';
import { GetService } from './get.service';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { CustomImageComponent } from './custom-image/custom-image.component';




@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    MyserviceComponent,
    GetServiceComponent,
    PostServiceComponent,
    CustomFormComponent,
    CustomImageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
