import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineWaitFormPage } from './line-wait-form.component';

describe('LineWaitFormPage', () => {
  let component: LineWaitFormPage;
  let fixture: ComponentFixture<LineWaitFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineWaitFormPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LineWaitFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
