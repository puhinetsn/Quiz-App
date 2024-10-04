import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Quiz } from '@models/quiz.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  @Input() quiz!: Quiz;
  private router = inject(Router);

  quizStart(): void {
    this.router.navigate(['start'], { state: { quiz: this.quiz } });
  }
}
