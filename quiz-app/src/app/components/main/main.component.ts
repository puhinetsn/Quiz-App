import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuizesService } from '../../services/quizes.service';
import { ImLuckyComponent } from '../im-lucky/im-lucky.component';
import { HeaderComponent } from '../header/header.component';
import { QuizComponent } from '../quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
  imports: [HeaderComponent, QuizComponent, ImLuckyComponent, HttpClientModule],
})
export class MainComponent {
  private router = inject(Router);
  public quizService = inject(QuizesService);
  ngOnInit(): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }

    this.loadQuiz();
  }

  loadQuiz(): void {
    this.quizService.getRandomQuiz().subscribe((res) => {
      console.log(res);
    });
  }
}
