import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAgregarHabiComponent } from './boton-agregar-habi.component';

describe('BotonAgregarHabiComponent', () => {
  let component: BotonAgregarHabiComponent;
  let fixture: ComponentFixture<BotonAgregarHabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonAgregarHabiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAgregarHabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
