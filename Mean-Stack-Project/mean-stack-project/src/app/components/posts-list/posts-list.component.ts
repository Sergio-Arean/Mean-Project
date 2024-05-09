import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit{
  posts:Post[] = [];
  private postsSub!:Subscription;
  constructor(private postService:PostService){}

  ngOnInit(){
    this.postService.getPosts();
    this.postsSub = this.postService.getUpdatedPosts().subscribe(res=>{
      this.posts = res;
      console.log(this.posts);
    });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
  
}
