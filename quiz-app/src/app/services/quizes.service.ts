import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Question } from '../models/quiz.model';
import { Observable } from 'rxjs';
import { ranDiff } from '../models/difficulty.enum';
import { ranCat } from '../models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class QuizesService {
  private http = inject(HttpClient);
  private envUrl = 'https://opentdb.com/api.php?';
  private questionMax: number = 5;
  private questionMin: number = 10;

  public randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getRandomQuiz(): Observable<Question[]> {
    const questionCount = this.randomInt(this.questionMin, this.questionMax);
    const category = ranCat();
    const difficulty = ranDiff();

    return this.http.get<Question[]>(
      `https://quizapi.io/api/v1/questions?apiKey=lFMXk5Ve8Cn9S6y4WQ0LeZ8dv6wW6BRH3BlgVzib&limit=${questionCount}&category=${category}&difficulty=${difficulty}`
    );
  }
}
