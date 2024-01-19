import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div className="container">
      <div className="content__top">
        <!-- <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} /> -->
      </div>
      <h2 className="content__title">Все пиццы</h2>
      
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
   
        <!-- <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div> -->
     

      <!-- <Pagination currentPage={currentPage} onChangePage={onChangePage} /> -->
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
