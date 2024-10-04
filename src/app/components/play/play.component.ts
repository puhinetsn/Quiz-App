import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '@models/quiz.model';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-play',
  standalone: true,
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class PlayComponent {
  quiz: Quiz;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.quiz = navigation?.extras.state?.['quiz'];
  }

  public startQuiz(): void {
    this.router.navigate(['start', 1], { state: { quiz: this.quiz } });
  }
}
