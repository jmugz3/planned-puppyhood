import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { P2DRoutingModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog-list/blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    BlogListComponent,
    AboutComponent,
    ContactComponent,
    ResourcesComponent,
    PageNotFoundComponent,
    BlogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    P2DRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
