<script>
export let result;
let randomBoolean = ()=>Math.round(Math.random()) === 1;
</script>

<div class="flex justify-center text-white ">
    <div class="inline-flex w-3/4 p-1 gap-4 bg-gray-600 rounded-lg p-4">
<!-- <div class="flex justify-center text-white bg-gray-600 rounded-lg"> -->
<!-- <div class="inline-flex  p-2 gap-4 "> -->

<div class="">
    <img class="rounded-full" src="images/male.png" alt="My Image">
</div>

<div class="flex justify-around items-center  w-full bg-gray-700 rounded-md ">
<div class="p-2 bg-gray-900 rounded-md">Email</div>
<div class="p-2 bg-gray-900 rounded-md">{result.email}</div>
</div>
 
 

</div>
</div>