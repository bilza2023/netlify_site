<script>
import MainFlex from "$lib/MainFlex.svelte";
import Underconstruction from "$lib/cmp/Underconstruction.svelte";

import {mainQuizList} from "./main_quiz_list.js";
// console.log("QuizList" , mainQuizList);

// import {is_login} from "$lib/stores/appStore.js";
// let isLogin =false;
// is_login.subscribe( (p)=> isLogin=p);
// const add = ()=>{is_login.set(!isLogin)}
</script>

<!-- <h1>{isLogin}</h1> -->

<!-- <h1><a href="/quiz/create">New Quiz</a></h1> -->
<!-- <h1><a href="/quiz">Quizzes</h1> -->
<!-- <button on:click={add}>Add</button> -->
<Underconstruction  />
<img src="./images/heroBanner.png" alt="">

<br/>
<MainFlex list={mainQuizList}/>






<style>

</style>