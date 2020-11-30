import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  publicationForm;
  id;
  submitted: Boolean = false;
  publications: Array<any> = [];
  constructor(private blogService: BlogService,  private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.publicationForm = new FormGroup({
      categorie: new FormControl('',Validators.required),
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl('')
    })
  this.id = this.route.snapshot.paramMap.get('index');
    const publication=this.blogService.getPublication(this.id);
    this.publicationForm.patchValue(publication);
  }
  submitForm() {
    if (this.publicationForm.invalid) {
      return;
    }
    this.blogService.updatePublication(this.publicationForm.value,this.id);
    this.router.navigateByUrl('/blog');
  
  }

}
