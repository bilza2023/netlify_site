import ajaxGet from "$lib/js/ajaxGet.js";
import ajaxPost from "$lib/js/ajaxPost.js";
import { BASE_URL } from '$lib/js/config.js';
import processResp from "./processResp";

export default class AjaxAgent {
//template
constructor(assetPath,args={}) {
this.assetPath = assetPath;
this.args = args;
this.sendDataObjInResponse = false;
} 

async create(inload){  
  try{
  const resp = await ajaxPost( `${BASE_URL}/${this.assetPath}/create` , inload );
      return processResp(resp);
      
  }catch(err){
    // console.log("resp",resp.json());
    throw err;
  }
}
/////////////////////////////////////////////////////
async  read(inload = {}){ //keep inload for later
 try {
        const resp = await ajaxGet( `${BASE_URL}/${this.assetPath}/read`);
        
        return await  processResp(resp);

   } catch (error) {
      throw error;
   }
} 
/////////////////////////////////////////////////////
async  readone(inload = {id}){ //keep inload for later
 try {
  const resp = await ajaxPost( `${BASE_URL}/${this.assetPath}/readone`,inload);
        
  return await  processResp(resp);

   } catch (error) {
      throw error;
   }
} 
/////////////////////////////////////////////////////
async  update(inload = { item}){  
// debugger;
 try{
  const resp = await ajaxPost(`${BASE_URL}/${this.assetPath}/update` ,inload);
   
  return await  processResp(resp);

 } catch (error) {
      throw error;
 }

}

async  delete(inload = {id}){  
// debugger;
 try{
  const resp = await ajaxPost(`${BASE_URL}/${this.assetPath}/delete` ,inload);
   
  return await  processResp(resp);

 } catch (error) {
      throw error;
 }

}

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
}//class ends