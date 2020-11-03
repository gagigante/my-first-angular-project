import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  blogName: string;

  courses: string[];

  constructor() {
    this.blogName = 'https://loiane.training';
    this.courses = ['JAVA', 'ANGULAR', 'NODE', 'REACT'];
  }

  ngOnInit(): void {
  }
}
