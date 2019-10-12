import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  data: any;
  constructor() { }

  setPostData(post) {
    this.data = post;

  }
  setAlbumData(album) {
    this.data = album;

  }

  setPhotoData(photo: any) {
    this.data = photo;
  }

}
