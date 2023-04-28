import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoAppComponent } from './Components/projects/projects-list/crypto-app/crypto-app.component';
import { WeatherFinderComponent } from './Components/projects/projects-list/weather-finder/weather-finder/weather-finder.component';
import { HangmanComponent } from './Components/projects/projects-list/hangman/hangman.component';
import { NotesComponent } from './Components/projects/projects-list/notes/notes.component';
import { PasswordGenComponent } from './Components/projects/projects-list/password-gen/password-gen.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent , pathMatch: 'full'},
  { path: 'hangman', component: HangmanComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'crypto-app', component: CryptoAppComponent },
  { path: 'password-gen', component: PasswordGenComponent },
  { path: 'weather-finder', component: WeatherFinderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
