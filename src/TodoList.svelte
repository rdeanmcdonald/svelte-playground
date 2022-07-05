<!-- <script>
	 import { todoItems } from "./store";
	 import { fade, scale } from "svelte/transition";

	 let removeFromList = (i) => {
	 $todoItems.splice(i, 1);
	 $todoItems = $todoItems;
	 };
	 </script>

	 <h2>ToDoList Component</h2>
	 {#each $todoItems as item, i}
	 <div class="todoItems" in:scale out:fade={{ duration: 500 }}>
	 <input bind:checked={item.status} type="checkbox" />
	 <span class:checked={item.status}>{item.text}</span>
	 <button on:click={() => removeFromList(i)}>Delete</button>
	 </div>
	 {/each}

	 <style>
	 .checked {
	 text-decoration: line-through;
	 }
	 .toDoItems {
	 text-align: left;
	 }
	 </style> -->
