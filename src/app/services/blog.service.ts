import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl="/api";
  constructor(private  httpClient: HttpClient) { }

  addBlog(publication) {  
      this.httpClient.post<any>(this.baseUrl+'sujets/addSujet',publication).subscribe();
  }
  listPublications() {
    const sujets= this.httpClient.get(this.baseUrl+'sujets/allSujets');
    return sujets;
  }
  getPublication(i) {
    const publications= JSON.parse(localStorage.getItem("publications")) || [];
    return publications[i]
  }
 
  addvote(publication, id) {
    
    return  this.httpClient.post<any>(this.baseUrl+'sujets/addVote/'+id,publication)
    
   
  }
 
}
