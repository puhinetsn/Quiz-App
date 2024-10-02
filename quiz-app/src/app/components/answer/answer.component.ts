import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-answer',
  standalone: true,
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
  imports: [MatCardModule, MatRadioModule, NavigationComponent],
})
export class AnswerComponent {}
