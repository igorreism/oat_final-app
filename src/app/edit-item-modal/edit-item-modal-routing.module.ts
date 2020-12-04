import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditItemModalPage } from './edit-item-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditItemModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditItemModalPageRoutingModule {}
