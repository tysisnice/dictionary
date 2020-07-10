
import { writable } from 'svelte/store';
import idb from './idb';


// for use with local idb storage
const IDB_LANGUAGE = 'DICTIONARY-language';

export class WordEntry {
  word: string = "";
  clarifyer: string = "";
  language: string = "no lang";
  otherWords: WordEntry[] = [];
  lastEdited: string = "original";
  _id: string;

  addOtherWord(word: WordEntry) {
    this.otherWords.push(word);
  }

  constructor(obj: any = {}) {
    this.word = obj.word || '';
    this.clarifyer = obj.clarifyer || '';
    this.language = obj.language || 'no lang';
    this._id = obj._id || '_id-' + Math.random();
  }
}

export class IEntries {
  primary: WordEntry[] = [];
  secondary: WordEntry[] = [];
  tertiery?: WordEntry[];
}

export class ILangOptions {
  primary: string = 'english';
  secondary: string = 'mien';
  selected: 'primary' | 'secondary' = 'primary';
}

export class IAlphabet {
  primary: string = 'abcdefghijklmnopqrstuvwxyz';
  secondary: string = 'abcdefghijklmnopqrstuvwxyz';
  tertiery?: string;
}

export class DictionaryState {
  entries: IEntries = new IEntries();
  language: ILangOptions = new ILangOptions();
  alphabet: IAlphabet = new IAlphabet();
  stocked?: boolean = false;
}



export const entries = writable(new IEntries());
export const language = writable(new ILangOptions());
export const alphabet = writable(new IAlphabet());
export const stocked = writable(false);

export function changeLanguage(lang: 'primary' | 'secondary' | null = null) {
  language.update(state => {
    if (lang === 'primary' || lang === 'secondary') {
      state.selected = lang;
    } else {
      state.selected = state.selected === 'secondary' ? 'primary' : 'secondary';
    }
    idb.set(IDB_LANGUAGE, state);
    return state;
  })
}

export function updateDictionaryData(newState: DictionaryState = new DictionaryState()) {
  entries.set(newState.entries);
  language.set(newState.language);
  alphabet.set(newState.alphabet);
  stocked.set(true);
}


idb.get(IDB_LANGUAGE)
  .then((data: any) => data && language.set(data as ILangOptions));
