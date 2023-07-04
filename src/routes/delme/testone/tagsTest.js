
import AgentAjax from "../AgentAjax/AgentAjax";

export default async function tagsTest(name="ee",description="dd"){
try{

  const agentAjax = new AgentAjax('tag');
  agentAjax.sendDataObjInResponse = false;
  //====================CREATE
  debugger;
    const createResult = await agentAjax.create({data:{name: "starwars" ,
      description : "de322"}});
        if (createResult.message == null){
            console.log("Created new:",createResult.item)
        }else {
  debugger;
            console.log(createResult.message);
        }
    // const id = createResult;

// //====================READONE
// const resultReadone = await agentAjax.readone({id:createResult._id});
// // console.log(rez);
//     if (resultReadone.message == null){
//           console.log("readone",resultReadone.item)
//     }else {
//       console.log(resultReadone.message);
//     }
// //====================UPDATE
// resultReadone.item.name = 'Kaysaa--updated';
// // debugger;
// const updateResult = await agentAjax.update({item:resultReadone.payload.item, errorMessage:''});
// // console.log(rez);
//     if (updateResult.message == null){
//           console.log("update",updateResult.payload.item)
//     }else {
//       console.log(updateResult.message);
//     }    
// //====================READ
// const readResult = await agentAjax.read();
// // console.log(rez);
//     if (readResult.message == null){
//           console.log("read",readResult.payload.items)
//     }else {
//       console.log(readResult.message);
//     }


// //====================DELETE
// // debugger;
// const deleteResult = await agentAjax.delete({id, errorMessage:''});
// // console.log(rez);
//     if (deleteResult.message == null){
//           console.log("deleted",deleteResult)
//     }else {
//        console.log(deleteResult.message);
//     }

  
////////////////////////////////////////////////////////      
} catch (e) {
    console.error("Test Failed",e);
}
////////////////////////////////////////////////////////      
////////////////////////////////////////////////////////      

}