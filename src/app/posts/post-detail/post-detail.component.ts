import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '../../shared/state.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: any;
  comments: any[];
  private _postService: PostsService;
  constructor(private stateService: StateService, postService: PostsService) { 
    this._postService = postService;
  }

  async ngOnInit() {
    this.post = this.stateService.data;
    let x = this.post;
    
    this.comments = await this._postService.getCommentsForPost(this.post.post.id);
    
  }

}
