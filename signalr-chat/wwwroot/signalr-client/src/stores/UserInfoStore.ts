import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export type UserInfo = {
    name: string;
    colorLabel: string;
}

export const userInfo: Writable<UserInfo> = writable(null);