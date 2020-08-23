// import { EventEmitter, Injectable, OnInit } from "@angular/core";
// import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
// import * as signalR from "@aspnet/signalr";

// @Injectable()
// export class ChatService implements OnInit {
//   messageReceived = new EventEmitter<Message>();
//   connectionEstablished = new EventEmitter<Boolean>();

//   private connectionIsEstablished = false;
//   private _hubConnection: HubConnection;

//   constructor() {}
//   ngOnInit() {
//     this.createConnection();
//     this.registerOnServerEvents();
//     this.startConnection();
//   }

//   sendMessage(message: Message) {
//     this._hubConnection.invoke("MessageHub", message);
//   }

//   createConnection() {
//     this._hubConnection
//       .start()
//       .then(() => {
//         this.connectionIsEstablished = true;
//         console.log("Chat Iniciado Correctamente!");
//         this.connectionEstablished.emit(true);
//       })
//       .catch((err) => {
//         console.log("Error while establishing connection, retrying...");
//         setTimeout(function () {
//           this.startConnection();
//         }, 5000);
//       });
//   }

//   startConnection() {
//     this._hubConnection.on("MessageReceived", (data: any) => {
//       this.messageReceived.emit(data);
//     });
//   }

//   registerOnServerEvents() {
//     this._hubConnection = new HubConnectionBuilder()
//       .withUrl("http://localhost:5000/Message/MessageHub")
//       .build();
//   }
// }

// export class Message {
//   clientuniqueid: string;
//   type: string;
//   message: string;
//   date: Date;
// }
