



//...
export default async function save(quiz){

      const resp = await fetch('http://localhost/quiz/save',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {quiz} )
    });
      const {updatedQuiz, status} = await resp.json();
        if (status == "ok") { 
            // console.log(newQuiz ,newQuizId, status);       
            return {updatedQuiz : updatedQuiz, status}
        }else {
            return {status:"failed"}
        }

}//--save end


