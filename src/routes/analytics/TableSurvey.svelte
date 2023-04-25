<script>
import {countryNames} from "./countryNames.js";
    // console.log("Quiz results" , countryNames["AL"]);
    // console.log("Quiz results" , results[0].countryCode);
export let results;
export let deleteARez;
</script>



<table class="w-10/12 ">
<tr class="text-center text-white bg-blue-900">
<td class="tbltd">ser</td>
<td class="tbltd">Country</td>
<td class="tbltd">Correct Answers</td>
<td class="tbltd">Wrong Answers</td>
<td class="tbltd">Skipped Answers</td>
<td class="tbltd">Marks</td>
<td class="tbltd ">Delete</td>
</tr>


  {#each results as result , index}
  <tr class="text-center">
  <td class="tbltd">{index+1}</td>
  <td class="tbltd">{countryNames[result.countryCode]}</td>
  <td class="tbltd">{result.correctAnswers.length}</td>
  <td class="tbltd">{result.wrongAnswers.length}</td>
  <td class="tbltd">{result.skippedAnswers.length}</td>
  <td class="tbltd">{result.correctAnswers.length}</td>
  <td class="tbltd bg-red-900 text-white"><button on:click={()=>deleteARez(result._id)}>Delete</button></td>
  </tr>
  {/each}
</table>


<style>
.tbltd {
border:1px solid silver;
padding:1px;
color:white;

}
</style>