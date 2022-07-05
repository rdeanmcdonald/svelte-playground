<script lang="ts">
    import { appState, startChatting } from "./store";
</script>

<main>
    {#if $appState.state.kind == "connecting"}
        Connecting
    {:else if $appState.state.kind == "notConnecting"}
        Not Connecting
        <button
            on:click={() => {
                startChatting(appState, "enterprise_id");
            }}
        >
            Start chatting!
        </button>
    {:else if $appState.state.kind == "chatting"}
        Chatting
    {:else}
        ${$appState.state.error}
    {/if}
</main>

<!-- <script>
	 import Chat from "./Chat.svelte";
	 import { activeConversation, identity } from "./store.js";

	 const getAccessToken = async () => {
	 const res = await fetch(`http://localhost:8080/token/${$identity}`);
	 console.log(res);
	 const data = await res.json();
	 console.log(data);
	 const client = await Twilio.Conversations.Client.create(data.token);

	 try {
	 const newConversation = await client.createConversation({
	 uniqueName: "chat",
	 });
	 const joinedConversation = await newConversation
	 .join()
	 .catch((err) => console.log(err));
	 await joinedConversation
	 .add("user1")
	 .catch((err) => console.log(err));
	 await joinedConversation
	 .add("user2")
	 .catch((err) => console.log(err));

	 activeConversation.set(joinedConversation);
	 } catch {
	 activeConversation.set(
	 await client.getConversationByUniqueName("chat")
	 );
	 }
	 };
	 </script>

	 <svelte:head>
	 <script
	 src="https://media.twiliocdn.com/sdk/js/conversations/releases/1.2.0/twilio-conversations.min.js"
	 integrity="sha256-lYzPQyaIqs8RXkKxfQnkDbfiosIrDKs/OsJ2VjCcMc8="
	 crossorigin="anonymous"></script>
	 </svelte:head>

	 <main>
	 {#if !$activeConversation}
	 <input
	 type="text"
	 bind:value={$identity}
	 placeholder="Enter your name"
	 />
	 <button on:click={getAccessToken}>Get Chatting</button>
	 {:else}
	 <Chat />
	 {/if}
	 </main> -->
