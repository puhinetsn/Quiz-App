import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@components/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: 'start',
    loadComponent: () =>
      import('@components/play/play.component').then((c) => c.PlayComponent),
  },
  {
    path: 'start/:id',
    loadComponent: () =>
      import('@components/answers/answers.component').then(
        (c) => c.AnswersComponent
      ),
  },
  {
    path: 'results',
    loadComponent: () =>
      import('@components/results/results.component').then(
        (c) => c.ResultsComponent
      ),
  },
];
