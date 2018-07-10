import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { PortfolioViewComponent } from './views/portfolio-view/portfolio-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { GalleryViewComponent } from './views/gallery-view/gallery-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeViewComponent},
  {path: 'contact', component: ContactViewComponent},
  {path: 'portfolio', component: PortfolioViewComponent},
  {path: 'login', component: LoginViewComponent},
  {path: 'gallery', component: GalleryViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
