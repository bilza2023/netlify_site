<script>
import { testsStore , studentsStore } from '../../appStore';
$:quiz = $testsStore;
$: members = $studentsStore;

let memWOquizMems;

/////////////////////////////////////////////////////////////
const doesMemExistInQuiz = (email)=>{
 let yesExist = false;
    for (let i = 0; i < quiz.members.length; i++) {
        const element = quiz.members[i];
        if (element.email == email){ 
            yesExist = true;
        }     
    }
 return yesExist;
}
//--important
memWOquizMems = memWOquizMemsMethod();

function memWOquizMemsMethod(){
    const mems = [];
        for (let i = 0; i < members.length; i++) {
            const elm = members[i];
            if (doesMemExistInQuiz(elm.email) == false) {
            mems.push(elm);
            }
        }
return mems;
}


const toQuizMem = (email,password)=>{
 // debugger;
    if ( doesMemExistInQuiz(email) == false ) {
        quizStore.update(quiz => {
                // const updatedMembers = quiz.members.push({email,password});
                const updatedMembers = quiz.members;
                updatedMembers.push({email,password});
                console.log("updatedMembers" ,  updatedMembers);
                return { ...quiz, members: updatedMembers };
                });
                memWOquizMems = memWOquizMemsMethod();
    }
}
const delQuizMem = (email)=>{
 // debugger;
    for (let i = 0; i < quiz.members.length; i++) {
        const element = quiz.members[i];
        if (element.email == email){ 
            //  quiz.members.splice(i, 1);
            //  quiz.members = [...quiz.members ];
               quizStore.update(quiz => {
                const updatedMembers = quiz.members.filter(member => member.email !== email);
                return { ...quiz, members: updatedMembers };
                });
                memWOquizMems = memWOquizMemsMethod();
        }     
    }
}

</script>



<div>

<div class="flex justify-around w-full">
    <p class="border border-gray-600 p-1 m-1 rounded-lg bg-gray-400">User Members</p>
    <p class="border border-gray-600 p-1 m-1 rounded-lg bg-gray-400">Quiz Members</p>

</div>

<div class="flex justify-between w-full gap-4">
    <div class="flex-1 flex flex-col align-start">
        <table>
            {#each memWOquizMems  as member}
            <tr><td class="border border-gray-500">{member.email}</td>
                <td class="border  border-gray-500">
                <button 
                class="border bg-blue-800  p-1 w-full active:bg-blue-900 hover:bg-blue-700"
                on:click={()=>toQuizMem(member.email , member.password)}
                >
                <span style="color: white;">&#x2192;</span>
                </button>
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
                 on:click={()=>delQuizMem(member.email)}
                >
                <span class="text-sm">🗑️</span>
                </button>
                </td>
            </tr> 
            {/each}
        </table>
    </div>
</div>

</div>