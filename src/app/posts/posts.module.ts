import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [CommentsComponent, PostsComponent, PostComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
