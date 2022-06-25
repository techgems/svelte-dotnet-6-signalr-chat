import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export type DisplayMessage = {
    isLocalUser: boolean;
    message: string;
}

export const displayedMessages: Writable<DisplayMessage[]> = writable([]);