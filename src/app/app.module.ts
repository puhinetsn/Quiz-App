import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ImLuckyComponent } from './components/im-lucky/im-lucky.component';
import { AnswersComponent } from './components/answers/answers.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlayComponent } from './components/play/play.component';
import { AnswerComponent } from './components/answer/answer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HeaderComponent,
    QuizComponent,
    ImLuckyComponent,
    AnswersComponent,
    MainComponent,
    NavigationComponent,
    PlayComponent,
    AnswerComponent,
    ResultsComponent,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
