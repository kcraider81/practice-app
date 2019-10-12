import { Component, OnInit, Input } from '@angular/core';
import { ImagesService } from '../../images.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input() album: any;

  photoCount: number = 0;
  private _imageService: ImagesService;
  constructor(imageServie: ImagesService) { 
    this._imageService = imageServie;
  }

  async ngOnInit() {
    this.photoCount = await this._imageService.getPhotosForAlbum(this.album.id).then(data => {return data.length});

  }

}
