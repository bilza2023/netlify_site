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

async create(payload = {errorMessage:''}){  
  try{
  // debugger;
  const resp = await ajaxPost( `${BASE_URL}/${this.assetPath}/create` , payload );
// console.log("resp",resp.json());
// return resp;
   return await  processResp(resp,['item'],payload.errorMessage,this.sendDataObjInResponse);

  }catch(err){
    console.log("resp",resp.json());
    return resp;
  }
}
/////////////////////////////////////////////////////
async  read(payload = {errorMessage:''}){ //keep payload for later
 try {
        const resp = await ajaxGet( `${BASE_URL}/${this.assetPath}/read`);
        
        return await  processResp(resp,['items'],payload.errorMessage,this.sendDataObjInResponse);

   } catch (error) {
      throw error;
   }
} 
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
}//class ends