<script>
import Btn from "./BtnNav.svelte";
export let btnBg="bg-gray-700";
</script>


<div class="flex flex-wrap">

<Btn bgColor={btnBg} title = "Countries" />
<Btn bgColor={btnBg} title = "Months" />
<Btn bgColor={btnBg} title = "WeekDays" />

</div>
