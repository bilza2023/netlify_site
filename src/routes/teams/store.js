import { writable } from 'svelte/store';

export const storeMembers = writable([]);
export const storeDirty = writable(false);