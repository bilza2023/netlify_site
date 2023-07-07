import { templatesStore,testsStore,runsStore,studentsStore ,classStore,appLoadedStore} from '../../routes/mainStore.js';

import Agent from '../../lib/common/Agent.js';
///////////////////////////////////////////////
///////////////////////////////////////////////
export default async function loadApp(){
       try {

     const respTemplates = await Agent.read('template',{});
     const templs = await respTemplates.json();
        await templatesStore.set(templs.items);
     
     const respTests = await Agent.read('test',{});
     const tsts = await respTests.json();
        await testsStore.set(tsts.items);

     const respRun = await Agent.read('run',{});
     const rns = await respRun.json();
        await runsStore.set(rns.items);
     
     const respStudents = await Agent.read('student',{});
     const stdnts = await respStudents.json();
        await studentsStore.set(stdnts.items);
     
     const respClass = await Agent.read('class',{});
     const cls = await respClass.json();
        await classStore.set(cls.items);
     
        //--finally   
      await appLoadedStore.set(true);
     
    } catch(err){
        throw err;
    
    }







}