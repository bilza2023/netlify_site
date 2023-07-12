<script>
import { toast } from '@zerodevx/svelte-toast';
import Agent from '../../../lib/communicator/Agent';
import LocalStorage from '../../../lib/communicator/localStorage';

export let test;

async function save( ){

  const item = {...test};

  item.publishObj.runStartTime = new Date();
  item.publishObj.publishDate = new Date(item.publishObj.publishDate);
  item.publishObj.publishDate.setHours(item.publishObj.hour);
  item.publishObj.publishDate.setMinutes(item.publishObj.min);

  //================
  // const resp = await ajaxPost(`${BASE_URL}/test/update` ,{item} );
  const resp = await Agent.update('test',{item});

    if (resp.ok) {
        const data = await resp.json();
        //The store is already updated just update localstorage
          LocalStorage.updateTests();
        toast.push( "Test saved" );
    }else {
        const data = await resp.json();

        toast.push( "Failed to Save Test" );
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