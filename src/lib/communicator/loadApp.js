import { templatesStore,testsStore,runsStore,studentsStore ,classStore,appLoadedStore} from '../../routes/appStore.js';


import Agent from './Agent.js';
import LocalStorage from './localStorage.js';
///////////////////////////////////////////////
///////////////////////////////////////////////

export default async function loadApp(){
      try {
    
      await uploadStore( 'template' , 'templates', templatesStore, 
      LocalStorage.updateTemplates  );

   await appLoadedStore.set(true);
// debugger;

     
    } catch(err){
      //   throw err;
    
    }

}      

// async function loadTemplates(){
// const templatesStored = JSON.parse( localStorage.getItem('templates'));
//       if( templatesStored == null ){
//      const respTemplates = await Agent.read('template',{});
//      const templs = await respTemplates.json();
//               await templatesStore.set(templs.items);
//       LocalStorage.updateTemplates();
//       }else {
//          await templatesStore.set(templatesStored);
//       } 
// }
/////////////////////////////////////////////////////////

async function uploadStore( itemName ,itemSlug, storeVariable , updateFn ){
const stored = JSON.parse( localStorage.getItem( itemSlug ));
      if( stored == null || stored.length == 0 ){
     const resp = await Agent.read( itemName ,{});
     const data = await resp.json();
              await storeVariable.set(data.items);
      updateFn();
      }else {
         await storeVariable.set(stored);
      } 
}
/////////////////////////////////////////////////////////