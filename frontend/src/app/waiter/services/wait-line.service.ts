import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseWaiter, Waiter } from '@easy-line-app/shared';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaitLineService {
  #http = inject(HttpClient);
  #apiURI = '/api/waiters';

  getLine() {
    return this.#http
      .get<ResponseWaiter>(this.#apiURI)
      .pipe(map(item => item.data))
  }

  addItem(item: Waiter) {
    return this.#http
      .post<Waiter>(this.#apiURI, item);
  }

  removeItem(id: string) {
    return this.#http
      .delete<string>(`${this.#apiURI}/${id}`);
  }
}
