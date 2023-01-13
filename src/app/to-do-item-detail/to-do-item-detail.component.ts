import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-to-do-item-detail',
  templateUrl: './to-do-item-detail.component.html',
  styleUrls: ['./to-do-item-detail.component.css']
})
export class ToDoItemDetailComponent {
  // @Input() item:any;
  @Input() description: any;
  @Input() id: any;
  @Input() itemId: any;
  @Input() status: any;
  @Input() indexItem: any;

}
