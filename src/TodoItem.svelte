<script>
    // allows our components to dispatch events 
    import { createEventDispatcher } from 'svelte';

    // instantiates the component, links dispatch to the component instance 
    const dispatch = createEventDispatcher();
    
    // this function dispatches the event 'remove' and sends id in event.detail
    function remove() {
		dispatch('remove', { id });
	}

    // this function dispatches the event 'toggle' 
    // this event.detail holds an id and newStatus (which it manipulates) and then sends 
	function toggleStatus() {
        let newStatus = !complete;
		dispatch('toggle', {
            id,
            newStatus
        });
    }

    // creates variables id, text, complete 
    export let id; // document ID
    export let text;
    export let complete;
</script>

<!-- stylizes what happens when a todo item is deleted: draws a line through and turns the words green -->
<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
</style>

<!-- creates each (todo) list item in the (todo) list -->  
<li>
<!-- check if the list item is completed, if yes then stylize it appropriately --> 
<!-- create a checkmark button that when clicked will dispatch toggle event by calling the toggleStatus function --> 
{#if complete}
    <span class="is-complete">{ text }</span>
    <button on:click={toggleStatus}> ✔️ </button>
<!-- if list item not completed, then stylize appropriately --> 
<!-- create a red x button that when clicked will dispatch toggle event by calling the toggleStatus function -->
{:else}
    <span>{ text }</span>
    <button on:click={toggleStatus}> ❌ </button>
{/if}
<!-- create trash can button that when clicked will dispatch remove event by calling remove function --> 
<button on:click={remove}> 🗑 </button>

</li>