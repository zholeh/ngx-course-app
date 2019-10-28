import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiddenDirective } from './hidden.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `
      <div appHidden #control='hiddenControl'></div>
      <span class="hide" (click)='control.hide()'>Hide</span>
      <span class="show" (click)='control.show()'>Show</span>
  `
})
class TestComponent {

}

describe('Hidden directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HiddenDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  }));
  it('should hide and show element ', () => {
    const element: DebugElement = fixture.debugElement.query(By.css('[appHidden]'));
    const hideBtn: DebugElement = fixture.debugElement.query(By.css('.hide'));
    const showBtn: DebugElement = fixture.debugElement.query(By.css('.show'));
    hideBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(element.styles.visibility).toEqual('hidden');
    showBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(element.styles.visibility).toEqual('visible');
  });
});
