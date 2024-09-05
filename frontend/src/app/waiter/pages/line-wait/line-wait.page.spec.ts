import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineWaitPage } from './line-wait.page';

describe('LineWaitPage', () => {
  let component: LineWaitPage;
  let fixture: ComponentFixture<LineWaitPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineWaitPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LineWaitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
