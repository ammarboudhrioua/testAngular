import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  addBlog(publication) {
    const publications = JSON.parse(localStorage.getItem("publications")) || [];
    publications.push(publication)
    localStorage.setItem("publications", JSON.stringify(publications))
  }
  listPublications() {
    const publications = JSON.parse(localStorage.getItem("publications")) || [];
    return publications;
  }
  getPublication(i) {
    const publications= JSON.parse(localStorage.getItem("publications")) || [];
    return publications[i]
  }
  updatePublication(publication, i) {
    const publications = JSON.parse(localStorage.getItem("publications")) || [];
    publications.splice(i, 1, publication)
    localStorage.setItem("publications", JSON.stringify(publications))
  }
  deletePublication(publication, i) {
    const publications = JSON.parse(localStorage.getItem("publications")) || [];
    publications.splice(i, 1);
    localStorage.setItem("publications", JSON.stringify(publications))
  }
 
}
