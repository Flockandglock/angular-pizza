import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-empty',
  standalone: true,
  imports: [],
  template: `
    <div class="cart cart--empty">
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <a to="/" class="button button--black">
        <span>Вернуться назад</span>
      </a>
    </div>
  `,
  styleUrl: './cart-empty.component.scss'
})
export class CartEmptyComponent {

}
