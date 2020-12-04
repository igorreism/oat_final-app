import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'novo-item-modal',
    loadChildren: () => import('./novo-item-modal/novo-item-modal.module').then( m => m.NovoItemModalPageModule)
  },
  {
    path: 'edit-item-modal',
    loadChildren: () => import('./edit-item-modal/edit-item-modal.module').then( m => m.EditItemModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
