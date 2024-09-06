import { Component, input, output } from '@angular/core';
import { Waiter } from '@easy-line-app/shared';

@Component({
  selector: 'app-line-wait-list',
  standalone: true,
  imports: [],
  templateUrl: './line-wait-list.component.html',
  styleUrl: './line-wait-list.component.scss',
})
export class LineWaitListComponent {
  waiters = input.required<Waiter[]>();
  waiterDelete = output<number>();

  deleteWaiter(id: number) {
    this.waiterDelete.emit(id);
  }
}
