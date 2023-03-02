<script>
  export let data;
  console.log(data);
</script>


{#each data.cities as city }
    
<h1>{city.name}</h1>
<hr/>
{/each} 