import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
  <div class="root">
    <h1>
      <span>😕</span>
      <br />
      Ничего не найдено
    </h1>
    <p class="description">
      К сожалени данная страница отсутствует в нашем интернет-магазине
    </p>
  </div>
  `,
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
