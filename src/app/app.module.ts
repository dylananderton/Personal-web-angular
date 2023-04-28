import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './Components/hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WeatherFinderComponent } from './Components/projects/projects-list/weather-finder/weather-finder/weather-finder.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CertificateComponent } from './Components/certificate/certificate.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CryptoAppComponent } from './Components/projects/projects-list/crypto-app/crypto-app.component';
import { HangmanComponent } from './Components/projects/projects-list/hangman/hangman.component';
import { NotesComponent } from './Components/projects/projects-list/notes/notes.component';
import { PasswordGenComponent } from './Components/projects/projects-list/password-gen/password-gen.component';
import { HomepageComponent } from './Components/homepage/homepage.component'
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    WeatherFinderComponent,
    CertificateComponent,
    CryptoAppComponent,
    HangmanComponent,
    NotesComponent,
    PasswordGenComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
