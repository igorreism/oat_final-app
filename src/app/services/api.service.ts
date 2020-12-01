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
  postItens(item) {
    return this.httpClient.post('http://localhost:3000/api/itens', item);
  }
}
