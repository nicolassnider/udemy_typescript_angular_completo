import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUusuariosComponent } from './agregar-uusuarios.component';

describe('AgregarUusuariosComponent', () => {
  let component: AgregarUusuariosComponent;
  let fixture: ComponentFixture<AgregarUusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarUusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarUusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
