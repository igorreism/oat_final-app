import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getItens() {
    return this.httpClient.get('http://localhost:3000/api/itens');
  }
  postItens(item, imagem) {
    const formData = new FormData();
    formData.append('codigo', item.codigo);
    formData.append('nome', item.nome);
    formData.append('descricao', item.descricao);
    formData.append('imagem', imagem);
    return this.httpClient.post('http://localhost:3000/api/itens', formData);
  }
  updateItens(id, item, imagem){
    const formData = new FormData();
    formData.append('codigo', item.codigo);
    formData.append('nome', item.nome);
    formData.append('descricao', item.descricao);
    formData.append('imagem', imagem);
    return this.httpClient.put('http://localhost:3000/api/itens/' +id, formData);
  }
  deleteItem(id){
    return this.httpClient.delete('http://localhost:3000/api/itens/' + id);
  }
  postMan(contato){
    return this.httpClient.post('http://localhost:3000/api/postman', contato);
  }
}
