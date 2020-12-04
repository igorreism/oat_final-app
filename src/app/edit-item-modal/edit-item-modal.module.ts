import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditItemModalPageRoutingModule } from './edit-item-modal-routing.module';

import { EditItemModalPage } from './edit-item-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditItemModalPageRoutingModule
  ],
  declarations: [EditItemModalPage]
})
export class EditItemModalPageModule {}
