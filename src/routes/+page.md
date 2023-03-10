<script>
let data;
const items = [
{name:"HTML", href :"/content/html/"},
{name:"CSS", href :"/content/css/"},
{name:"Javascript", href :"/content/javascript/"},
{name:"Svelte", href :"/content/svelte/"},
{name:"MongoDB", href :"/content/mongodb/"},
{name:"Node.js", href :"/content/node/"},
{name:"General", href :"/content/general/"},
]; 
</script>




<img  class="max-w-4xl mx-auto w-full h-auto" src="/images/hero.png" alt="skillzaa.com Banner">
  
  <br>
<hr/>
  <br>


<div class="container">

{#each items as item }
<a class="item" href={item.href}><span >{item.name}</span></a>  
{/each}

</div>

<br>
<br>

<style>
  .item { 
    padding: 4px; 
    margin: 8px; 
    background-color: bisque; 
    color: black;
    text-align: center;
    flex-basis: 20%;
    min-height: 70px;
    border-radius: 5px;
    border:4px solid gray;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    
    justify-content:center;
  }
  
  @media (max-width: 1024px) {
    .item {
      flex-basis: 32%;
    }
  }
  
  @media (max-width: 768px) {
    .item {
      flex-basis: 100%;
    }
  }
</style>