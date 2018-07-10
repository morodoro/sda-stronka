import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { PortfolioViewComponent } from './views/portfolio-view/portfolio-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { GalleryViewComponent } from './views/gallery-view/gallery-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ContactViewComponent,
    PortfolioViewComponent,
    FooterComponent,
    NavbarComponent,
    LoginViewComponent,
    GalleryViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
