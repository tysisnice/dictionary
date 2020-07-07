
// TODO: Change this file and the dictionary data for each new project

import { WordEntry, IEntries, IAlphabet } from "./dictionary";
import { ILangOptions } from "./dictionary";

let fetch2: any; // ! trying to make a workaround for fetch on server
if (typeof window === 'undefined') {
  fetch2 = require && require('node-fetch');
} else {
  fetch2 = window.fetch;
}
// TODO: change data files and the path to their dir. choose what to do with the data
const PATH_TO_DATA = 'assets/dictionary-data/'; // todo change path to the data
console.log(PATH_TO_DATA)
let fetchDictionary = (callback: (args: any) => any ) => {
  fetch2(PATH_TO_DATA + 'primary.txt')
  .then((firstData: any) => {
    return firstData.text().then( (firstText: any) => {
      fetch2(PATH_TO_DATA + 'secondary.txt')
      .then((secondData: any) => {
        return secondData.text().then((secondText: any) => {
          // todo change what to do with the data V
          const processedData = processData(firstText, secondText);
          callback(processedData)
        });
      });
    });
  });
};

// ! workaround for now so fetch doesnt get called on the server and cause errors
if (typeof window === 'undefined') { 
  fetchDictionary = (callback) => callback({});
}

export default fetchDictionary;

// TODO:  Change this data processing function and its custom interface
// todo:  and extra data for each new project
// * custom interfaces for the returned data to use.
interface IWordAndDefiners { // TODO: change this
  words: string[][];
  definers: Array<(string[] | (string & any[]))>;
}
export interface ICustomData {
  wordLists?: {
    first: IWordAndDefiners,
    second: IWordAndDefiners,
  };
}

export interface IFetchedDictionaryData extends ICustomData {
  language: ILangOptions;
  entries: IEntries;
  alphabet: IAlphabet;
  stocked: boolean;
}

export const customInitDictionaryData = { // TODO: change this
  wordLists: {
    first: { words: [], definers: [] },
    second: { words: [], definers: [] },
  },
};

// * the actual function
function processData(first: string, second: string): IFetchedDictionaryData {
  function wordsAndDefiners(s: string) { // TODO: change this whole function for new data
    const str = s
      .split('=').join(' = ')
      .split('\n');
    const words: string[][] = [];

    const definers = str.map((item: string) => {
      const part = item.split(';');
      if (part[1]) {
        const word: string[] = [];
        const definer: string[][] = [];
        const separated: string[] = [];
        for (let i = 0; i < part.length; i++) {
          if ((part[i + 1] && part[i].split('(')[1])
            && part[i].split('(').reverse()[0].split(')')[1] === undefined ) {
            part[i + 1] = part[i] + '\n' + part[i + 1];
          } else {
            separated.push(part[i]);
          }
        }
        const cla = separated.map((x: string) => {
          // console.log(x)
          const y: string[] = x.split('(');
          word.push( (y.shift() || '').trim());
          return y.map((x2, index) => {
            return (x2 && x2.split(')').join( (index === y.length - 1) ? '' : '\n'));
          }).join('').trim();
        });
        definer.push(
          Array.isArray(cla) ? cla : [cla],
        );
        words.push(Array.isArray(word) ? word : [word]);
        return cla;
      }

      const ite: string[] = item.split('(');
      const w: string = (ite.shift() || '').trim()
        .replace(')', '')
        .replace('(', '')
        .replace(' = ', ', ');

      words.push(Array.isArray(w) ? w : [w]);
      const d = ite.map((x, index) => {
        return (x && x.split(')').join( (index === ite.length - 1) ? '' : '\n'));
      }).join('').trim();
      return Array.isArray(d) ? d : [d];
    });
    return { words, definers };
  }

  const firstLang: IWordAndDefiners = wordsAndDefiners(first);
  const secondLang: IWordAndDefiners = wordsAndDefiners(second);

  let primary: WordEntry[] = [];
  let secondary: WordEntry[] = [];

  function addEntries(mainLang: any, otherLang: any, langId: string | number) {
    const list: WordEntry[] = [];
    mainLang.words.forEach((val1: any[], i1: number) => {
      val1.forEach((word: string, i2: number) => {
        const clarifyer = mainLang.definers[i1][i2];
        const _id = langId + '-' + i1 + '-' + i2;
        const language = langId === 1 ? 'primary' : 'secondary';
        const entry = new WordEntry({ word, clarifyer, _id, language });
        otherLang.words[i1].forEach((val3: string) => {
          entry.addOtherWord(
            new WordEntry( { word: val3, clarifyer: otherLang.definers[i1][i2] }),
          );
        });
        list.push(entry);
      });

    });
    return list.sort((a: WordEntry, b: WordEntry) => {
      if (a.word < b.word) { return -1; }
      if (a.word > b.word) { return 1; }
      return 0;
    });
  }
  secondary = addEntries(secondLang, firstLang, 1);
  primary = addEntries(firstLang, secondLang, 2);

  return {
    entries: { primary, secondary },
    language: { primary: 'english', secondary: 'mien', selected: 'primary' },
    alphabet: new IAlphabet(),
    stocked: true,
  };
}
