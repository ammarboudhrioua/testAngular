import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  publicationForm;
  submitted: Boolean = false;
  publications: Array<any> = [];
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.publicationForm = new FormGroup({
      categorie: new FormControl('',Validators.required),
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl(Date.now())
    })
  }
  submitForm() {
    if (this.publicationForm.invalid) {
      return;
    }
    this.blogService.addBlog(this.publicationForm.value);
    this.router.navigateByUrl('/blog');

  }
}
