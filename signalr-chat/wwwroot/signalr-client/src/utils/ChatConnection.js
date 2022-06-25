import { HubConnectionBuilder } from "@microsoft/signalr";
export class ChatConnection {
    static Connection;
    static ChatTopic = "SendMessage";
    static SetIdentityTopic = "SetIdentity";
    static async InitiateConnection() {
        ChatConnection.Connection = new HubConnectionBuilder()
            .withUrl("https://localhost:7127/hubs/chat")
            .withAutomaticReconnect()
            .build();
        await ChatConnection.Connection.start();
    }
    static async SetIdentity(identity) {
        await ChatConnection.Connection.send(ChatConnection.SetIdentityTopic, identity);
    }
    static async SendMessage(message) {
        await ChatConnection.Connection.send(ChatConnection.ChatTopic, message);
    }
    static TerminateConnection() {
        ChatConnection.Connection.stop();
    }
}
;
//# sourceMappingURL=ChatConnection.js.map