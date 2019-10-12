import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/shared/state.service';
import { ImagesService } from '../images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  album: any;
  photos: any[];

  private _stateService: StateService;
  private _imageService: ImagesService;
  private _router: Router;
  constructor(stateService: StateService, imageService: ImagesService, router: Router) { 
    this._stateService = stateService;
    this._imageService = imageService;
    this._router = router;
  }

  async ngOnInit() {
    this.album = this._stateService.data;
    
    this.photos = await this._imageService.getPhotosForAlbum(this.album.id);
    

  }

  onPhotoSelected(photo){
    
    this._stateService.setPhotoData(photo);
    this._router.navigate(['images/photo'])
  }

}
