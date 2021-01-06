import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  publications: Array<any> = [];
  id;
  vote;
  userId;
  constructor(private blogService: BlogService, private authService: AuthService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId=JSON.parse(localStorage.getItem('userConnected'))
    this.vote= new FormGroup({
      idvoter: new FormControl(),
      choice: new FormControl()

    })
    this.blogService.listPublications().subscribe((response:any) => {
      this.publications=response.Sujet
      this.publications.forEach(element => {
      this.calcu(element)
        })
      })
  }
  affvote(listvotes){
    let a=true
  if(listvotes.votes&&this.userId){
    listvotes.votes.forEach(e=>{
      if(e.idvoter===this.userId){
        a=false
      }
    })
  }
    return a
  }
 yesBlog(id){ 
  this.vote.setValue({choice:true,idvoter:this.userId})   
  this.blogService.addvote(this.vote.value,id).subscribe(res=>{},
    ()=>{
      this.ngOnInit()
    })
  // window.location.reload();

  
 }
 noBlog(id){
  this.vote.setValue({choice:false,idvoter:this.userId})
  this.blogService.addvote(this.vote.value,id).subscribe(res=>{},
    ()=>{
      this.ngOnInit()
    })
 }
  calcu(a){
    let b:any=0
    let c:any=0
    if(a.votes){
        a.votes.forEach(e => {
          if(e.choice===true){
            b++;
          }
        }); 
      c=100*b/(a.votes.length)
  return c
}
  else{
    c=0
  return c
}
  }
  auth(){
    return this.authService.isAuthenticated()
  }
}
