import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  public contato = {
    nome: null,
    email: null,
    telefone: null,
    mensagem: null
  }

  constructor(private apiService: ApiService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(email) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmação de email',
      subHeader: 'Sucesso!',
      message: 'Um email foi enviado para ' + email,
      buttons: ['OK']
    });

    await alert.present();
  }

  enviarEmail(){
    this.apiService.postMan(this.contato).subscribe(data => {
      this.presentAlert(this.contato.email);
    })
  }
}
