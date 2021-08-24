import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampItemsComponent } from './lamp-items.component';

describe('LampItemsComponent', () => {
  let component: LampItemsComponent;
  let fixture: ComponentFixture<LampItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LampItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LampItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
