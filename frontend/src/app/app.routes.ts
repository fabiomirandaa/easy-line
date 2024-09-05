import { Route } from '@angular/router';
import { LineWaitPage } from './pages/line-wait/line-wait.page';

export const appRoutes: Route[] = [
  { path: '', component: LineWaitPage },
  {
    path: 'add', loadComponent: () => import('./pages/line-wait-form/line-wait-form.page')
      .then(component => component.LineWaitFormPage)
  }
];
