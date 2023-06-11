<script>
async function save(){
//////////////////////////////////////
quizStore.update(currentQuiz => ({ ...currentQuiz, published: true }));

const resp = await ajaxPost(`${BASE_URL}/survey/save` ,{test : quizStore} );

  if (resp.ok) {
      toast.push( "New Test Running" );
  }else {
      const data = await resp.json();

      toast.push( "Failed to Run Test" );
  }



}


</script>

<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
    on:click={save}
    >
      <span class="text-2xl">💾</span>
      <span class="text-sm font-medium text-white">Save</span>
    </button>
  </div>