import { Injectable, EventEmitter, OnInit } from "@angular/core";
import * as signalR from "@aspnet/signalr";
import { HttpClient } from "@angular/common/http";
import { AuthService, Usuario } from "../auth-service/auth-service.component";
import { Console } from "console";

@Injectable()
export class SignalRService {
  public hubConnection: signalR.HubConnection;
  private ChatsApi = "http://localhost:5000/api/Chats/";
  private connectionIsEstablished = false;
  private API = "http://localhost:5000/message";
  connectionEstablished = new EventEmitter<Boolean>();
  messageReceived = new EventEmitter<Mensajes>();
  usuario: Usuario;

  constructor(private http: HttpClient, private authService: AuthService) {
    //this.createConnection();
    // this.registerOnServerEvents();
    // this.startConnection();
    this.usuario = authService.getUser();
  }

  createConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.API)
      .build();
  }

  sendMessageToAdmin(message) {
    // this.userToRoom(this.usuario[0].idUsuario);
    this.hubConnection.invoke("SendMessage",this.usuario[0].idUsuario,message,2);
  }
  sendMessageToClient(message, id) {
    // this.userToRoom(id);
    this.hubConnection.invoke("SendMessage", id, message, 1);
  }

  public startConnection(id): void {
    this.hubConnection
      .start()
      .then(() => {
        this.hubConnection
          .invoke("userToGroup", id)
          .then(function (connectionId) {
            console.log(connectionId);
          })
          .catch((err) => console.log(err));
        this.connectionIsEstablished = true;
        console.log("Chat Iniciado Correctamente!");
        this.connectionEstablished.emit(true);
      })
      .catch((err) => {
        console.log("Error while establishing connection, retrying...");
        setTimeout(function () {
          this.startConnection();
        }, 5000);
      });
  }
  userToRoom(id) {
    this.hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log("Chat Iniciado Correctamente2!");
        this.connectionEstablished.emit(true);
        this.hubConnection.invoke("userToGroup", id);
      })
      .catch((err) => {
        console.log("Error while establishing connection, retrying...");
      });
    // return this.hubConnection
    //   .invoke("userToGroup", id)
    //   .then(function (connectionId) {
    //     console.log(connectionId)
    //   })
    //   .catch((err) => console.log(err));
  }

  public registerOnServerEvents(): void {
    this.hubConnection.on("Send", (data: any, id: any) => {
      var metadata = <Mensajes>{
        mensaje: data,
        id: id,
      };
      this.messageReceived.emit(metadata);
    });
  }
  public getChatsAdmin() {
    return this.http.get(this.ChatsApi + "ChatsActivos");
  }
  public getChatClient(id) {
    return this.http.get(this.ChatsApi + "ChatCliente/" + id);
  }
  public getMensajesCliente(id) {
    return this.http.get(this.ChatsApi + "getMessageClient/" + id);
  }
  public sendMessageToAd(idChat, mensaje) {
    var msj = {
      chatIdChat: idChat,
      Mensaje: mensaje,
    };
    return this.http.post(this.ChatsApi + "InsertarMensajeC", msj).subscribe(
      (res) => {},
      (error) => {},
      () => {
        console.log("Peticion hecha correcamente");
      }
    );
  }
  public sendMessageToCL(idChat, mensaje) {
    var msj = {
      chatIdChat: idChat,
      Mensaje: mensaje,
    };
    console.log("Enviando desde admin");
    return this.http.post(this.ChatsApi + "InsertarMensajeA", msj).subscribe(
      (res) => {},
      (error) => {},
      () => {
        console.log("Peticion hecha correcamente");
      }
    );
  }
}
export interface Mensajes {
  mensaje: string;
  id: number;
}
