import { Component, signal } from '@angular/core';

import { LineWaitFormComponent } from "../../components/line-wait-form/line-wait-form.component";
import { LineWaitListComponent } from "../../components/line-wait-list/line-wait-list.component";
import { Waiter } from '@easy-line-app/shared';

@Component({
  selector: 'app-line-wait',
  standalone: true,
  imports: [LineWaitFormComponent, LineWaitListComponent],
  templateUrl: './line-wait.page.html',
  styleUrl: './line-wait.page.scss',
})
export class LineWaitPage {
  waiters: Waiter[] = [{
    id: 1,
    name: "Fábio",
    countPersons: 3,
    creationDate: new Date()
  }];

}
