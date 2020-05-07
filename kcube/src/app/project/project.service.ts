import { Injectable } from '@angular/core';
import { project } from "./project.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class projectservice {
    selected_res=''
    constructor(private http: HttpClient) { }

    fetchproject(): Observable<project[]> {
        return this.http.get<project[]>("/assets/data/data.json")
    }

    fetch_selected_project(selected_project : string){
        // this.fetchproject().subscribe(responsedata =>{
        //     this.selected_res.push(responsedata.filter(a=> a.title == selected_project))
        //     console.log(this.selected_res)
        //    return this.selected_res
        //})
        this.selected_res = selected_project;
        console.log(this.selected_res)
    }
}