<script>
  export let createdAt; // Assuming createdAt is a string in the format "2023-06-11T10:20:40.317+00:00"

  let elapsedTime = 0;

  function startCounter() {
    const startTime = new Date(createdAt).getTime();

    setInterval(() => {
      const currentTime = Date.now();
      elapsedTime = Math.floor((currentTime - startTime) / 1000);
    }, 1000);
  }

  startCounter();
</script>

<style>
  .circular-div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    
    height: 2rem;
    border-radius: 50%;
    background-color: #0B0E13;
    border-color: #646970;
    border-width: 1px;
    margin-right: 0.25rem;
  }
</style>

<div class="flex text-sm">
  <div class="circular-div">{Math.floor(elapsedTime / (60 * 60 * 24))}d</div>
  <div class="circular-div">{Math.floor((elapsedTime % (60 * 60 * 24)) / (60 * 60))}h</div>
  <div class="circular-div">{Math.floor((elapsedTime % (60 * 60)) / 60)}m</div>
  <div class="circular-div">{elapsedTime % 60}s</div>
</div>
