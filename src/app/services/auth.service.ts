import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { getServerURL } from '../shared/request';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  testSocket = this.socket.fromEvent<any>('LOGGED_IN');

  constructor(
    private http: HttpClient,
    private router: Router,
    private socket: Socket
  ) {}

  isLogged() {
    return localStorage.getItem('token') ? true : false;
  }

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(this.isLogged());

  login(user: any) {
    return this.http.post<{
      error?: null | string;
      token?: null | string;
    }>(getServerURL('auth/login'), user);
  }

  loginSocket() {
    this.socket.emit('LOGIN', { token: localStorage.getItem('token') });
  }

  loginSuccessful(token: any) {
    localStorage.setItem('token', token);
    this.isLoggedIn.next(true);
    this.socket.emit('LOGIN', { token });
    /*.then(() => {
      this.router.navigate(['/chat']);
    });*/
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  signup(user: any) {
    return this.http.post<{
      error?: null | string;
    }>(getServerURL('auth/signup'), user);
  }

  signupSuccessful() {
    this.router.navigate(['/login']);
  }
}
