
import { writable } from 'svelte/store';

export const quizStore = writable({});
export const membersStore = writable([]);
export const errorsArrayStore = writable([]);
export const pageState = writable('loading');

//--show variables for the toolbar
export const showErrorsStore = writable(false);
export const showTestStore = writable(false);
export const showCloneStore = writable(false);
export const showQuizDelStore = writable(false);

