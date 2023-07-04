

export default async function processResp(resp ){
try{
      if (resp.ok){
      const item = await resp.json();
      return item;
      // console.log("created");
      }else {
      throw new Error("failed to create")
      // console.log(data.message || "Error Message not recieved");
      }
    }catch(e){
      throw e;
    }

}