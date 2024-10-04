import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { NavigationComponent } from '@components/navigation/navigation.component';

@Component({
  selector: 'app-answer',
  standalone: true,
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
  imports: [MatCardModule, MatRadioModule, NavigationComponent],
})
export class AnswerComponent {
  @Input() title: string | undefined;
  @Input() value: string | undefined;
}
