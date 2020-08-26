import { Component, OnInit, Injectable, NgZone } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { SignalRService, Mensajes } from "./signalR.service";
import { HttpClient } from "@angular/common/http";
import { AuthService, Usuario } from "../auth-service/auth-service.component";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  mensaje;
  messages = new Array<Mensajes>();
  user: Usuario;
  chats;
  cerrar = true;
  idUser;
  lstMessage;
  infoChat;
  constructor(private authService: AuthService,private signalR: SignalRService, private _ngZone: NgZone) {
    this.subscribeToEvents();
  }

  ngOnInit() {
    this.user = this.authService.getUser();
    if (this.user[0].rol == 1) {
      //Extraer Chat de clientes
      this.signalR.getChatClient(this.user[0].idUsuario).subscribe(
        (result) => {
          this.chats = result;
          console.log(result);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log("Solicitud correctamnte de listado de chats");
        }
      );
      console.log("Cliente ingresando al chat =>", this.user);
    } else {
      //Extraer Chats de Administradores
      this.signalR.getChatsAdmin().subscribe(
        (result) => {
          this.chats = result;
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log("Solicitud correctamnte de listado de chats");
        }
      );
      console.log("Chats Activos: ", this.chats);
      console.log("Administrador ingresando al chat =>", this.user);
    }
  }
  ingresarMensaje() {
    console.log("Listado de Mensajes: ", this.messages);
    this.mensaje = (document.getElementById(
      "mensaje"
    ) as HTMLInputElement).value;
    console.log(this.user);
    if (this.user[0].rol == 1) {
      this.signalR.sendMessageToAdmin(this.mensaje);
      this.signalR.sendMessageToAd(this.infoChat.idChat,this.mensaje)

    } else {
      this.signalR.sendMessageToClient(this.mensaje, this.idUser);
     this.signalR.sendMessageToCL(this.infoChat.idChat,this.mensaje)

    }
    (document.getElementById("mensaje") as HTMLInputElement).value="";
  }
  verMensajes(chat) {
    this.messages = [];

    console.log("Informacion de Usuario a Enviar Mensaje ", chat);
    this.infoChat = chat;
    this.signalR.getMensajesCliente(chat.idChat).subscribe((res) => {
      this.lstMessage = res;
    });
    if (this.signalR.hubConnection) {
      this.signalR.hubConnection.stop();
      this.signalR.hubConnection= undefined;
   }
    if(this.user[0].rol ==1){
      this.signalR.createConnection();
      this.signalR.registerOnServerEvents();
      this.signalR.startConnection(this.user[0].idUsuario);
    }else{
      this.signalR.createConnection();
      this.signalR.registerOnServerEvents();
      this.signalR.startConnection(chat.usuariosIdUsuario);
    }

    this.idUser = chat.usuariosIdUsuario;
  }
  private subscribeToEvents(): void {
    this.signalR.messageReceived.subscribe((message) => {
      this._ngZone.run(() => {
        this.messages.push(message);
      });
    });
  }
}
