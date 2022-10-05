import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeditfotoComponent } from './modeditfoto.component';

describe('ModeditfotoComponent', () => {
  let component: ModeditfotoComponent;
  let fixture: ComponentFixture<ModeditfotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeditfotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeditfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
