import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemComponent {
  @Input() items: any;
  @Input() isCourse: boolean | undefined;
  @Input() isLesson: boolean | undefined;

  getRouterLink(item: any): any {
    console.log('ih');
    
    console.log(item);
    
    if (this.isCourse) {
      return ['/courses', item.id];
    } else if (this.isLesson) {
      return ['/courses', item.id, 'lesson', item.lesson_id];
    }
    console.log(this.isCourse);
  }
}
