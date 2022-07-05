<!-- <script>
     import { activeConversation } from "./store.js";

     let message = "";

     const handleKeydown = (event) => {
     if (event.key === "Enter") {
     $activeConversation.sendMessage(message);
     message = "";
     }
     };
     </script>

     <svelte:window on:keydown={handleKeydown} />

     <div class="conversation-input">
     <input
     type="text"
     bind:value={message}
     placeholder="Type your message..."
     />
     </div>

     <style>
     .conversation-input {
     width: 90%;
     position: fixed;
     bottom: 25px;
     left: 5%;
     }

     input {
     width: 100%;
     }
     </style> -->
