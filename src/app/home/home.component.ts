import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { SortComponent } from '../sort/sort.component';
import { PizzaBlockComponent } from '../pizza-block/pizza-block.component';
import { PaginationComponent } from '../pagination/pagination.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent, SortComponent, PizzaBlockComponent, PaginationComponent],
  template: `
  <div class="container">
      <div class="content__top">
        <app-categories></app-categories>
        <app-sort></app-sort>
      </div>
      <h2 class="content__title">Все пиццы</h2>
      
        <!-- <div class="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
        </div> -->
   
        <app-pizza-block></app-pizza-block>
     

        <app-pagination></app-pagination>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
