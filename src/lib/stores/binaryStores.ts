import { writable } from "svelte/store";

export const binaryMatrix = writable<{ x: number; y: number; char: string; speed: number }[]>([]);
export const showTerminal = writable(true); // Controls terminal visibility
export const fadeOut = writable(false);
export const isTyping = writable(true);
export const command = writable("");