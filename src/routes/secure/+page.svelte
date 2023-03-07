<script>
import {onMount} from "svelte";

onMount(async () => {
	const token = localStorage.getItem('jwtToken');

    const response = await fetch("https://skillzaa.cyclic.app/user/secure", {
      headers: {Authorization: `Bearer ${token}`}
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    
    const data = await response.json();
    console.log(data);
});
	

</script>


<h1>Secure</h1>