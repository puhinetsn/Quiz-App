import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [MatCardModule, MatRadioModule, NavigationComponent],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss',
})
export class AnswersComponent {}
