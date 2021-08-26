import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingItemComponent } from './printing-item.component';

describe('PrintingItemComponent', () => {
  let component: PrintingItemComponent;
  let fixture: ComponentFixture<PrintingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
