import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NovoItemModalPage } from '../novo-item-modal/novo-item-modal.page';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: 'crud.page.html',
  styleUrls: ['crud.page.scss']
})
export class CrudPage implements OnInit {

  public catalogo = [];

  constructor(private modalController: ModalController, private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getItens().subscribe((data:any) => {
      this.catalogo = data;
    });
   }

  async novoItem(){
    const modal = await this.modalController.create({
      component: NovoItemModalPage,
      componentProps: {
        'modalController': this.modalController
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.catalogo.push(data);
    return
  }

}
