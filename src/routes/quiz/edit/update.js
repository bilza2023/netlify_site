
export default async function update(quiz){

      const resp = await fetch('http://localhost/quiz/update',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {quiz} )
    });
      const {updatedQuiz,  status} = await resp.json();
        if (status == "ok") { 
            // console.log(newQuiz ,newQuizId, status);       
            return {updatedQuiz , status}
        }else {
            return {status:"failed to update"}
        }

}//--save end


