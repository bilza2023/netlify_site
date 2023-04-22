<script>
import H1 from "$lib/cmp/H1.svelte";
import ContainerDiv from "$lib/cmp/ContainerDiv.svelte";
import LeftCard from "./LeftCard.svelte";

let pageState = "welcome";
function callback(link) { pageState = link}
</script>


<ContainerDiv>
  <H1  title ="Skillzaa.com Docs"  />

<div class="flex gap-1 text-white">

<div class="w-1/5 bg-gray-500 rounded-sm min-h-screen text-center ml-3 ">

<LeftCard title="What is Skillzaa.com" tag="welcome" {callback} />
<LeftCard title="Creating (Quiz / Survey)" tag="test"  {callback} />

</div>

{#if pageState == "test"}
<div class="w-4/5">Test</div>
{/if}

{#if pageState == "welcome"}
<div class="w-4/5">Welcome</div>
{/if}


</div>








</ContainerDiv>