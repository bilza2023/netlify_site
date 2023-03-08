<script>
export let background_color = "bg-red-800";
export let text_color = "text-white";
</script>

<div class="container {text_color} {background_color}">
  <slot></slot>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    /* background-color: #f56565; */
    padding: 0.5rem;
    padding-left: 10%;
    padding-right: 10%;
    border-radius: 0.25rem;
    width: fit-content;
    margin: 0 auto;
    font-size: 1.5rem;
  }
</style>

