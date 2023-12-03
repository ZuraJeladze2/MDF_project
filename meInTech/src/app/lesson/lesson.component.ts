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
  lessonName: string = '';
  course_id:string | undefined;
  lesson_id:string | any;
  lesson_number: number | undefined;

  first: boolean = true;;
  second: boolean = false;
  third: boolean = false;
  fourth: boolean = false;
  fifth: boolean = false;
  finish: boolean = false;  


  rashuashiaBtn = true;

  // list items
  listItems = [
    { heading: 'List item heading 1', content: 'არასანდო საიტებზე ინფორმაციის მოძიებაში', smallPrint: 'And some small print.' },
    { heading: 'List item heading 2', content: 'უზარმაზარ ინფორმაციაში ნავიგაციასა და ყალბი სიახლეების აღმოჩენაში', smallPrint: 'And some muted small print.' },
    { heading: 'List item heading 3', content: 'ფრედის გაწვრთნაში', smallPrint: 'And some muted small print.' }
  ];

  selectedItemIndex: number | null = null;

  selectItem(index: number): void {
    this.selectedItemIndex = index;
  }


  
  ngOnInit(){
    this.course_id = this.route.snapshot.params['id']
    this.lesson_id = this.route.snapshot.params['lesson_id']
    this.lesson_number = parseInt(this.lesson_id) + 1
    this.lessonName = this.data[this.lesson_id].name;
    console.log(this.lessonName);
    
  }


  btnClick(){
    if (this.first) {
      this.first = false
      this.second = true
    } else if (this.second) {
      this.second = false
      this.third = true
    
    } else if (this.third) {
      this.third = false
      this.finish = true
    
    } else if (this.fourth) {
      this.fourth = false
      this.fifth = true
    
    } else if (this.fifth) {
      this.fifth = false
      this.finish = true
    }
  }

  freddyJumpIn(btn: Event){
    console.log(this);
    this.rashuashiaBtn = false
    
  }
}
