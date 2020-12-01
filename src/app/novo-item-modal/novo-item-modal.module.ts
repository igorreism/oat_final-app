import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoItemModalPageRoutingModule } from './novo-item-modal-routing.module';

import { NovoItemModalPage } from './novo-item-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoItemModalPageRoutingModule
  ],
  declarations: [NovoItemModalPage]
})
export class NovoItemModalPageModule {}
