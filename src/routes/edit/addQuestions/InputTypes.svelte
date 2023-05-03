<script>
import Btn from "./BtnNav.svelte";
export let btnBg="bg-gray-700";
</script>


<div class="flex flex-wrap">

<Btn bgColor={btnBg} title = "Email" />
<Btn bgColor={btnBg} title = "Password" />
<Btn bgColor={btnBg} title = "Number" />
<Btn bgColor={btnBg} title = "String" />
<Btn bgColor={btnBg} title = "Url" />

</div>
