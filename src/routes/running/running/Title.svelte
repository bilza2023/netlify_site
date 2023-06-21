<script>
  export let quiz;
</script>

<style>
  .background-animation {
    position: relative;
    overflow: hidden;
  }

  .background-animation::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    animation: moveBackground 60s linear infinite;
  }

  @keyframes moveBackground {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>

<!-- Title -->
<div class="mb-2 w-full text-center">
  <div class="background-animation">
    <div class="w-full p-1 m-1 bg-gray-700 text-sm rounded-md">{quiz.title}</div>
  </div>
</div>
