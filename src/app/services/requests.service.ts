import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getHeader, getServerURL } from '../shared/request';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(getServerURL('requests/'), getHeader());
  }
  create(to: any) {
    return this.http.post(getServerURL('requests/'), { to }, getHeader());
  }
  accept(to: any) {
    return this.http.put(getServerURL('requests/accept'), { to }, getHeader());
  }
  kill(to: any) {
    return this.http.put(getServerURL('requests/kill'), { to }, getHeader());
  }
}
