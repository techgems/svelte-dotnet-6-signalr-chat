<script lang="ts">
    import { ChatConnection } from '../utils/ChatConnection'; 
    import { displayedMessages, DisplayMessage } from '../stores/MessageStore';
    import type { MessageModel } from '../models/MessageModel';

    var message = "";
    var user = "";

    var placeholder = "Write your message";

    const sendMessage = async () => {
        var msg: MessageModel = {
            user,
            message 
        };

        try {
            await ChatConnection.SendMessage(msg);

            var newMessage: DisplayMessage = {
                isLocalUser: user !== "local",
                message
            };
            
            displayedMessages.set([...$displayedMessages, newMessage]);
            message = "";
        }
        catch(e) {
            console.error(e);
        }
        
    };
</script>

<div class="flex justify-end pr-12 bg-gray-200 py-4">
    <input type="text" class="rounded-md border-gray-300 w-full max-w-2xl mr-2" bind:value={message} placeholder={placeholder} />
    <button class="bg-red-800 px-4 py-2 rounded-md text-white" on:click={sendMessage}>Send</button>
</div>

