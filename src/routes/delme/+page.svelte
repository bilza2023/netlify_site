<script>
import { BASE_URL } from '$lib/js/config.js';
import ajaxGet from "$lib/js/ajaxGet.js";
import ajaxPost from "$lib/js/ajaxPost.js";
import Entries from "./Entries.svelte";
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import { toast } from '@zerodevx/svelte-toast';
import AgentAjax from "./AgentAjax/AgentAjax"
import { onMount } from 'svelte';

let entriesArray = [];
onMount(async ()=>{
  try {
  //  const resp = await ajaxPost( `${BASE_URL}/` , {} );
// const resp = await ajaxPost( `${BASE_URL}/template/create` , {title:"Title"} );
// console.log("resp",await resp.json());
  // debugger;
  const agentAjax = new AgentAjax('template');
  // agentAjax.sendDataObjInResponse = true;
  const createResult = await agentAjax.create({title: 'AgentAjax'});
  console.log(createResult);
  if (createResult.message == null){
    toast.push("Created");
  }else {
    toast.push(createResult.message);
  }
  // const readResult = await agentAjax.read();
  // console.log(readResult);
    //    await templateCreate();
    //    await templateRead();
       
    //    let item = await templateReadOne();
    //    item.title = "Changed by Api";
    //    await templateUpdate(item);
    //    templateDelete();
      
    } catch (error) {
      console.error(error);
    }
});


async function templateReadOne(id='64983d051d53cacbd7757523'){
 try {
        const resp = await ajaxPost( `${BASE_URL}/template/readone`,{id});
        if(resp.ok){
            const data = await resp.json();
            entriesArray = [... entriesArray,"Teamplet Read ONE Successful"];
            entriesArray = [... entriesArray,`# of Teamplets Read ONE===> ${data.item.title} `];
            console.log("templateReadOne" , data.item); 
            return data.item;
        }else {
            // entriesArray = entriesArray.push("Teamplet Read failed");
            console.log(resp); 
        }

    } catch (error) {
      throw error;
    }
} 
// async function templateRead(){
//  try {
//         const resp = await ajaxGet( `${BASE_URL}/template/read`);
//         if(resp.ok){
//             const data = await resp.json();
//             entriesArray = [... entriesArray,"Teamplet Read Successful"];
//             entriesArray = [... entriesArray,`# of Teamplets Read ${data.items.length} `];
//             console.log("templateRead" , data.items); 
//             return data.items;
//         }else {
//             // entriesArray = entriesArray.push("Teamplet Read failed");
//             console.log(resp); 
//         }

//     } catch (error) {
//       throw error;
//     }
// } 

async function templateDelete(){
 try {
        const resp = await ajaxPost( `${BASE_URL}/template/delete`,{id:'64983d481d53cacbd775754b'});
        if(resp.ok){
            const data = await resp.json();
            entriesArray = [... entriesArray,"Teamplet DELETE Successful"];
            entriesArray = [... entriesArray,`# of Teamplets Deleted ${data.deletedCount} `];
            console.log(data); 
        }else {
            // entriesArray = entriesArray.push("Teamplet Read failed");
            console.log(resp); 
        }

    } catch (error) {
      throw error;
    }
} 

async function templateUpdate(item){  
// debugger;
 const resp = await ajaxPost(`${BASE_URL}/template/update` ,{item:item});
  if (resp.ok) {
      toast.push( "updated" );
  }else {
      const data = await resp.json();

      toast.push( data.message );
  }

}





</script>
<div class="bg-gray-800 w-full p-2 h-screen text-white text-center">
<HdgWithIcon title='Welcome To API Front end Test' icon='🕵️‍♀️📸'/>
<br>
<Entries {entriesArray}/>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</div>