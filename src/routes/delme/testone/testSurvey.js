
import AgentAjax from "../AgentAjax/AgentAjax";

export default async function testone(excludeDelete=false){
try{

  const agentAjax = new AgentAjax('test');
  agentAjax.sendDataObjInResponse = true;
  //====================CREATE
    const createResult = await agentAjax.create({title: 'AgentAjax-Survey',errorMessage:''});
        if (createResult.message == null){
            console.log("Created new Survet:",createResult.payload.item)
        }else {
            console.log(createResult.message);
        }
    const id = createResult.payload.item._id;

 //====================READONE----||
 const resultReadone = await agentAjax.readone({id,errorMessage:''});
 // console.log(rez);
    if (resultReadone.message == null){
          console.log("readone",resultReadone.payload.item)
    }else {
      console.log(resultReadone.message);
    }
//====================UPDATE
resultReadone.payload.item.title = 'Kaysaa--updated';
const updateResult = await agentAjax.update({item:resultReadone.payload.item, errorMessage:''});
// console.log(rez);
    if (updateResult.message == null){
          console.log("update",updateResult.payload.item)
    }else {
      console.log(updateResult.message);
    }    
//====================READ
const readResult = await agentAjax.read();
// console.log(rez);
    if (readResult.message == null){
          console.log("read",readResult.payload.items)
    }else {
      console.log(readResult.message);
    }

 //====================DELETE
 // debugger;
 if (!excludeDelete){
 const deleteResult = await agentAjax.delete({id, errorMessage:''});
    if (deleteResult.message == null){
          console.log("deleted",deleteResult)
    }else {
       console.log(deleteResult.message);
    }
 }
  
////////////////////////////////////////////////////////      
} catch (e) {
    console.error("Template Test Failed",e);
}
////////////////////////////////////////////////////////      
////////////////////////////////////////////////////////      

}