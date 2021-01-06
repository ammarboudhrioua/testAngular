import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  baseUrl="/api";
  isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  constructor(private  httpClient: HttpClient) { }

login(data){
  return this.httpClient.post(this.baseUrl+'logins/getAuth',data);
}
register(data){
  this.httpClient.post<any>(this.baseUrl+'users/addUser',data).subscribe()
}
confirmlogin(exist){
  localStorage.setItem("userConnected",JSON.stringify(exist))
  this.isLoginSubject.next(true);
}
logout() {
  localStorage.removeItem('userConnected');
  this.isLoginSubject.next(false);
}
public isAuthenticated(): boolean {
  const token = localStorage.getItem('userConnected');
  if (token === null) {
    return false;
  }
  else {
   return true;
}
}
}