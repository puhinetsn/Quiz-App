import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '@components/navigation/navigation.component'; // використання аліасу для NavigationComponent
import { Question } from '@models/quiz.model'; // використання аліасу для Question
import { Router } from '@angular/router';
import { AnswerComponent } from '@components/answer/answer.component'; // використання аліасу для AnswerComponent
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
  standalone: true,
  imports: [CommonModule, NavigationComponent, AnswerComponent],
})
export class AnswersComponent {
  private questions: Question[] = [];
  public userAnswers: string[] = [];
  public currentQuestion: string | undefined;
  public filteredAnswers: string[] = [];
  private currentIndex: number = 0;
  private selectedAnswer: string | null = null;
  public _snackBar = inject(MatSnackBar);

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.questions = navigation?.extras.state?.['quiz'].questions;
  }

  ngOnInit(): void {
    this.fillTheAnswers(this.currentIndex);
  }

  public fillTheAnswers(index: number): void {
    if (this.questions && index >= 0 && index < this.questions.length) {
      const question: Question = this.questions[index];
      this.currentQuestion = question.question;

      this.filteredAnswers = [];
      for (const key in question.answers) {
        const answer = question.answers[key as keyof typeof question.answers];
        if (answer !== null) {
          this.filteredAnswers.push(answer);
        }
      }

      this.selectedAnswer = null;
    }
  }

  public selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
  }

  public nextQuestion(): void {
    if (this.selectedAnswer) {
      this.userAnswers.push(this.selectedAnswer);

      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.fillTheAnswers(this.currentIndex);
      } else {
        console.log('User Answers:', this.userAnswers);
        this.router.navigate(['/results'], {
          state: {
            quiz: {
              questions: this.questions,
              userAnswers: this.userAnswers,
            },
          },
        });
      }
    } else {
      this._snackBar.open('Please select an answer before proceeding', '', {
        duration: 1000,
      });
    }
  }
}
