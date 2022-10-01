<script>
    // import the todo items and database 
    import TodoItem from './TodoItem.svelte';
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    // get the user ID passed from parent
    export let uid;

    // prepopulate the form with some text 
    let text = 'some task';

    // in the database, look for the todo items which have an uid that matches the uid we were given 
    // in other words, find all the todo items made by a certain user 
    const query = db.collection('todos').where('uid', '==', uid).orderBy('created');

    // check to see which of the todo items made by the desired user begins with characters of 'id' 
    const todos = collectionData(query, {idField:'id'}).pipe(startWith([]));

    // function which adds to the database a todo item containing a 
    // uid (to show which user made it), completion status, when it was created, and text 
    function add() {
        db.collection('todos').add({ uid, text, complete: false, created: Date.now() });
        text = '';
    }

    // updates the completion status of a todo item 
    // takes in an event, gets the id and newStatus from the event
    // goes into database to find the event with the corresponding id and updates the status of that item 
    function updateStatus(event) {
        const { id, newStatus } = event.detail;
        db.collection('todos').doc(id).update({ complete: newStatus });
    }

    // removes a todo item 
    // takes in an event and gets the id 
    // goes into database to find the event with the corresponding id and deletes that item 
    function removeItem(event) {
        const { id } = event.detail;
        db.collection('todos').doc(id).delete();
    }
</script>

<!-- stylizes each todo item --> 
<style>
    input { display: block }
</style>

<!-- iterates through each todo item using loop and creates a HTML list item associated to it --> 
<ul>
	{#each $todos as todo}
        <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
        
	{/each}
</ul>

<!-- creates the input form and prepopulates it with the text defined above ('some task') --> 
<input bind:value={text}>

<!-- creates the add task button --> 
<button on:click={add}>Add Task</button>