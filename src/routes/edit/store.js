import { writable } from 'svelte/store';

//---The The Main Products
export const showTestStore = writable(false);
export const showCloneStore = writable(false);
export const showQuizDelStore = writable(false);
export const showErrorsStore = writable(false);
export const errorsArrayStore = writable([]);
