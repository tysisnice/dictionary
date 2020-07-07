
import { writable } from 'svelte/store';

export class AppState {
  page: string = '/';
  offline: boolean = false;
  drawerOpened: boolean = false;
  snackbarOpened: boolean = false;
  scrollingDown: boolean = false;
}

const { subscribe, update, set } = writable(new AppState);
let snackbarTimer: any;

export const app = {
  subscribe, update, set,

  navigate(path: string) {
    const page = path === '/' ? 'welcome' : path.slice(1);
    update(state => ({ ...state, page }) );
  },

  showSnackbar() {
    window.clearTimeout(snackbarTimer)
    update(state => ({ ...state, snackbarOpened: true }) );
    snackbarTimer = setTimeout(() => {
      update(state => ({ ...state, snackbarOpened: false }))
    }, 3000);
  },

  updateScrollingStatus(scrollingDown: boolean) {
    update(state => ({ ...state, scrollingDown }));
  },

  updateOffline(offline: boolean) {
    update(state => {
      if (offline !== state.offline) {
        this.showSnackbar();
      }
      return { ...state, offline };
    });
  }
}

