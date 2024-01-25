import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListaComponent } from './form-lista.component';

describe('FormListaComponent', () => {
  let component: FormListaComponent;
  let fixture: ComponentFixture<FormListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormListaComponent]
    });
    fixture = TestBed.createComponent(FormListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
