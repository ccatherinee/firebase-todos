<!-- write javascript which allows us to assign a displayName, photo avatar and userID associated to each profile-->
<script>
    export let displayName;
    export let photoURL;
    export let uid;
</script>

<!-- print Hi {displayName} to the screen -->
<h3>Hi { displayName }!</h3>
<!-- display a photo avatar if available --> 
<img src={ photoURL } width="100" alt="user avatar">
<!-- displays user id --> 
<p>Your userID is { uid }</p>