import { writable, derived } from 'svelte/store';
import { WordEntry, language, entries, stocked } from "./dictionary";




export const selectedLetter = writable('');
export const searchQuery = writable('');

export function updateSelectedLetter(letter: string = '') {
  selectedLetter.set(letter);
};

export function updateSearchQuery(query: string) {
  searchQuery.set(query)
};



export interface IWordEntryCard {
  entry: WordEntry;
  open: boolean;
}

export class SearchResults {
  status: string;
  exactMatch: IWordEntryCard[] = [];
  goodMatch: IWordEntryCard[] = [];
  partMatch: IWordEntryCard[] = [];
  constructor(status: string) {
    this.status = status;
  }
  getAllMatches() {
    return [...this.exactMatch, ...this.goodMatch, ...this.partMatch];
  }
}


export const resultsByLetter = derived(
  [language, entries, selectedLetter], 
  ([$language, $entries, $selectedLetter]): IWordEntryCard[] => {
    if ($selectedLetter === '') { return []; }
    return $entries[$language.selected]
      .filter(({ word }) => word[0] === $selectedLetter )
      .map(entry => ({ entry, open: false }));
  }
);


export const resultsBySearch = derived(
  [entries, language, stocked, searchQuery], 
  ([$entries, $language, $stocked, $searchQuery]) => {
  let results;
  if ($searchQuery && !$stocked) {
    results =  new SearchResults('loading');
  } else {
    results = getSearchResults($searchQuery, $entries[$language.selected]);
  }
  return results;
})


// !!!!!!!!!!!!!!!!!!!!!!!!!
// ! Main search algorithm.!
// !!!!!!!!!!!!!!!!!!!!!!!!!
export const getSearchResults = (originalQuery: string, entries: WordEntry[]): SearchResults => {
  // Gets search results from the dictionary based on the given query.
  // Maps through every entry in the dictonary, determines whether an entry is
  // an exact match, good match, or part match and adds them to returned object.
  // Returns [] if no query, and returns ['loader'] if query but no data
  const query = originalQuery.toLowerCase().trim();
  const results = new SearchResults('results');

  if (!query)  {
    results.status = 'missing query';
    return results;
  }

  const { exactMatch, goodMatch, partMatch } = results;
  // Mapping through all entries and checking entry.word
  for (const entry of entries) {
    // Add to results.exactMatch if query === entry.word
    if (entry.word.toLowerCase().trim() === query) {
      exactMatch.push({ entry, open: true });
      continue;
    }
    // If entry.word has multiple phrases, split them and check if any of them
    // equal query, if so add to results.goodMatch
    const phrases: string[] = entry.word.split(',');
    for (const phrase of phrases) {
      if (phrase.toLowerCase().trim() === query) {
        goodMatch.push({ entry, open: true });
        break;
      }

      // Check if any individual words inside each phrase equal query,
      // and add them to results.partMatch if they do
      const words: string[] = phrase.split(' ');
      for (const word of words) {
        if (word.toLowerCase().trim() === query) {
          partMatch.push({ entry, open: false });
          break;
        }
      }
    }
  }
  const totalLength = exactMatch.length + goodMatch.length + partMatch.length;
  if ( totalLength === 0) {
    results.status = 'no matches';
  }
  return results;
};