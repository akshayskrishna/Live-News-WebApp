import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinDisplayPage } from './pin-display.page';

describe('PinDisplayPage', () => {
  let component: PinDisplayPage;
  let fixture: ComponentFixture<PinDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinDisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
