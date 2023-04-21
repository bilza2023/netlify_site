<script>
import { quizStore , membersStore } from '../store';
let quiz;
let members;
quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = value);

let hide = true;
// quiz.members = [{email : "ffff" }];

$: dispatchTo = quiz.dispatchTo;

let mems = [...members];

const toQuizMem = (email,password)=>{
// debugger;
let notExist = true;
    for (let i = 0; i < quiz.members.length; i++) {
        const element = quiz.members[i];
        if (element.email == email){ 
            notExist = false;
        }     
    }

    if (notExist == true) {
        quiz.members.push({email , password});
        quiz.members = [...quiz.members];

        for (let ii = 0; ii < mems.length; ii++) {
            const element = mems[ii];
        
        if (element.email == email){ 
            mems.splice(ii, 1);
            mems = [...mems];
        }
            
        }
    }
}
const delQuizMem = (email,password)=>{
// debugger;
    for (let i = 0; i < quiz.members.length; i++) {
        const element = quiz.members[i];
        if (element.email == email){ 
             quiz.members.splice(i, 1);
             quiz.members = [...quiz.members ];
        }     
    }
    //...
    mems.push({email , password});
    mems = [...mems];
}

</script>
<!--------------------------------------->

<div class="flex w-full">

<button class="flex-1
{hide == true ? "bg-green-500" : "bg-gray-500" }
p-1 m-1 rounded-md"
on:click={()=> hide = true}
>Hide</button>

<button class="flex-1
{hide == false ? "bg-green-500" : "bg-gray-500" }
 p-1 m-1 rounded-md"
on:click={()=>hide = false }
>Show</button>

</div>


{#if hide == false}
<div>

<div class="flex justify-around w-full">
    <p class="border border-gray-600 p-1 m-1 rounded-lg bg-gray-400">User Members</p>
    <p class="border border-gray-600 p-1 m-1 rounded-lg bg-gray-400">Quiz Members</p>

</div>

<div class="flex justify-between w-full gap-4">
    <div class="flex-1 flex flex-col align-start">
        <table>
            {#each mems as member}
            <tr><td class="border border-gray-500">{member.email}</td>
                <td class="border  border-gray-500">
                <button 
                class="border bg-blue-800  p-1 w-full active:bg-blue-900 hover:bg-blue-700"
                on:click={()=>toQuizMem(member.email , member.password)}
                >--&gt;</button>
                </td>
            </tr>
            {/each}
        </table>
    </div>
    <div class="flex-1 flex flex-col align-start">
        <table>
            {#each quiz.members as member}
            <tr>
            <td class="border border-gray-500">{member.email}</td>
            <td class="border  border-gray-500">
                <button 
                class="border bg-red-800  p-1 w-full active:bg-red-900 hover:bg-red-700"
                 on:click={()=>delQuizMem(member.email , member.password)}
                >delete</button>
                </td>
            </tr>
            {/each}
        </table>
    </div>
</div>

</div>
{/if}


