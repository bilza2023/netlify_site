<script>
  export let results = [];
  
</script>


{#each  results as result }
    <p>{result.question}</p>
    <p>{result.explanation}</p>
    <p>{result.correctAnswer}</p>
    <hr/>
{/each}