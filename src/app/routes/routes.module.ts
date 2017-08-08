import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 

import { ErrorComponent } from '../error/error.component';
import { BlogComponent } from '../blog-list/blog/blog.component';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ResourcesComponent } from '../resources/resources.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';



const _routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
    _routes)
    // { enableTracing: true } // <-- debugging purposes only
  ],
  declarations: [],
  exports: [RouterModule]
})
export class P2DRoutingModule { }
