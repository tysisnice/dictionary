
import { get, set, Store } from 'idb-keyval';

let idb: any | {
  get<Type>(key: IDBValidKey, store?: Store): Promise<Type>;
  set(key: IDBValidKey, value: any, store?: Store): Promise<void>;
};

if (typeof window === 'undefined' || !('indexedDB' in window)) {
  idb = {
    set(s = '', state: any = '') {
      return s + state;
    },
    // @ts-ignore
    async get(s = '') {
      await setTimeout(() => {}, 10);
      return {};
    }
  };
} else {
  idb = { get, set };
}

export default idb;