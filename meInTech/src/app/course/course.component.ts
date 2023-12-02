import { Component } from '@angular/core';
import { CourseListService } from '../services/course-list.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  constructor(private service: CourseListService){}
  lessons = this.service.lessonList;
}
