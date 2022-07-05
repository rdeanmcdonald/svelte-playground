<!-- <script>
     import { todoItems } from "./store";
     import { onMount } from "svelte";

     let newItem = "";
     let newItemInputForm = null;

     onMount(() => {
     newItemInputForm.focus();
     });

     let addToList = () => {
     $todoItems = [...$todoItems, { text: newItem, status: false }];
     newItem = "";
     };
     </script>

     <div>
     <div>
     <input
     bind:value={newItem}
     bind:this={newItemInputForm}
     type="text"
     placeholder="Add item"
     />
     <button on:click={addToList}>Add</button>
     </div>
     </div> -->
