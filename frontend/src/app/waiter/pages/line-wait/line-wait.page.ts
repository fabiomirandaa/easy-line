import { WaitLineService } from './../../services/wait-line.service';
import { Component, inject } from '@angular/core';

import { LineWaitFormComponent } from "../../components/line-wait-form/line-wait-form.component";
import { LineWaitListComponent } from "../../components/line-wait-list/line-wait-list.component";
import { Waiter } from '@easy-line-app/shared';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-line-wait',
  standalone: true,
  imports: [LineWaitFormComponent, LineWaitListComponent],
  templateUrl: './line-wait.page.html',
  styleUrl: './line-wait.page.scss',
})
export class LineWaitPage {
  private WaitLineService = inject(WaitLineService);

  waiters: Waiter[] = [];

  createteWaiter(waiter: Waiter) {
    this.WaitLineService.addItem(waiter)
    .pipe(switchMap(_ => {
      return this.WaitLineService.getLine();
    }))
    .subscribe(item => {
      this.waiters = item;
    });
  }
  deleteWaiter(id: string) {
    this.WaitLineService.removeItem(id);
  }
}
