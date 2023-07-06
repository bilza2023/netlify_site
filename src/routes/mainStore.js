 
import { writable } from 'svelte/store';

//---The The Main Products
export const templatesStore = writable([]);
export const testsStore = writable([]);
export const runsStore = writable([]);
//---Members
export const studentsStore = writable([]);
export const classStore = writable([]);
//--App State
export const appStateStore = writable({
    initialDataLoad : false,
    isLogin : false
});


