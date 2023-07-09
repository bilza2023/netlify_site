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
      await localStorage.setItem('template', JSON.stringify(templs.items));
      }else {
         await templatesStore.set(temapltesStored);
      }

////////////////
//  const testsStored = JSON.parse( localStorage.getItem('tests'));
//       if( testsStored == null ){
//      const respTests = await Agent.read('test',{});
//      const tsts = await respTests.json();
//         await testsStore.set(tsts.items);
//         await localStorage.setItem('tests', JSON.stringify(tsts.items));

//      }else {
//          await testsStore.set(testsStored);
//       }
///////////////////////////////
   //   const runsStored = JSON.parse( localStorage.getItem('runs'));
   //    if( runsStored.length == null ){
   //   const respRun = await Agent.read('run',{});
   //   const rns = await respRun.json();
   //      await runsStore.set(rns.items);
   //      await localStorage.setItem('runs', JSON.stringify(rns.items));
   //   }else {
   //       await runsStore.set(runsStored);
   //    }

///////////////////////////////////////////////
//  const studentsStored = JSON.parse( localStorage.getItem('students'));

//       if( studentsStored.length == null ){     
//      const respStudents = await Agent.read('student',{});
//      const stdnts = await respStudents.json();
//         await studentsStore.set(stdnts.items);
//         await localStorage.setItem('students', JSON.stringify(stdnts.items));

//      }else {
//          await studentsStore.set(studentsStored);
//       }

/////////////////////////////////////////////////////
//  const classStored = JSON.parse(localStorage.getItem('classes'));

//       if( classStored.length == null ){     
//      const respClass = await Agent.read('class',{});
//      const cls = await respClass.json();
//         await classStore.set(cls.items);
//         await localStorage.setItem('classes', JSON.stringify(cls.items));
//      }else {
//          await classStore.set(classStored);
//       }
        //--finally   
      await appLoadedStore.set(true);
     
    } catch(err){
        throw err;
    
    }







}