import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
this.auth()
 
  
  }
 
  logout(){
    this.authService.logout();
    window.location.reload();
  }
  auth(){
    return this.authService.isAuthenticated()
  }
}