<script lang="ts">
    import { displayedMessages } from "../stores/MessageStore";
    import type { DisplayMessage } from "../stores/MessageStore";
    import type { MessageModel } from "../models/MessageModel";
    import { isConnected } from "../stores/ConnectionStore";
    import { ChatConnection } from "../utils/ChatConnection";
    import { onDestroy } from "svelte";

    var generalStyles = "py-2 rounded-lg max-w-2xl my-2";
    var localStyles = `mr-2 ml-auto bg-red-700 text-white ${generalStyles}`;
    var outerStyles = `ml-2 mx-auto bg-red-200 text-red-700 ${generalStyles}`;

    const unsubscribe = isConnected.subscribe(isConnected => {
		if(isConnected) {
            ChatConnection.Connection.on("ReceiveMessage", (msg: MessageModel) => {
                var newMessage: DisplayMessage = {
                    isLocalUser: msg.user === "local",
                    message: msg.message
                };

                displayedMessages.set([...$displayedMessages, newMessage]);
            });
        }
	});

    onDestroy(unsubscribe);
</script>

<div
    class={`overflow-y-auto ${
        $displayedMessages.length === 0 ? "mx-auto" : ""
    }`}
>
    {#if $displayedMessages.length === 0}
        <div>Such empty... Say Hello!</div>
    {:else}
        <ul>
            {#each $displayedMessages as message}
                <li class={message.isLocalUser ? localStyles : outerStyles}>
                    <span class="mx-2">{message.message}</span>
                </li>
            {/each}
        </ul>
    {/if}
</div>
