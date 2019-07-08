import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfirmModalComponent } from './card-confirm-modal.component';

describe('CardConfirmModalComponent', () => {
  let component: CardConfirmModalComponent;
  let fixture: ComponentFixture<CardConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
