import { DatePublishingComponent } from './scheduling/date-publishing/date-publishing.component';
import { SocialMediasComponent } from './scheduling/social-medias/social-medias.component';
import { ScheduleComponent } from './scheduling/schedule.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostTextComponent } from './scheduling/post-text/post-text.component';
import { ImgUploaderComponent } from './scheduling/img-uploader/img-uploader.component';
import { PostViewComponent } from './scheduling/post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ScheduleComponent,
    SocialMediasComponent,
    DatePublishingComponent,
    PostTextComponent,
    ImgUploaderComponent,
    PostViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
