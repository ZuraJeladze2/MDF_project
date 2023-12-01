import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    { id: '0', name: 'Media literacy', description: 'Lorem ipsum...', image: '../../assets/course images/media literacy.jpg' },
    { id: '1', name: 'Front-end Web Development', description: 'Lorem ipsum...', image: '../../assets/course images/Frontend Web.jpg'},
  ];
}
