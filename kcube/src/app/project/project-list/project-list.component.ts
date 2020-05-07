import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { projectservice } from '../project.service';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { project } from '../project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  project$;
  project_title: string

  constructor(private projectservice: projectservice, private router: Router) {}

  ngOnInit() {
    this.fetchprojects();
  } 

  fetchprojects(){
    this.project$ = this.projectservice.fetchproject()
    // this.projectservice.fetchproject().subscribe(responsedata => {
    // let res =  responsedata.filter(a=> a.title == 'project1')
    // console.log(res)
    //})
}

  selectedproject(id: number, title: string) : void{
    this.router.navigateByUrl("/projects/" + id)
    this.projectservice.fetch_selected_project(title)
  }

}
