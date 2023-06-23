<script>
export let bgColor='bg-gray-700';
export let borderColor='border-gray-300';

</script>

 <div class= {`flex   ${bgColor} text-xs rounded-md ${borderColor} border`} >
<slot></slot>
    </div>