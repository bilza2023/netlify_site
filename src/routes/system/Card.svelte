<script>
import shortenText from "$lib/js/shortenText.js";
export let urlTag;
export let title;
export let icon;
</script>

 
<div class="w-3/12 bg-gray-600 rounded-md p-2 m-1 
border-4 max-h-32 border-blue-700 text-center 
hover:border-stone-400"><!--outer -div-->

<a  class="rounded-lg" 
 href={`/${urlTag}`} >

    <div class="flex flex-col"><!--inner -div-->
                
                <div class="mb-2">
                <span class="text-4xl">{icon}</span>
                </div>

                <div class="p-1 m-1 bg-gray-700 text-sm rounded-md">
                {shortenText(title,20)}
                </div>
    </div><!--inner -div-->
</a>
</div><!--outer-div-->
