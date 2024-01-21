import { Component } from '@angular/core';

@Component({
  selector: 'app-full-pizza',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <img src={pizza.imageUrl} />
      <h2>pizza.title</h2>
      <h4>pizza.price ₽</h4>
      <a to="/">
        <button class="button button--outline button--add">
          <span>Назад</span>
        </button>
      </a>
    </div>
  `,
  styleUrl: './full-pizza.component.scss'
})
export class FullPizzaComponent {

}
