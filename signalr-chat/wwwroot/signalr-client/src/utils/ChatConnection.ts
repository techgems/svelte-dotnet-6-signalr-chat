import type { HubConnection } from "@microsoft/signalr";
import type { MessageModel } from "../models/MessageModel";
import type { UserInfo } from "../stores/UserInfoStore";
import { HubConnectionBuilder } from "@microsoft/signalr";

export class ChatConnection {
    static Connection: HubConnection;
    static ChatTopic: string = "SendMessage";
    static SetIdentityTopic: string = "SetIdentity";

    static async InitiateConnection() {
        ChatConnection.Connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7127/hubs/chat")
        .withAutomaticReconnect()
        .build();

        await ChatConnection.Connection.start();
    } 

    static async SetIdentity(identity: UserInfo) {
        await ChatConnection.Connection.send(ChatConnection.SetIdentityTopic, identity);
    }

    static async SendMessage(message: MessageModel) {
        await ChatConnection.Connection.send(ChatConnection.ChatTopic, message);
    }

    static TerminateConnection() {
        ChatConnection.Connection.stop();
    }
};