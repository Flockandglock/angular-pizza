import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../app/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <div class="wrapper">
      <app-header></app-header>
      <div class="content">
        <app-home></app-home>
      </div>
    </div>
  `,
  styleUrl: './app.component.scss', 
})
export class AppComponent {
  title = 'angular-pizza';
}
