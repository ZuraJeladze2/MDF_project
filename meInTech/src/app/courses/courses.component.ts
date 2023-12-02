import { Component } from '@angular/core';
import { CourseListService } from '../services/course-list.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  constructor(private service: CourseListService){}
  courses = this.service.courseList;
}
