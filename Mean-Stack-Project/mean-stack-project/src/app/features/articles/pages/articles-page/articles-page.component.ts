import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/model/post.model';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrl: './articles-page.component.scss'
})
export class ArticlesPageComponent implements OnInit{
  posts:Post[] = [];
  loading: boolean = true;

  constructor(private postService:PostService){}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts();
    this.postService.getUpdatedPosts().subscribe(updatedPosts=> {
      this.posts = updatedPosts;
      console.log('Posts!', this.posts);
      this.loading = false;
    });
  }
   
}
