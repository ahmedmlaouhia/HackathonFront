import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getHeader, getServerURL } from '../shared/request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  search(search: any) {
    return this.http.get(getServerURL(`users/search/${search}`));
  }

  getMe() {
    return this.http.get(getServerURL(`users/me`), getHeader());
  }
  getUser(id: any) {
    return this.http.get(getServerURL(`users/${id}`), getHeader());
  }
  update(body: any) {
    return this.http.put(getServerURL('users'), body, getHeader());
  }
  unfriend(who: any) {
    return this.http.put(getServerURL('users/unfriend'), { who }, getHeader());
  }
  kill() {
    return this.http.delete(getServerURL('users'), getHeader());
  }
}
