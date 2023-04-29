<script>
export let url;
export let icon;
</script>


<div class="bg-gray-600 hover:bg-gray-900 rounded-md m-1 p-1">
    <a href= {`${url}`} >
        <span class="text-md">{icon}</span>
    </a>
</div>