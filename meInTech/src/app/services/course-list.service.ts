import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor() { }
  courseList = [
    { id: '0', name: 'Media literacy', description: 'Lorem ipsum...', image: '../../assets/course images/media literacy.jpg' },
    { id: '1', name: 'Front-end Web Development', description: 'Lorem ipsum...', image: '../../assets/course images/Frontend Web.jpg'},
  ];
  
  lessonList = [
    { id: '0', lesson_id: '0', name: 'Introduction', image:'../../assets/lesson images/lesson.jpg'},
    { id: '0', lesson_id: '1', name: 'Importance of media literacy', image:'../../assets/lesson images/lesson.jpg'},
    { id: '0', lesson_id: '2', name: 'Key concepts and definitions', image:'../../assets/lesson images/lesson.jpg'},
    { id: '0', lesson_id: '3', name: 'Historical evolution of media', image:'../../assets/lesson images/lesson.jpg'},
    { id: '0', lesson_id: '4', name: 'Media influence of perception and behavior', image:'../../assets/lesson images/lesson.jpg'},
    { id: '0', lesson_id: '5', name: 'Media influence of perception and behavior', image:'../../assets/lesson images/lesson.jpg'},
    { id: '0', lesson_id: '6', name: 'Analysis of media messages', image:'../../assets/lesson images/lesson.jpg'},
    { id: '0', lesson_id: '7', name: 'Media and cultural impact', image:'../../assets/lesson images/lesson.jpg'},
  ];  
}
