import check from "./check.js";
import FireOnce from "./fireOnce.js";


//...
const fireOnce  = new FireOnce();

export default async function save(){
  const r = check(quiz);
    if (r.length > 0){
    errors_Array = r;
    showErrors = true;
    }else {
      const resp = await fetch('http://localhost/save_quiz',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({quiz}  )
    });
      const data = await resp.json();
      fireOnce.fire(); // This can not be fired twice.
      console.log("success",data);
    }
}