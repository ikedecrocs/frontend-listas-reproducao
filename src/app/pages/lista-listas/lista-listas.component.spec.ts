import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaListasComponent } from './lista-listas.component';

describe('ListaListasComponent', () => {
  let component: ListaListasComponent;
  let fixture: ComponentFixture<ListaListasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaListasComponent]
    });
    fixture = TestBed.createComponent(ListaListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
