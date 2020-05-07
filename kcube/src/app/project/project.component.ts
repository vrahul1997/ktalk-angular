import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { project } from './project.model';
import { projectservice } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [projectservice]
})
export class ProjectComponent implements OnInit {
    
  
  

  constructor() {}

  ngOnInit() {

  
    }
    projectDetail(){
      console.log("vanakkam")
    }
  
    }
    
  

  


