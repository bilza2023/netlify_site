<script>
export let title;
export let icon;
export let count;
export let bg ='bg-gray-800';

</script>





<div class= {`flex flex-col justify-center   p-2 m-1 rounded-lg  text-white  ${bg} border border-white`}>

<div class="flex justify-center">
    <div class="">
       <span class="text-2xl"> {icon}</span>
        </div>

    <div class="">
    <span class="text-2xl">{count}</span>
    </div>
    
</div>

<div>
 {title}  
</div>




</div>
