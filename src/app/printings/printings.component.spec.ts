import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingsComponent } from './printings.component';

describe('PrintingsComponent', () => {
  let component: PrintingsComponent;
  let fixture: ComponentFixture<PrintingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
