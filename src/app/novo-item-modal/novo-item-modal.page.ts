import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-novo-item-modal',
  templateUrl: './novo-item-modal.page.html',
  styleUrls: ['./novo-item-modal.page.scss'],
})
export class NovoItemModalPage implements OnInit {

  @Input() modalController: ModalController;
  public item = {
    codigo: null,
    nome: null,
    descricao: null,
    imagem: null
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  adicionar(){
    this.apiService.postItens(this.item).subscribe(data => {
      this.modalController.dismiss(data);
    })
  }

  fechar() {
    this.modalController.dismiss();
  }

}
