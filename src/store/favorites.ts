
import { writable, derived } from 'svelte/store';
import idb from './idb';
import { WordEntry, entries, language } from './dictionary';



// Code to use IndexedDB local storage system. call this at every state change, it
// returns the state so use it like this update(state => idbUpdate({ ..state, prop }))
const IDB_SAVED_BY_ID = 'FAVORITES-saved-by-id';
const savedByIdInit: string[] = [];

export const savedById = writable(savedByIdInit);


export const toggleFavorite = (_id: string = '') => {
  savedById.update(state => {
    if (state.includes(_id)) {
      return state.filter(e => e !== _id)
    }
    state.push(_id);
    idb.set(IDB_SAVED_BY_ID, state);
    return state;
  });
}

export const savedWords = derived(
  [entries, savedById], 
  ([$entries, $savedById]): WordEntry[] => {
    const list = $savedById.map(id => {
      let match = $entries.primary.find(e => e._id === id);
      return match || $entries.secondary.find(e => e._id === id);
    }).filter(e => e !== undefined);
    return list as WordEntry[]; 
  }
);

export const wordOfTheDay = derived(
  [entries, language], 
  ([$entries, $language]): WordEntry => {
    const date = new Date(),
      month	= date.getMonth() * 170,
      year = date.getFullYear() - 1950,
      day = date.getDate(),
      index = month + day + year;
    return $entries[$language.selected][index];
  }
);


// updating the state from IndexedBD local storage
idb.get(IDB_SAVED_BY_ID).then((data: any) => {
  data && savedById.set(data as string[])
});