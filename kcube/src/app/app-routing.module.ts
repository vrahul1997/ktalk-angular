import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { BlogsComponent } from './blogs/blogs.component';

const approutes: Routes=[
    {path: '',component: HomeComponent, pathMatch:'full'},
    {path: 'project', component: ProjectListComponent},
    {path: 'projects/:id', component: ProjectDetailComponent},
    {path: 'blogs', component: BlogsComponent}
    
]

@NgModule({
    imports:[RouterModule.forRoot(approutes)],
    exports:[RouterModule]
})

export class approutingmodule{

}