import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { PhotoComponent } from './photos/photo/photo.component';


const routes: Routes = [
  { path: 'photos' , component: PhotosComponent},
  { path: 'photo' , component: PhotoComponent},
  { path: 'album' , component: AlbumComponent},
  { path: '' , component: AlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
