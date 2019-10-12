import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private _client: HttpClient;
  constructor(client: HttpClient) {
    this._client = client;
   }


   async getAllAlbums() {
    return await this._client.get<any>('https://jsonplaceholder.typicode.com/albums').toPromise();
    
  }
  async getPhotosForAlbum(albumId) {
    return await this._client.get<any>('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId).toPromise();
  }
}
