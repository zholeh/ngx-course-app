import { ProductComponent } from './product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ICartProduct } from '@store/reducers/cart.reducer';
import { DebugElement } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

const testProduct: ICartProduct = {
  _id: '1',
  title: 'Test Product',
  author: 'Puma',
  price: 1234,
  img: 'img.png',
  count: 1,
  isFavorite: true
};

describe('Product component', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductComponent
      ],
      imports: [MatIconModule]
    });

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = testProduct;

    spyOn(component, 'decrementProduct')
      .and
      .callThrough();
    spyOn(component, 'incrementProduct')
      .and
      .callThrough();
    spyOn(component, 'removeProduct')
      .and
      .callThrough();
    spyOn(component.remove, 'emit')
      .and
      .callThrough();
    spyOn(component.decrement, 'emit')
      .and
      .callThrough();
    fixture.detectChanges();
  });

  xit('should increment', () => {
    const incrementProduct: DebugElement = fixture.debugElement.query(By.css('.increment'));
    incrementProduct.triggerEventHandler('click', component.product);
    fixture.detectChanges();
    expect(component.incrementProduct)
      .toHaveBeenCalledWith(component.product);
  });

  it('should decrement and remove', () => {
    const decrementProduct: DebugElement  = fixture.debugElement.query(By.css('.decrement'));
    decrementProduct.triggerEventHandler('click', component.product);
    fixture.detectChanges();
    expect(component.decrementProduct)
      .toHaveBeenCalledWith(component.product);
    expect(component.remove.emit)
      .toHaveBeenCalledWith(component.product);
    expect(component.decrement.emit)
      .not
      .toHaveBeenCalledWith(component.product);
  });


  it('should decrement ', () => {
    component.product = {
      ...component.product,
      count: 2
    };
    const decrementProduct: DebugElement  = fixture.debugElement.query(By.css('.decrement'));
    decrementProduct.triggerEventHandler('click', component.product);
    fixture.detectChanges();
    expect(component.decrementProduct)
      .toHaveBeenCalledWith(component.product);
    expect(component.remove.emit)
      .not
      .toHaveBeenCalledWith(component.product);
    expect(component.decrement.emit)
      .toHaveBeenCalledWith(component.product);
  });
});
