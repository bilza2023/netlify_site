
import { writable } from 'svelte/store';

export const quizStore = writable({});

//membersStore is quiz members ; the name is confusing
export const membersStore = writable([]);

//loading , loaded/showIntro , notfound , showQuiz , outro
export const pageStateStore = writable('loading');
 
export const emailStore = writable('');
export const passwordStore = writable('');