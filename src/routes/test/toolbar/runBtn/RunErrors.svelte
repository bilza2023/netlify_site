<script>
import {errorsArrayStore} from "./store";

$: errorList = $errorsArrayStore;
</script>


{#if errorList.length > 0 }
<h1 class="p-2 m-2 rounded-lg bg-gray-700 w-2/12 text-center ">Errors</h1>
<ol class="">
{#each errorList as err }
    <li class="bg-orange-900 p-2 m-2 rounded-lg border-red-900">{err}</li>
{/each}
</ol>
{/if}