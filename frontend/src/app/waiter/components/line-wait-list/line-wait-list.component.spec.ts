import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineWaitListComponent } from './line-wait-list.component';

describe('LineWaitListComponent', () => {
  let component: LineWaitListComponent;
  let fixture: ComponentFixture<LineWaitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineWaitListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LineWaitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
