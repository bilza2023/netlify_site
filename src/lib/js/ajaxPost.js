import { error } from "@sveltejs/kit";



export default async function ajaxPost(url, payload){
try{
const resp = await fetch( url ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( payload )
    });

        if (resp.ok){
          const data = await resp.json();
          return data;      
        }else {
          return null; 
        }
  }catch (error) {
      return null;
  }
}