import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss',
  standalone: true,
  imports: [NavigationComponent],
})
export class AnswersComponent {}
