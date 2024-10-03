import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Додаємо CommonModule
import { NavigationComponent } from '../navigation/navigation.component';
import { Question } from '../../models/quiz.model';
import { Router } from '@angular/router';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
  standalone: true,
  imports: [CommonModule, NavigationComponent, AnswerComponent], // Додаємо CommonModule до імпортів
})
export class AnswersComponent {
  private questions: Question[] = [];
  private userAnswers: string[] = [];
  public currentQuestion: string | undefined;
  public filteredAnswers: string[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.questions = navigation?.extras.state?.['quiz'].questions;
  }

  ngOnInit(): void {
    this.fillTheAnswers(0);
  }

  public fillTheAnswers(index: number): void {
    const question: Question = this.questions[index];
    this.currentQuestion = question.question;

    this.filteredAnswers = [];
    for (const key in question.answers) {
      const answer = question.answers[key as keyof typeof question.answers];
      if (answer !== null) {
        this.filteredAnswers.push(answer);
      }
    }
  }
}
