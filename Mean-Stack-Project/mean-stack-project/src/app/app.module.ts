import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './features/home/components/new-post/new-post.component';
import { PostsListComponent } from './features/home/components/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LandingPresentationComponent } from './features/home/components/landing-presentation/landing-presentation.component';
import { ArticleCardComponent } from './features/articles/components/article-card/article-card.component';
import { ArticlesPageComponent } from './features/articles/pages/articles-page/articles-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SocialMediaLinksComponent } from './shared/components/social-media-links/social-media-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostsListComponent,
    HomePageComponent,
    HeaderComponent,
    NavbarComponent,
    LandingPresentationComponent,
    ArticleCardComponent,
    ArticlesPageComponent,
    FooterComponent,
    SocialMediaLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
