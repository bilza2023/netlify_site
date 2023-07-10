import { templatesStore,testsStore,runsStore,studentsStore ,classStore,appLoadedStore} from '../../routes/appStore.js';


import Agent from './Agent.js';
///////////////////////////////////////////////
///////////////////////////////////////////////

export default async function loadApp(){
    
    try {
    // debugger;
    const temapltesStored = JSON.parse( localStorage.getItem('templates'));
      if( temapltesStored == null ){
        const respTemplates = await Agent.read('template',{});
        const templs = await respTemplates.json();
            await templatesStore.set(templs.items);
            await localStorage.setItem('templates', JSON.stringify(templs.items));
      }else {
            await templatesStore.set(temapltesStored);
      }

            await appLoadedStore.set(true);
     
    } catch(err){
      //   throw err;
    
    }

}