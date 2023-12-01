import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemComponent {
  @Input() items: any[] = [];
  @Input() parentRoute: string = '/courses'
}
