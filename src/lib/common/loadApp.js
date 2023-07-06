import { templatesStore,testsStore,runsStore,studentsStore ,classStore,appStateStore} from 
'../../routes/mainStore.js';
import { toast } from '@zerodevx/svelte-toast';
import Agent from '../../lib/common/Agent.js';

///////////////////////////////////////////////
///////////////////////////////////////////////
export default async function loadApp(){
       try {
    // debugger;
     const respTemplates = await Agent.read('template',{});
     const templs = await respTemplates.json();
        await templatesStore.set(templs);
     
     const respTests = await Agent.read('test',{});
     const tsts = await respTests.json();
        await testsStore.set(tsts);
     
     const respRun = await Agent.read('run',{});
     const rns = await respRun.json();
        await runsStore.set(rns);
     
     const respStudents = await Agent.read('student',{});
     const stdnts = await respStudents.json();
        await studentsStore.set(stdnts);
     
     const respClass = await Agent.read('class',{});
     const cls = await respClass.json();
        await classStore.set(cls);
     
        //--finally
        // appStateStore.update( oldState => {oldState.initialDataLoad = true;} );
       await appStateStore.update(curr => {
            return {...curr, initialDataLoad: true};
        });
    } catch(err){
        throw err;
    
    }







}