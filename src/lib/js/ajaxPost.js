


export default async function ajaxPost(url, payload,successCallback,errorCallback){

const resp = await fetch( url ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( payload )
    });

    if (resp.ok){
    
      const data = await resp.json();
      successCallback(data);      
    }else {
       errorCallback(); 
    }
}