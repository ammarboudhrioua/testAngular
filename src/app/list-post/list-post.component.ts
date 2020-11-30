import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  publications: Array<any> = [];
  id;
  constructor(private blogService: BlogService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.publications=this.blogService.listPublications();
    this.id = this.route.snapshot.paramMap.get('index');
  }
  deleteBlog(i){
    this.blogService.deletePublication(this.publications,this.id)
    this.publications=this.blogService.listPublications();
    }

}
