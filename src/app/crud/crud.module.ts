import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudPage } from './crud.page';

import { CrudPageRoutingModule } from './crud-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CrudPage }]),
    CrudPageRoutingModule,
  ],
  declarations: [CrudPage]
})
export class CrudPageModule {}
