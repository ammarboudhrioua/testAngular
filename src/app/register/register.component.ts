import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  submitted;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      nom:new FormControl(),
      prenom:new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }
  submitForm() {
    this.submitted=true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(this.registerForm.value);
    this.router.navigateByUrl('/login')
}
}