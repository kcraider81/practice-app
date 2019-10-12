import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
  {path: 'images', loadChildren: () => import('./images/images.module').then(m => m.ImagesModule)},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
