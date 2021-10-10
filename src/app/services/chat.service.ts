import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { getHeader, getServerURL } from '../shared/request';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient, private socket: Socket) {}
  messageSentSocket = this.socket.fromEvent<any>('MESSAGE_SENT');

  currentConversation: BehaviorSubject<any> = new BehaviorSubject({});
  conversations: BehaviorSubject<any> = new BehaviorSubject({});

  createMessage(body: any) {
    return this.http.post(getServerURL('messages/'), body, getHeader());
  }

  killMessage(id: any) {
    return this.http.delete(getServerURL(`messages/${id}`), getHeader());
  }

  getConversation(id: any) {
    return this.http.get(getServerURL(`conversations/${id}`), getHeader());
  }

  getAllConversations() {
    return this.http.get(getServerURL(`conversations/`), getHeader());
  }
}
