import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },{
    path:'login',
    component: LoginComponent
  },{
    path:'register',
    component:RegisterComponent
  },{
    path:'blog',
    component: ListPostComponent
  },{
    path:'blog/new_blog',
    component: AddPostComponent
  },
  {
    path:'blog/update_blog/:index',
    component: UpdatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
