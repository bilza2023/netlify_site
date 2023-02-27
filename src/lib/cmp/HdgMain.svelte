


<!-- <div class="m-2 p-3 bg-red-600 text-white flex justify-center">
<slot></slot>
</div> -->
<div class="container">
  <slot></slot>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    background-color: #f56565;
    padding: 0.5rem;
    padding-left: 12rem;
    padding-right: 12rem;
    border-radius: 0.25rem;
    width: fit-content;
    margin: 0 auto;
    font-size: 1.5rem;
  }
</style>

