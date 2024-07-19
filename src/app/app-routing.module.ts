import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { TagsComponent } from './pages/tags/tags.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'tag/:id', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
