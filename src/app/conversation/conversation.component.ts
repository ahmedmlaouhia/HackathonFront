import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
import upload from '../shared/firebase';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) {}

  message = '';
  conversation: any = {};
  file: File | null = null;
  fileType = '';
  empty = false;
  myId = null;
  media: any = {};

  ngOnInit(): void {
    this.chatService.messageSentSocket.subscribe((data) => {
      this.conversation.messages.push(data);
    });
    this.chatService.currentConversation.subscribe((data) => {
      console.log({ data });
      this.conversation = data;
      this.empty = true;
      this.userService.getMe().subscribe(({ _id }: any) => {
        this.myId = _id;
        this.conversation.contact = this.conversation.members?.filter(
          ({ _id: id }: any) => _id !== id
        )[0];
      });
    });
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
    this.media.type =
      this.file?.type.indexOf('image') !== -1 ? 'IMAGE' : 'FILE';
  }
  sendMessage() {
    console.log('send', this.message, typeof this.file);
    upload(this.file).then((url) => {
      this.media.url = url;
      this.chatService
        .createMessage({
          content: this.message,
          receiver: this.conversation.contact._id,
          media: this.media,
        })
        .subscribe((message) => {
          this.message = '';
          //this.conversation.messages.push(message);
          this.chatService.conversations.next((previous: any) => {
            console.log(previous);
            return {};
          });
        });
    });
  }
}
