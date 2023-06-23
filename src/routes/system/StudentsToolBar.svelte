<script>

import ToolBar from '$lib/toolbar/ToolBar.svelte';
import ToolBarBtn from '$lib/toolbar/ToolBarBtn.svelte';

</script>

<ToolBar>

<ToolBarBtn  icon={"👨‍🎓"} title="Admission" tf={true} trueColor={"text-white"} clk={()=>console.log("ok")}  />

<ToolBarBtn  icon={"🏫"} title="Add Class" tf={true} trueColor={"text-white"} clk={()=>console.log("ok")}  />


</ToolBar>
