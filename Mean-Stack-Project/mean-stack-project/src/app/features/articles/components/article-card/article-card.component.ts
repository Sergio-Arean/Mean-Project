import { Component, Input } from '@angular/core';
import { Post } from '../../../../core/model/post.model';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
@Input({
  required: true
}) post!:Post;
}
