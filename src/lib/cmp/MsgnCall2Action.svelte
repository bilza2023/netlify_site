<script>
  export let background_color = "bg-gray-600";
  export let text_color = "text-white";
  export let button_content = "Call To Action";
  export let button_color = "bg-red-500";
  export let actionHandler = ()=>console.log("actionHandler");

  // const isSmallScreen = media("(max-width: 640px)");
</script>

<style>
  .flex-col {
    flex-grow: 1;
  }

  .text-xl {
    max-width: 100%;
    width: auto;
  }
</style>

<div class="flex flex-col justify-center items-center mt-1 ">
  <div class="text-xl p-8 font-bold text-center mb-4 {text_color} w-1/2 md:w-3/4 rounded-lg p-2 {background_color} ">
    <slot></slot>
    <hr class="pb-2" />
    <button class="mt-4 mb-2 w-full py-2 rounded-md {button_color} text-white font-bold hover:bg-red-600 transition-colors duration-300"
    on:click={actionHandler}>
    {button_content}</button>
  </div>
</div>
