
import { writable } from 'svelte/store';

export const errorsArrayStore = writable([]);
export const showErrorsStore = writable(false);
export const showRunStore = writable(false);
export const pageState = writable('loading');
export const showQuizDel = writable(false);

