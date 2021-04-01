import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterInfoPageComponent } from './enter-info-page.component';

describe('EnterInfoPageComponent', () => {
  let component: EnterInfoPageComponent;
  let fixture: ComponentFixture<EnterInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
