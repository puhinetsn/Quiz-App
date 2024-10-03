import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ResultsComponent {
  private router = inject(Router);

  public goToHomePage(): void {
    this.router.navigate(['/']);
  }

  public calcScore(correctAnswers: number, totalQuestions: number): number {
    return Math.round((correctAnswers / totalQuestions) * 100);
  }
}
