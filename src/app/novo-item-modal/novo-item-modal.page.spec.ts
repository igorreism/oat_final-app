import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovoItemModalPage } from './novo-item-modal.page';

describe('NovoItemModalPage', () => {
  let component: NovoItemModalPage;
  let fixture: ComponentFixture<NovoItemModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoItemModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovoItemModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
