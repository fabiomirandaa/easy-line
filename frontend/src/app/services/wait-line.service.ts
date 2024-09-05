import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaitLineService {
  #http = inject(HttpClient);
  #apiURI = 'lalala';

  getLine() {
    return this.#http
      .get<any[]>(this.#apiURI)
  }

  addItem() {
    return this.#http
      .get<any[]>(this.#apiURI)
  }

  removeItem() {
    return this.#http
      .get<any[]>(this.#apiURI)
  }
}
