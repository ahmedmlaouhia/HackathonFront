import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getHeader, getServerURL } from '../shared/request';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(getServerURL('notifications'), getHeader());
  }
}
