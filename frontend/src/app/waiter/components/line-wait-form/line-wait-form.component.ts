import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-line-wait-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './line-wait-form.component.html',
  styleUrl: './line-wait-form.component.scss',
})
export class LineWaitFormComponent {
  formWaiter = new FormGroup({
    name: new FormControl(''),
    countPersons: new FormControl(''),
});

onSubmit() {
    console.log({ name: this.formWaiter.controls.name.value });
    this.formWaiter.controls.name.reset();
}

}
