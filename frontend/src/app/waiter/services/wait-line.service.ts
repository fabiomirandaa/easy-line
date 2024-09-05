import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Waiter } from '@easy-line-app/shared';

@Injectable({
  providedIn: 'root'
})
export class WaitLineService {
  #http = inject(HttpClient);
  #apiURI = 'lalala';

  getLine() {
    return this.#http
      .get<Waiter[]>(this.#apiURI)
  }

  addItem() {
    return this.#http
      .post<any[]>(this.#apiURI, {})
  }

  removeItem() {
    return this.#http
      .delete<any[]>(this.#apiURI)
  }
}
