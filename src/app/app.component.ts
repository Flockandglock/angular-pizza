import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div className="wrapper">
      <!-- <Header /> -->
      <div className="content">
        <!-- <Outlet /> -->
      </div>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-pizza';
}
