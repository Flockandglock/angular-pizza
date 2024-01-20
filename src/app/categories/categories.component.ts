import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  template: `
    <div class="categories">
      <ul>
       
          <li  class="value === i ? 'active' : ''">
            categoryName
          </li>
        
      </ul>
    </div>
  `,
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

}
