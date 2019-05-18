import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {ServicesComponent} from './pages/services/services.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {DevComponent} from './pages/dev/dev.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'dev', component: DevComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
