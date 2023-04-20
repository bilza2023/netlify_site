
import { writable } from 'svelte/store';

export const quizStore = writable({});
export const membersStore = writable([]);
export const pageState = writable('loading');

export const emailStore = writable('');
export const passwordStore = writable('');