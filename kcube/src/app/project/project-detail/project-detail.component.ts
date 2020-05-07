import { Component, OnInit, Input } from '@angular/core';
import { project } from '../project.model';
import { ActivatedRoute, Params } from '@angular/router';
import { projectservice } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  

  constructor(private projectservice: projectservice) { }
  project;
  project_detail$;
  
  ngOnInit() {
    this.fetch_selected_project()
  }
  
  fetch_selected_project(){
    this.project = this.projectservice.selected_res
    this.projectservice.fetchproject().subscribe(responseData=>{
      this.project_detail$ = responseData.filter(a=> a.title == this.project)
      console.log(this.project_detail$)
    })
  }

  
}
