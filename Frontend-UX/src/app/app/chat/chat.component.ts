import { Component, OnInit,Injectable, NgZone  } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';  
import { Message, ChatServiceComponent } from '../chat-service/chat-service.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  txtMessage: string = '';
  uniqueID: string = new Date().getTime().toString();
  messages = new Array<Message>();
  message = new Message();

  constructor(private chatService: ChatServiceComponent,
    private _ngZone: NgZone) {
      this.subscribeToEvents();
   }
   sendMessage(): void {
    if (this.txtMessage) {
      this.message = new Message();
      this.message.clientuniqueid = this.uniqueID;
      this.message.type = "sent";
      this.message.message = this.txtMessage;
      this.message.date = new Date();
      this.messages.push(this.message);
      this.chatService.sendMessage(this.message);
      this.txtMessage = '';
    }
  }

  ngOnInit() {
    // document.getElementById('navbar-ux').style.display='none';
    // document.getElementById('reglog-ux1').style.display='none';
    // document.getElementById('reglog-ux2').style.display='none';
    // document.getElementById('logout-ux').style.display='none';
    // document.getElementById('Panel-ux').style.display='none';
    // document.getElementById('chat-ux').style.display='none';
  }
  subscribeToEvents() {
    this.chatService.messageReceived.subscribe((message: Message) => {
      this._ngZone.run(() => {
        if (message.clientuniqueid !== this.uniqueID) {
          message.type = "received";
          this.messages.push(message);
        }
      });
    });
  }
}

