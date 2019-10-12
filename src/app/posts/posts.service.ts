import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

private _client: HttpClient;
  constructor(client: HttpClient) {
    this._client = client;
   }


   async getAllPosts() {
    return await this._client.get<any>('https://jsonplaceholder.typicode.com/posts').toPromise();
    
  }
  async getCommentsForPost(postId) {
    let x = await this._client.get<any>('https://jsonplaceholder.typicode.com/comments?postId=' + postId).toPromise();
    
    return x;
  }

}
