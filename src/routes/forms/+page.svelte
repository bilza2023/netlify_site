<script>
import { onMount } from 'svelte';
let newPRojectName = "";
$: quizzes = [];

const newQuiz = async()=>{
const resp = await fetch( "http://localhost/quiz/new" , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {token : "fdee087980kjk" ,title :newPRojectName} )
    });
     newPRojectName = "";
  const data = await resp.json();

//   console.log(data);
  populate();
  // console.log("quizzes",quizzes);
}

onMount(async () => {
populate();
}); 
const populate = async () =>{
try {
//http://localhost:5173/quiz/show?quizId=6411609828a369b541fcd7d7
//   quizId = new URLSearchParams(location.search).get("quizId");
  const url = `http://localhost/quiz/page/10/0`;
// debugger;
  const resp = await fetch(url);
  const data = await resp.json();
//   console.log(data);
  quizzes = data.quizzes;
  console.log("quizzes",quizzes);

} catch (error) {
    console.error(error);
}
}
</script>
<input class="bg-gray-700 text-white"  type="text" bind:value={newPRojectName} >
<button on:click={newQuiz}>New Project</button>



<div class="p-4 m-4 rounded-md ">
  {#if quizzes}
    <table class="w-full border-collapse border-white">
      <thead class="">
        <tr class="bg-gray-700 text-white">
          <th class="py-2 px-4 border">Ser</th>
          <th class="py-2 px-4 border">Title</th>
          <th class="py-2 px-4 border">Edit</th>
          <th class="py-2 px-4 border">Show</th>
        </tr>
      </thead>
      <tbody>
        {#each quizzes as quiz,index }
          <tr class="text-white bg-gray-700">
            <td class="py-2 px-4 border">{index+1}</td>
            <td class="py-2 px-4 border">{quiz.title}</td>


<td class="py-2 px-4 border bg-blue-900 text-center text-white hover:bg-blue-700 active:bg-blue-800 rounded-md transition duration-200">
  <a href= {`/quiz/show?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    show
  </a>
</td>

<td class="py-2 px-4 border bg-red-900 text-center text-white hover:bg-red-700 active:bg-red-800 rounded-md transition duration-200">
  <a href={`/quiz/edit?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    edit
  </a>
</td>
            
         
          
          
          
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>