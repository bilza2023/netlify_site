<script>
import Card from "./Card.svelte";
</script>




<div class="flex flex-col justify-center     
  text-white  m-0 p-1 gap-1">
<br>
<Card title = "MCQs" handler = {()=>console.log("ok")} icon="&#x2699;" />
<Card title = "MCQ Types" handler = {()=>console.log("ok")} icon="&#x1F3A8;" />
<Card title = "Inputs" handler = {()=>console.log("ok")} icon=" &#x003F;" />
<Card title = "Other" handler = {()=>console.log("ok")} icon="&#x2699;" />

</div><!--flex container-->