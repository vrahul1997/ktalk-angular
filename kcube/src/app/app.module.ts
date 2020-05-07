import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './base/base.component';
import { ProjectComponent } from './project/project.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { projectservice } from './project/project.service';
import { approutingmodule } from './app-routing.module';
import { blogsservice } from './blogs/blogs.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseComponent,
    ProjectComponent,
    BlogsComponent,
    ProjectDetailComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, approutingmodule
  ],
  providers: [projectservice, blogsservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
