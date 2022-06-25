import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const isConnected: Writable<boolean> = writable(false);