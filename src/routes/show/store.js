
import { writable } from 'svelte/store';

export const quizStore = writable({});
export const membersStore = writable([]);

export const emailStore = writable('');
export const passwordStore = writable('');