<script>
import { templatesStore,testsStore,runsStore,studentsStore ,classStore,appStateStore} 
from '../mainStore.js';
import { toast } from '@zerodevx/svelte-toast';

import loadApp from "../../lib/common/loadApp.js";

$: templates = $templatesStore; 
$: tests = $testsStore; 
$: runs = $runsStore; 
$: students = $studentsStore; 
$: classObj = $classStore; 
$: appState = $appStateStore; 


import { onMount } from 'svelte';
onMount(async ()=>{
    try {
    // debugger;
    // toast.push('initial data load..');
    await loadApp();
        // console.log("templates",templates );
        // console.log("tests",tests );
        // console.log("runs",runs );
        // console.log("students",students );
        // console.log("classes",classObj );
        // console.log("appState",appState );
        if (appState.initialDataLoad == true){
        toast.push('app data loaded');
        }
    
    } catch(err){
        toast.push('Failed to load data');
    
    } 
});


</script>

<div class="bg-gray-800 w-full h-screen text-white">

<h1>Edit Template</h1>




</div>