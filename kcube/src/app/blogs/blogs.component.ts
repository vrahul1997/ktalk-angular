import { Component, OnInit } from '@angular/core';
import { blogsservice } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private blogsservice: blogsservice) { }
  blogs$;
  ngOnInit() {
    this.fetchblogs()
  }

  fetchblogs(){
    this.blogsservice.fetchblog().subscribe(response=>{
      this.blogs$ = response
      console.log(this.blogs$)
    })
  }

}
