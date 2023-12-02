import { Component } from '@angular/core';
import { CourseListService } from '../services/course-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
  constructor(private src: CourseListService, private route: ActivatedRoute){}
  data = this.src.lessonList;
  course_id:string | undefined;
  lesson_id:string | any;
  lesson_number: number | undefined;
  
  
  ngOnInit(){
    this.course_id = this.route.snapshot.params['id']
    this.lesson_id = this.route.snapshot.params['lesson_id']
    this.lesson_number = parseInt(this.lesson_id) + 1
    console.log('hi '+this.course_id, this.lesson_id);
    
  }
}
