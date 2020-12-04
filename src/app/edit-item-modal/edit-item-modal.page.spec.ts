import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditItemModalPage } from './edit-item-modal.page';

describe('EditItemModalPage', () => {
  let component: EditItemModalPage;
  let fixture: ComponentFixture<EditItemModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditItemModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
