import { Component } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss'
})
export class NewPostComponent {
  constructor(private postService:PostService){}
  title:string='';
  content:string='';
  
  addPost(){
  let validForNow:boolean = true;
  
  if(!validForNow) return;
  
  let newPost:Post = {
    id: 'an id',
    title: this.title,
    content : this.content
  }
  
    this.postService.addPost(newPost);
  }
}
