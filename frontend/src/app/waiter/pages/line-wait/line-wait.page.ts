import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineWaitFormComponent } from "../../components/line-wait-form/line-wait-form.component";

@Component({
  selector: 'app-line-wait',
  standalone: true,
  imports: [CommonModule, LineWaitFormComponent],
  templateUrl: './line-wait.page.html',
  styleUrl: './line-wait.page.scss',
})
export class LineWaitPage {}
