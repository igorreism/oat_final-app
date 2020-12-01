import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoItemModalPage } from './novo-item-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovoItemModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoItemModalPageRoutingModule {}
