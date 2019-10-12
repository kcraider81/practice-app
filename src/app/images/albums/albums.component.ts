import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { StateService } from 'src/app/shared/state.service';
import { stat } from 'fs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any[];
  private _imageService: ImagesService;
  private _stateService: StateService;
  private _router: Router;
  constructor(imageService: ImagesService, stateService: StateService, router: Router) {
    this._imageService = imageService;
    this._stateService = stateService;
    this._router = router;
   }

  async ngOnInit() {
    this.albums = await this._imageService.getAllAlbums();
  }

  onAlbumSelcted(album){
    this._stateService.setAlbumData(album);
    this._router.navigate(['/images/photos'])

  }
}
