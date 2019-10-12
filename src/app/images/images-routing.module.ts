import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
  { path: '' , component: PhotosComponent},
  { path: 'albums' , component: AlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
