import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetServiceComponent } from './get-service/get-service.component';
import { PostServiceComponent } from './post-service/post-service.component';
import { MyformComponent } from './myform/myform.component';
import { GetService } from './get.service';

const routes: Routes = [
  {
    path: 'myform', component: MyformComponent
  },
  {
    path: 'getservice', component: GetServiceComponent
  },
  {
    path: 'postservice', component: PostServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
