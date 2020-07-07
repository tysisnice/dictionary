
import { app } from './app';
import * as dictionary from './dictionary';
import * as lookup from './lookup';
import * as favorites from './favorites';
import fetchData from './fetchData';


fetchData(dictionary.updateDictionaryData);


export {
  app,
  dictionary,
  lookup,
  favorites
}

// TODO add ability to update from vickys spreadsheet
