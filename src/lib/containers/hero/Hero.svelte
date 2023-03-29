<script>
import { onMount } from 'svelte';
import HeroPart from "./HeroPart.svelte";
let selectedIndex = 0;
let selectedItemIndex =0;

const start = async ()=>{

setInterval(()=>
    {
    if (selectedIndex >= 2){
        selectedIndex =0;
    }else {
        selectedIndex +=1;
    }
    //   console.log("selectedIndex",selectedIndex);
    }, 10000);

setInterval(()=>
    {selectedItemIndex = Math.floor(Math.random()*4);
        // console.log("selectedItemIndex",selectedItemIndex);
     }, 1500);
}
start();
</script>




<!--page div-->
<div class= "flex gap-5 w-full border-gray-600 border-2 rounded-md p-2 m-2" >

<HeroPart  myIndex=0 title="Create" items={["Quiz" , "Polls" , "Tests" , "MCQs"]} {selectedIndex} {selectedItemIndex} />

<HeroPart myIndex=1  title="Share With" items={["Teams" , "Employees" , "Students" , "All"]} {selectedIndex} {selectedItemIndex}/>

<HeroPart myIndex=2  title="Analyze" items={["Reports" , "Charts" , "Analysis" , "Marks"]} {selectedIndex} {selectedItemIndex}/>

</div><!--page div end-->



