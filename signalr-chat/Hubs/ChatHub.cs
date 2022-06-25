using Microsoft.AspNetCore.SignalR;

namespace signalr_chat.Hubs;


public record ChatMessage(string User, string Message);

public interface IChatClient
{
    Task ColorTaken(string colorLabel);

    Task ReceiveMessage(ChatMessage message);
}

public class ChatHub : Hub<IChatClient>
{
    public async Task SetColor(string colorTaken)
    {
        await Clients.Others.ColorTaken(colorTaken);
    }

    public async Task SendMessage(ChatMessage message)
    {
        await Clients.Others.ReceiveMessage(message);
    }
}

