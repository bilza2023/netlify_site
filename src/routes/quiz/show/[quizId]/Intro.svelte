<script>
import {pageState} from "./showQuizStore";
// export let pageState=0;
</script>


<h1>Welcome To This Quiz</h1>
<button on:click={ ()=> pageState.set(1) }>Go To Quiz</button>