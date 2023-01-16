import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarhabilidadComponent } from './agregarhabilidad.component';

describe('AgregarhabilidadComponent', () => {
  let component: AgregarhabilidadComponent;
  let fixture: ComponentFixture<AgregarhabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarhabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarhabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
