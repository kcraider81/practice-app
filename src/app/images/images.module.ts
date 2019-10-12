import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { AlbumComponent } from './albums/album/album.component';


@NgModule({
  declarations: [AlbumsComponent, PhotosComponent, PhotoComponent, AlbumComponent],
  imports: [
    CommonModule,
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
