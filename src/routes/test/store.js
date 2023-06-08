
import { writable } from 'svelte/store';

export const quizStore = writable({});
export const membersStore = writable([]);
export const errorsArrayStore = writable([]);
export const showErrorsStore = writable(false);
export const pageState = writable('loading');

