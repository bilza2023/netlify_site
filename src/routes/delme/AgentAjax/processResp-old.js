import axios from "axios";


export default async function processResp(resp ,demands=[],errorMessage="",
sendDataObjInResponse=false,debugMode=false){
try{

    // debugger;
    console.log(axios.isCancel('something'));
    if (resp.ok) {
      const data = await resp.json();
        const payload = {};
            for (let i = 0; i < demands.length; i++) {
                const demand = demands[i];
                payload[demand] = data[demand];
            }
                if (sendDataObjInResponse == true){
                    return {payload , message: null,data};
                }else {
                    return {payload , message: null};
                }
///////////////////////                
  }else {
///////////////////////                
    const data = await resp.json();
     const errorStatusText = resp.statusText;
  console.log('Error message:', errorStatusText);
    //-- no need to bundle body here
     if (sendDataObjInResponse == true){
        return {payload : null,message: errorMessage,data};
      }else {
      return {payload : null ,message: errorMessage};
      }
  }
    }catch(e){
      if (debugMode == true){
      console.log("Process Response Error: " + e.message);
      throw e;
      }else {
      return {payload : null ,message: 'ProcessResponseError'};
      }
    }

}