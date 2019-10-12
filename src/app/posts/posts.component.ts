import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { UsersService } from '../shared/users.service';
import { StateService } from '../shared/state.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  users: any[];
  postsWithUsers: any[];
  
  private _postService: PostsService;
  private _userService: UsersService;
  private _stateService: StateService;
  private _router: Router;
  
  constructor(postsService: PostsService, usersService: UsersService, stateService: StateService, router: Router) {
    this._postService = postsService;
    this._userService = usersService;
    this._stateService = stateService;
    this._router = router;
   }

  async ngOnInit() {
    this.postsWithUsers = [];
    this.posts = await this._postService.getAllPosts();
    this.users = await this._userService.getAllUsers();
        if(this.posts && this.posts.length > 0 ) {
        this.posts.forEach(post => {
          let user = this.users.filter(user=> user.id == post.userId)[0];
          let postWithUser = {
            post: post,
            user: user
          };
          this.postsWithUsers.push(postWithUser);
        });
      }
  }

  onClick(post){
    
    this._stateService.setPostData(post);
    this._router.navigate(['/postDetail'])
  }


}
