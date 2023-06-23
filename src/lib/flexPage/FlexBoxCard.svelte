 <script>
 export let href='';
 export let bgColor='bg-gray-600 ';
 export let borderColor='border-blue-700 ';
 export let hoverColor='border-white ';
 </script>
 
 <!-- <div class="flex justify-items-center"></div> -->
<div class={`w-3/12  ${bgColor} rounded-md p-2 m-1 
border-4 max-h-32 ${borderColor} text-center 
hover:${hoverColor} `}><!--outer -div-->
 
<a  class="hover:bg-gray-300  rounded-lg" 
 href={href} >

<div class="flex flex-col gap-2 justify-around"><!--inner -div-->

<slot></slot>
</div><!--inner -div-->
</a>
</div><!--outer-div-->
