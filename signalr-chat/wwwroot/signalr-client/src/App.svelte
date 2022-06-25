<script lang="ts">
  import 'virtual:windi.css'
  import Header from './components/Header.svelte';
  import MessageBox from './components/MessageBox.svelte';
  import MessageSender from './components/MessageSender.svelte';
  import GetStarted from './components/GetStarted.svelte';

  import { ChatConnection } from './utils/ChatConnection'; 
  import { isConnected } from './stores/ConnectionStore';
  import { colors } from './stores/ColorsTakenStore';
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    ChatConnection.InitiateConnection();
    $isConnected = true;
  });

  onDestroy(() => {
    unsubscribe();
    ChatConnection.TerminateConnection();
  });

  const unsubscribe = isConnected.subscribe(isConnected => {
		if(isConnected) {
            ChatConnection.Connection.on("ColorTaken", (color: string) => {
                //Tell the store the color is taken
                $colors.map(c => {
                  if(c.label === color) {
                    c.isTaken = true;
                  }
                  
                  return c;
                });
            });
        }
	});


</script>

<main class="flex flex-col h-screen justify-between">
  <GetStarted isOpen={true}></GetStarted>
  <Header other="Other user" />
  <MessageBox />
  <MessageSender />
</main>