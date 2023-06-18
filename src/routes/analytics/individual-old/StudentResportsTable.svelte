
<script>
export let studentResports;

console.log("studentResports",studentResports);
</script>


<div class="w-10/12 mx-auto ">

{#each studentResports as studentResport }

   <table class="w-full">
  <tr>
    <td class="border border-white px-4 py-2 bg-blue-900">email</td>
    <td class="border border-white px-4 py-2 bg-stone-900">{studentResport.email}</td>
    <td class="border border-white px-4 py-2 bg-blue-900">Ip</td>
    <td class="border border-white px-4 py-2 bg-stone-900">{studentResport.ip}</td>
    <td class="border border-white px-4 py-2 bg-blue-900">countryCode</td>
        <td class="border border-white px-4 py-2 bg-stone-900">{studentResport.countryCode}</td>
  </tr>
  
  <tr>
    <td class="border border-white px-4 py-2 bg-blue-900">Total Marks</td>
        <td class="border border-white px-4 py-2 bg-stone-900">{studentResport.examTotalMarks}</td>
    <td class="border border-white px-4 py-2 bg-blue-900">Marks Obtained</td>
        <td class="border border-white px-4 py-2 bg-stone-900">{studentResport.totalMarksObtained}</td>
    <td class="border border-white px-4 py-2 bg-blue-900">Percentage</td>
        <td class="border border-white px-4 py-2 bg-stone-900">{studentResport.percentage}%</td>
  <tr>

</table>

<!-------->    
<br/>
<!-------->    
<table class="w-full text-white">
  <thead>
    <tr>
      <th class="border border-white px-4 py-2 bg-blue-500">Question</th>
      <th class="border border-white px-4 py-2 bg-blue-500">questionType</th>
      <th class="border border-white px-4 py-2 bg-blue-500">Status</th>
      <th class="border border-white px-4 py-2 bg-blue-500">totalMarks</th>
      <th class="border border-white px-4 py-2 bg-blue-500">Obtained</th>
      <th class="border border-white px-4 py-2 bg-blue-500">%age</th>
      <th class="border border-white px-4 py-2 bg-blue-500">required</th>
    </tr>
  </thead>
  <tbody>
    {#each studentResport.answers as report}
      <tr>
        <td class="border border-white px-4 py-2">{report.content}</td>
        <td class="border border-white px-4 py-2">{report.questionType}</td>
        <td class="border border-white px-4 py-2">Correct</td>
        <td class="border border-white px-4 py-2">{report.totalMarks}</td>
        <td class="border border-white px-4 py-2">{(report.marksObtained)}</td>
        <td class="border border-white px-4 py-2">{((report.marksObtained/report.totalMarks)*100)}%</td>
        <td class="border border-white px-4 py-2">{report.required}</td>
      </tr>
    {/each}
  </tbody>
</table>
    <br>
    <hr>
    <br>
<!-------->    
{/each}

</div>