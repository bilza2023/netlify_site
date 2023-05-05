<script>
    import { createEventDispatcher } from 'svelte';

    export let message = 'Alert!';
    const dispatch = createEventDispatcher();

    function handleOk() {
        dispatch('ok');
    }
</script>

<div>
    <p>{message}</p>
    <button on:click={handleOk}>OK</button>
</div>