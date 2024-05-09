import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsList:Post[] = [];
  private postsSubject = new Subject<Post[]>();

  constructor(private http:HttpClient) { }

  //GET
  getPosts(){
    // this.http.get<{message:string, posts: any}>('http://localhost:3000/api/posts')
    // .pipe(map((postData)=>{
    //   return postData.posts.map(post=>{
    //     return {
    //       title: post.title,
    //       content: post.content,
    //       id: post._id
    //     }
    //   })
    // }))
    // .subscribe(transformedPosts=>{
    //   this.postsList = transformedPosts;
    //   this.postsSubject.next([...this.postsList]);
    // });
    this.http.get<{message:string, posts:Post[]}>('http://localhost:3000/api/posts').subscribe(postData=>{
      this.postsList = postData.posts;
      this.postsSubject.next([...this.postsList]);
    });
  }

  getUpdatedPosts(){
    return this.postsSubject.asObservable();
  }

  //POST
  addPost(newPost:Post){
    this.http.post<{message:string}>('http://localhost:3000/api/posts',newPost).subscribe(res=>{
      console.log(res.message);
      this.postsList.push(newPost);
      this.postsSubject.next([...this.postsList]);
    })
  }
}
