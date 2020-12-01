import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  public contato = {
    nome: null,
    email: null,
    mensagem: null
  }

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    alert(this.contato.mensagem)
  }

}
