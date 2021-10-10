import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent implements OnInit {
  constructor(private conversationService: ChatService) {}

  conversations: any = [];

  ngOnInit(): void {
    this.conversationService.getAllConversations().subscribe((data) => {
      this.conversations = data;
      this.conversationService.conversations.next(data);
    });
  }

  switchConversation(id: any) {
    this.conversationService.getConversation(id).subscribe((data) => {
      this.conversationService.currentConversation.next(data);
    });
  }
}
