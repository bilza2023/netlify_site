<script>
export let title;
export let icon;
export let bgColor = 'bg-blue-800';
</script>


<div class="flex justify-center">
  <div class={`inline-flex ${bgColor} text-white rounded-md p-3 m-2 px-14 mt-4`}>
    <span class="text-3xl">{icon}</span>&nbsp;
    <span class="text-3xl">{title} </span>
  </div>
 </div>
