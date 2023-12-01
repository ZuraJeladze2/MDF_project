import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  lessons = [
    { id: '0', name: 'Introduction', image:'../../assets/lesson images/lesson.jpg'},
    { id: '1', name: 'Importance of media literacy', image:'../../assets/lesson images/lesson.jpg'},
    { id: '2', name: 'Key concepts and definitions', image:'../../assets/lesson images/lesson.jpg'},
    { id: '3', name: 'Historical evolution of media', image:'../../assets/lesson images/lesson.jpg'},
    { id: '4', name: 'Media influence of perception and behavior', image:'../../assets/lesson images/lesson.jpg'},
    { id: '5', name: 'Media influence of perception and behavior', image:'../../assets/lesson images/lesson.jpg'},
    { id: '6', name: 'Analysis of media messages', image:'../../assets/lesson images/lesson.jpg'},
    { id: '7', name: 'Media and cultural impact', image:'../../assets/lesson images/lesson.jpg'},
  ];  
}
