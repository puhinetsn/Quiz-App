import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PlayComponent } from './components/play/play.component';
import { AnswersComponent } from './components/answers/answers.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'start', component: PlayComponent },
  { path: 'start/:id', component: AnswersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
