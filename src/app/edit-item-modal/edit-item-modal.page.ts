import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.page.html',
  styleUrls: ['./edit-item-modal.page.scss'],
})
export class EditItemModalPage implements OnInit {

  @Input() modalController: ModalController;
  @Input() item: any;
  public imagem: File;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss(null);
  }
  fileChangeListener($event){
    this.imagem = $event.target.files[0];
  }
  atualizar(){
    this.apiService.updateItens(this.item._id, this.item, this.imagem).subscribe(data => {
      this.modalController.dismiss(data);
    })
  }

}
