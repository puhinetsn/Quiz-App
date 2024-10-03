import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-im-lucky',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './im-lucky.component.html',
  styleUrl: './im-lucky.component.scss',
})
export class ImLuckyComponent {
  private router = inject(Router);
  public randomQuiz(): void {
    this.router.navigate(['start']);
  }
}
