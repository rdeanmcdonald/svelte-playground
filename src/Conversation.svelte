<!-- <script>
     import { onMount, afterUpdate } from "svelte";
     import { activeConversation } from "./store.js";
     import Message from "./Message.svelte";

     let div;
     let messages = [];

     onMount(async () => {
     const paginator = await $activeConversation.getMessages();
     messages = paginator.items;

     $activeConversation.on("messageAdded", (message) => {
     messages = [...messages, message];
     });
     });

     afterUpdate(() => {
     div.scrollTo(0, div.scrollHeight);
     });
     </script>

     <div class="conversation" bind:this={div}>
     {#each messages as message}
     <Message {message} />
     {/each}
     </div>

     <style>
     .conversation {
     position: fixed;
     top: 100px;
     bottom: 100px;
     overflow: auto;
     padding: 10px;
     box-sizing: border-box;
     width: 90%;
     left: 5%;
     }
     </style> -->
