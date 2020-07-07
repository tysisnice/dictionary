
import { onMount } from 'svelte';

export function connectStore(store : any, callback: any) {
  onMount(() => store.subscribe(callback));
}

export function connectStores() {
  for (var i = 0; i < arguments.length; i++) {
    connectStore(arguments[i][0], arguments[i][1])
  }
}


