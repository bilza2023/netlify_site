<script>
import Card from "./Card.svelte";
export let setPageState;
</script>
 



<div class="flex justify-between rounded-md     
 w-full bg-stone-400 text-white m-0 p-2">


<div class=" flex gap-1">
<Card title = "Quiz" handler = {()=>setPageState("quiz")} icon="&#x2699;" />
<Card title = "Questions" handler = {()=>setPageState("questions")} icon=" &#x003F;" />
<Card title = "Theme" handler = {()=>setPageState("theme")} icon="&#x1F3A8;" />
<Card title = "Launch" handler = {()=>console.log("ok")} icon=🚀 />
<Card title = "Analytics" handler = {()=>console.log("ok")} icon= 📊 />

</div>



<div class=" flex gap-1">
<Card title = "Save" handler = {()=>console.log("ok")} icon=💾/>
<Card title = "Publish" handler = {()=>console.log("ok")} icon=📤/>
<Card title = "Clone" handler = {()=>console.log("ok")} icon="&#x1F411;"/>
<Card title = "Delete" handler = {()=>console.log("ok")} icon= 🗑️ />
</div>



</div><!--flex container-->