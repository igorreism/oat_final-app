import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NovoItemModalPage } from '../novo-item-modal/novo-item-modal.page';
import { EditItemModalPage } from '../edit-item-modal/edit-item-modal.page';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: 'crud.page.html',
  styleUrls: ['crud.page.scss']
})
export class CrudPage implements OnInit {

  public catalogo = [];

  constructor(private modalController: ModalController, private apiService: ApiService, private alertController: AlertController) { }

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

  async editItemModal(item) {
    const modal = await this.modalController.create({
      component: EditItemModalPage,
      componentProps: {
        'modalController': this.modalController,
        'item': item
      }
    });
    await modal.present();
  }

  async deleteItem(item){
    
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: `Deseja excluir a tarefa "${item.nome}"?`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {}
        }, {
          text: 'Deletar',
          handler: () => {

            this.apiService.deleteItem(item._id).subscribe((data:any) => {
              this.catalogo.forEach((itens, index) =>{
                if(item.id === itens.id){
                  this.catalogo.splice(index,1);
                }
              })
            });
          
          }
        }
      ]
    });
    await alert.present();

  }

}
