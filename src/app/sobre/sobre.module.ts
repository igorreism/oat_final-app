import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SobrePage } from './sobre.page';

import { SobrePageRoutingModule } from './sobre-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SobrePageRoutingModule
  ],
  declarations: [SobrePage]
})
export class SobrePageModule {}
