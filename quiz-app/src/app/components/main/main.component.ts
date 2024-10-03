import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuizesService } from '../../services/quizes.service';
import { ImLuckyComponent } from '../im-lucky/im-lucky.component';
import { HeaderComponent } from '../header/header.component';
import { QuizComponent } from '../quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { Question, Quiz } from '../../models/quiz.model';
import { CommonModule } from '@angular/common';
import { PlayComponent } from '../play/play.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    QuizComponent,
    ImLuckyComponent,
    HttpClientModule,
    PlayComponent,
  ],
})
export class MainComponent {
  private router = inject(Router);
  public quizService = inject(QuizesService);
  public quizes: Quiz[] = [];

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes(): void {
    for (let i = 0; i < 10; i++) {
      this.quizService.getRandomQuiz().subscribe((res: Question[]) => {
        const quiz: Quiz = {
          name: `Test your ${res[0].category} knowledge!`,
          difficulty: res[0].difficulty,
          category: res[0].category,
          length: res.length,
          questions: res,
        };
        this.quizes.push(quiz);
      });
    }
  }
}
