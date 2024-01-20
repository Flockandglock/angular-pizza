import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPizzaComponent } from './full-pizza.component';

describe('FullPizzaComponent', () => {
  let component: FullPizzaComponent;
  let fixture: ComponentFixture<FullPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullPizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
