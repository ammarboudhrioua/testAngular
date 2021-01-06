import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService , private router : Router) { }
  loginForm;
  submitted:Boolean=false;
  results
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  // submitForm() {
  //   this.submitted=true;
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   else{
  //       this.authService.login(this.loginForm.value)
  //       .subscribe(response => {console.log(response),this.results=response})
  //   if(this.results){
  //     alert('invalide data')
  //   }
  //   else{
  //     console.log(this.results);
      
  //   }
  // }
  submitForm(){
    this.authService.login(this.loginForm.value).subscribe((rep:any) =>{
      if(rep.User ===null){
        alert("email incorect")
      }
      else{
        this.authService.confirmlogin(rep.User._id)
        this.router.navigate(['/blog']);
      }
    });
    }
  }

     
        // if(this.authService.login(this.loginForm.value)){

        //     }

