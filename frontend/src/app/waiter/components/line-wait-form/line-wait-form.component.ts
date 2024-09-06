import { Component, output } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Waiter } from '@easy-line-app/shared';

@Component({
  selector: 'app-line-wait-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './line-wait-form.component.html',
  styleUrl: './line-wait-form.component.scss',
})
export class LineWaitFormComponent {
  waiterChange = output<Waiter>();

  formWaiter = new FormGroup({
    name: new FormControl(''),
    countPersons: new FormControl(''),
  });

  onSubmit() {
    this.waiterChange.emit({ name: this.formWaiter.controls.name.value || '', countPersons: this.formWaiter.controls.countPersons.value || '0' })
    this.formWaiter.reset();
  }

}
