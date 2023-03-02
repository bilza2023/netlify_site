<script>
  export let data;
  let cityName = "city";
  console.log(data);

const deposit = async ()=>{

  try {
    const response = await fetch('https://skillzaa.cyclic.app/add_city', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name :cityName})
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}
</script>


{#each data.cities as city }
    
<h1>{city.name}</h1>
<hr/>
{/each} 



<input type="text" bind:value={cityName}>

<button on:click={deposit}>Add City</button>