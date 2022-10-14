import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaddlabComponent } from './modaddlab.component';

describe('ModaddlabComponent', () => {
  let component: ModaddlabComponent;
  let fixture: ComponentFixture<ModaddlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaddlabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaddlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
