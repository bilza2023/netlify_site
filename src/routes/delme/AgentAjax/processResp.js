import { toast } from '@zerodevx/svelte-toast';



export default async function processResp(resp ,demands=[],
sendDataObjInResponse=false){
try{
  const data = await resp.json();
    // debugger;
    if (resp.ok) {
      // const data = await resp.json();
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
  }else {
      return {payload : null ,message: data.message,data};
  }
    }catch(e){
      throw e;
    }

}