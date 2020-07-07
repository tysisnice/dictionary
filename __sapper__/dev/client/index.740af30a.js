import { s as safe_not_equal, n as noop, r as run_all, i as is_function } from './index.42697b0b.js';

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe,
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 * @param {Stores} stores input stores
 * @param {function(Stores=, function(*)=):*}fn function callback that aggregates the values
 * @param {*=}initial_value when used asynchronously
 */
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = noop;
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = is_function(result) ? result : noop;
            }
        };
        const unsubscribers = stores_array.map((store, i) => store.subscribe((value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            run_all(unsubscribers);
            cleanup();
        };
    });
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var AppState = /** @class */ (function () {
    function AppState() {
        this.page = '/';
        this.offline = false;
        this.drawerOpened = false;
        this.snackbarOpened = false;
        this.scrollingDown = false;
    }
    return AppState;
}());
var _a = writable(new AppState), subscribe = _a.subscribe, update = _a.update, set = _a.set;
var snackbarTimer;
var app = {
    subscribe: subscribe, update: update, set: set,
    navigate: function (path) {
        var page = path === '/' ? 'welcome' : path.slice(1);
        update(function (state) { return (__assign({}, state, { page: page })); });
    },
    showSnackbar: function () {
        window.clearTimeout(snackbarTimer);
        update(function (state) { return (__assign({}, state, { snackbarOpened: true })); });
        snackbarTimer = setTimeout(function () {
            update(function (state) { return (__assign({}, state, { snackbarOpened: false })); });
        }, 3000);
    },
    updateScrollingStatus: function (scrollingDown) {
        update(function (state) { return (__assign({}, state, { scrollingDown: scrollingDown })); });
    },
    updateOffline: function (offline) {
        var _this = this;
        update(function (state) {
            if (offline !== state.offline) {
                _this.showSnackbar();
            }
            return __assign({}, state, { offline: offline });
        });
    }
};

class Store {
    constructor(dbName = 'keyval-store', storeName = 'keyval') {
        this.storeName = storeName;
        this._dbp = new Promise((resolve, reject) => {
            const openreq = indexedDB.open(dbName, 1);
            openreq.onerror = () => reject(openreq.error);
            openreq.onsuccess = () => resolve(openreq.result);
            // First time setup: create an empty object store
            openreq.onupgradeneeded = () => {
                openreq.result.createObjectStore(storeName);
            };
        });
    }
    _withIDBStore(type, callback) {
        return this._dbp.then(db => new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, type);
            transaction.oncomplete = () => resolve();
            transaction.onabort = transaction.onerror = () => reject(transaction.error);
            callback(transaction.objectStore(this.storeName));
        }));
    }
}
let store;
function getDefaultStore() {
    if (!store)
        store = new Store();
    return store;
}
function get(key, store = getDefaultStore()) {
    let req;
    return store._withIDBStore('readonly', store => {
        req = store.get(key);
    }).then(() => req.result);
}
function set$1(key, value, store = getDefaultStore()) {
    return store._withIDBStore('readwrite', store => {
        store.put(value, key);
    });
}

var idb;
if (typeof window === 'undefined' || !('indexedDB' in window)) {
    idb = {
        set: function (s, state) {
            if (s === void 0) { s = ''; }
            if (state === void 0) { state = ''; }
            return s + state;
        },
        // @ts-ignore
        get: function (s) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, setTimeout(function () { }, 10)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, {}];
                    }
                });
            });
        }
    };
}
else {
    idb = { get: get, set: set$1 };
}
var idb$1 = idb;

var WordEntry = /** @class */ (function () {
    function WordEntry(obj) {
        if (obj === void 0) { obj = {}; }
        this.word = "";
        this.clarifyer = "";
        this.language = "no lang";
        this.otherWords = [];
        this.lastEdited = "original";
        this.word = obj.word || '';
        this.clarifyer = obj.clarifyer || '';
        this.language = obj.language || 'no lang';
        this._id = obj._id || '_id-' + Math.random();
    }
    WordEntry.prototype.addOtherWord = function (word) {
        this.otherWords.push(word);
    };
    return WordEntry;
}());
var IEntries = /** @class */ (function () {
    function IEntries() {
        this.primary = [];
        this.secondary = [];
    }
    return IEntries;
}());
var ILangOptions = /** @class */ (function () {
    function ILangOptions() {
        this.primary = 'english';
        this.secondary = 'mien';
        this.selected = 'primary';
    }
    return ILangOptions;
}());
var IAlphabet = /** @class */ (function () {
    function IAlphabet() {
        this.primary = 'abcdefghijklmnopqrstuvwxyz';
        this.secondary = 'abcdefghijklmnopqrstuvwxyz';
    }
    return IAlphabet;
}());
var DictionaryState = /** @class */ (function () {
    function DictionaryState() {
        this.entries = new IEntries();
        this.language = new ILangOptions();
        this.alphabet = new IAlphabet();
        this.stocked = false;
    }
    return DictionaryState;
}());
var entries = writable(new IEntries());
var language = writable(new ILangOptions());
var alphabet = writable(new IAlphabet());
var stocked = writable(false);
// for use with local idb storage
var IDB_LANGUAGE = 'DICTIONARY-language';
function changeLanguage(lang) {
    if (lang === void 0) { lang = null; }
    language.update(function (state) {
        if (lang === 'primary' || lang === 'secondary') {
            state.selected = lang;
        }
        else {
            state.selected = state.selected === 'secondary' ? 'primary' : 'secondary';
        }
        idb$1.set(IDB_LANGUAGE, state);
        return state;
    });
}
function updateDictionaryData(newState) {
    if (newState === void 0) { newState = new DictionaryState(); }
    entries.set(newState.entries);
    language.set(newState.language);
    alphabet.set(newState.alphabet);
    stocked.set(true);
}
idb$1.get(IDB_LANGUAGE)
    .then(function (data) { return data && language.set(data); });

var dictionary = /*#__PURE__*/Object.freeze({
    WordEntry: WordEntry,
    IEntries: IEntries,
    ILangOptions: ILangOptions,
    IAlphabet: IAlphabet,
    DictionaryState: DictionaryState,
    entries: entries,
    language: language,
    alphabet: alphabet,
    stocked: stocked,
    changeLanguage: changeLanguage,
    updateDictionaryData: updateDictionaryData
});

var selectedLetter = writable('');
var searchQuery = writable('');
function updateSelectedLetter(letter) {
    if (letter === void 0) { letter = ''; }
    selectedLetter.set(letter);
}
function updateSearchQuery(query) {
    searchQuery.set(query);
}
var SearchResults = /** @class */ (function () {
    function SearchResults(status) {
        this.exactMatch = [];
        this.goodMatch = [];
        this.partMatch = [];
        this.status = status;
    }
    SearchResults.prototype.getAllMatches = function () {
        return this.exactMatch.concat(this.goodMatch, this.partMatch);
    };
    return SearchResults;
}());
var resultsByLetter = derived([language, entries, selectedLetter], function (_a) {
    var $language = _a[0], $entries = _a[1], $selectedLetter = _a[2];
    if ($selectedLetter === '') {
        return [];
    }
    return $entries[$language.selected]
        .filter(function (_a) {
        var word = _a.word;
        return word[0] === $selectedLetter;
    })
        .map(function (entry) { return ({ entry: entry, open: false }); });
});
var resultsBySearch = derived([entries, language, stocked, searchQuery], function (_a) {
    var $entries = _a[0], $language = _a[1], $stocked = _a[2], $searchQuery = _a[3];
    var results;
    if ($searchQuery && !$stocked) {
        results = new SearchResults('loading');
    }
    else {
        results = getSearchResults($searchQuery, $entries[$language.selected]);
    }
    return results;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!
// ! Main search algorithm.!
// !!!!!!!!!!!!!!!!!!!!!!!!!
var getSearchResults = function (originalQuery, entries) {
    // Gets search results from the dictionary based on the given query.
    // Maps through every entry in the dictonary, determines whether an entry is
    // an exact match, good match, or part match and adds them to returned object.
    // Returns [] if no query, and returns ['loader'] if query but no data
    var query = originalQuery.toLowerCase().trim();
    var results = new SearchResults('results');
    if (!query) {
        results.status = 'missing query';
        return results;
    }
    var exactMatch = results.exactMatch, goodMatch = results.goodMatch, partMatch = results.partMatch;
    // Mapping through all entries and checking entry.word
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        // Add to results.exactMatch if query === entry.word
        if (entry.word.toLowerCase().trim() === query) {
            exactMatch.push({ entry: entry, open: true });
            continue;
        }
        // If entry.word has multiple phrases, split them and check if any of them
        // equal query, if so add to results.goodMatch
        var phrases = entry.word.split(',');
        for (var _a = 0, phrases_1 = phrases; _a < phrases_1.length; _a++) {
            var phrase = phrases_1[_a];
            if (phrase.toLowerCase().trim() === query) {
                goodMatch.push({ entry: entry, open: true });
                break;
            }
            // Check if any individual words inside each phrase equal query,
            // and add them to results.partMatch if they do
            var words = phrase.split(' ');
            for (var _b = 0, words_1 = words; _b < words_1.length; _b++) {
                var word = words_1[_b];
                if (word.toLowerCase().trim() === query) {
                    partMatch.push({ entry: entry, open: false });
                    break;
                }
            }
        }
    }
    var totalLength = exactMatch.length + goodMatch.length + partMatch.length;
    if (totalLength === 0) {
        results.status = 'no matches';
    }
    return results;
};

var lookup = /*#__PURE__*/Object.freeze({
    selectedLetter: selectedLetter,
    searchQuery: searchQuery,
    updateSelectedLetter: updateSelectedLetter,
    updateSearchQuery: updateSearchQuery,
    SearchResults: SearchResults,
    resultsByLetter: resultsByLetter,
    resultsBySearch: resultsBySearch,
    getSearchResults: getSearchResults
});

// Code to use IndexedDB local storage system. call this at every state change, it
// returns the state so use it like this update(state => idbUpdate({ ..state, prop }))
var IDB_SAVED_BY_ID = 'FAVORITES-saved-by-id';
var savedByIdInit = [];
var savedById = writable(savedByIdInit);
var toggleFavorite = function (_id) {
    if (_id === void 0) { _id = ''; }
    savedById.update(function (state) {
        if (state.includes(_id)) {
            state = state.filter(function (e) { return e !== _id; });
        }
        else {
            state.push(_id);
        }
        idb$1.set(IDB_SAVED_BY_ID, state);
        return state;
    });
};
var savedWords = derived([entries, savedById], function (_a) {
    var $entries = _a[0], $savedById = _a[1];
    var list = $savedById.map(function (id) {
        var match = $entries.primary.find(function (e) { return e._id === id; });
        return match || $entries.secondary.find(function (e) { return e._id === id; });
    }).filter(function (e) { return e !== undefined; });
    return list;
});
var wordOfTheDay = derived([entries, language], function (_a) {
    var $entries = _a[0], $language = _a[1];
    var date = new Date(), month = date.getMonth() * 170, year = date.getFullYear() - 1950, day = date.getDate(), index = month + day + year;
    return $entries[$language.selected][index];
});
// updating the state from IndexedDB local storage
idb$1.get(IDB_SAVED_BY_ID).then(function (data) {
    data && savedById.set(data);
});

var favorites = /*#__PURE__*/Object.freeze({
    savedById: savedById,
    toggleFavorite: toggleFavorite,
    savedWords: savedWords,
    wordOfTheDay: wordOfTheDay
});

// TODO: Change this file and the dictionary data for each new project
var fetch2; // ! trying to make a workaround for fetch on server
if (typeof window === 'undefined') {
    fetch2 = require && require('node-fetch');
}
else {
    fetch2 = window.fetch;
}
// TODO: change data files and the path to their dir. choose what to do with the data
var PATH_TO_DATA = 'assets/dictionary-data/'; // todo change path to the data
console.log(PATH_TO_DATA);
var fetchDictionary = function (callback) {
    fetch2(PATH_TO_DATA + 'primary.txt')
        .then(function (firstData) {
        return firstData.text().then(function (firstText) {
            fetch2(PATH_TO_DATA + 'secondary.txt')
                .then(function (secondData) {
                return secondData.text().then(function (secondText) {
                    // todo change what to do with the data V
                    var processedData = processData(firstText, secondText);
                    callback(processedData);
                });
            });
        });
    });
};
// ! workaround for now so fetch doesnt get called on the server and cause errors
if (typeof window === 'undefined') {
    fetchDictionary = function (callback) { return callback({}); };
}
var fetchData = fetchDictionary;
// * the actual function
function processData(first, second) {
    function wordsAndDefiners(s) {
        var str = s
            .split('=').join(' = ')
            .split('\n');
        var words = [];
        var definers = str.map(function (item) {
            var part = item.split(';');
            if (part[1]) {
                var word_1 = [];
                var definer = [];
                var separated = [];
                for (var i = 0; i < part.length; i++) {
                    if ((part[i + 1] && part[i].split('(')[1])
                        && part[i].split('(').reverse()[0].split(')')[1] === undefined) {
                        part[i + 1] = part[i] + '\n' + part[i + 1];
                    }
                    else {
                        separated.push(part[i]);
                    }
                }
                var cla = separated.map(function (x) {
                    // console.log(x)
                    var y = x.split('(');
                    word_1.push((y.shift() || '').trim());
                    return y.map(function (x2, index) {
                        return (x2 && x2.split(')').join((index === y.length - 1) ? '' : '\n'));
                    }).join('').trim();
                });
                definer.push(Array.isArray(cla) ? cla : [cla]);
                words.push(Array.isArray(word_1) ? word_1 : [word_1]);
                return cla;
            }
            var ite = item.split('(');
            var w = (ite.shift() || '').trim()
                .replace(')', '')
                .replace('(', '')
                .replace(' = ', ', ');
            words.push(Array.isArray(w) ? w : [w]);
            var d = ite.map(function (x, index) {
                return (x && x.split(')').join((index === ite.length - 1) ? '' : '\n'));
            }).join('').trim();
            return Array.isArray(d) ? d : [d];
        });
        return { words: words, definers: definers };
    }
    var firstLang = wordsAndDefiners(first);
    var secondLang = wordsAndDefiners(second);
    var primary = [];
    var secondary = [];
    function addEntries(mainLang, otherLang, langId) {
        var list = [];
        mainLang.words.forEach(function (val1, i1) {
            val1.forEach(function (word, i2) {
                var clarifyer = mainLang.definers[i1][i2];
                var _id = langId + '-' + i1 + '-' + i2;
                var language = langId === 1 ? 'primary' : 'secondary';
                var entry = new WordEntry({ word: word, clarifyer: clarifyer, _id: _id, language: language });
                otherLang.words[i1].forEach(function (val3) {
                    entry.addOtherWord(new WordEntry({ word: val3, clarifyer: otherLang.definers[i1][i2] }));
                });
                list.push(entry);
            });
        });
        return list.sort(function (a, b) {
            if (a.word < b.word) {
                return -1;
            }
            if (a.word > b.word) {
                return 1;
            }
            return 0;
        });
    }
    secondary = addEntries(secondLang, firstLang, 1);
    primary = addEntries(firstLang, secondLang, 2);
    return {
        entries: { primary: primary, secondary: secondary },
        language: { primary: 'english', secondary: 'mien', selected: 'primary' },
        alphabet: new IAlphabet(),
        stocked: true,
    };
}

fetchData(updateDictionaryData);

export { app as a, dictionary as d, favorites as f, lookup as l, writable as w };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzQwYWYzMGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvc3RvcmUvaW5kZXgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lkYi1rZXl2YWwvZGlzdC9pZGIta2V5dmFsLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzYWZlX25vdF9lcXVhbCwgbm9vcCwgcnVuX2FsbCwgaXNfZnVuY3Rpb24gfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuXG5jb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4vKipcbiAqIENyZWF0ZXMgYSBgUmVhZGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXJ9c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICovXG5mdW5jdGlvbiByZWFkYWJsZSh2YWx1ZSwgc3RhcnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IHdyaXRhYmxlKHZhbHVlLCBzdGFydCkuc3Vic2NyaWJlLFxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gW107XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHNbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSB9O1xufVxuLyoqXG4gKiBEZXJpdmVkIHZhbHVlIHN0b3JlIGJ5IHN5bmNocm9uaXppbmcgb25lIG9yIG1vcmUgcmVhZGFibGUgc3RvcmVzIGFuZFxuICogYXBwbHlpbmcgYW4gYWdncmVnYXRpb24gZnVuY3Rpb24gb3ZlciBpdHMgaW5wdXQgdmFsdWVzLlxuICogQHBhcmFtIHtTdG9yZXN9IHN0b3JlcyBpbnB1dCBzdG9yZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oU3RvcmVzPSwgZnVuY3Rpb24oKik9KToqfWZuIGZ1bmN0aW9uIGNhbGxiYWNrIHRoYXQgYWdncmVnYXRlcyB0aGUgdmFsdWVzXG4gKiBAcGFyYW0geyo9fWluaXRpYWxfdmFsdWUgd2hlbiB1c2VkIGFzeW5jaHJvbm91c2x5XG4gKi9cbmZ1bmN0aW9uIGRlcml2ZWQoc3RvcmVzLCBmbiwgaW5pdGlhbF92YWx1ZSkge1xuICAgIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KHN0b3Jlcyk7XG4gICAgY29uc3Qgc3RvcmVzX2FycmF5ID0gc2luZ2xlXG4gICAgICAgID8gW3N0b3Jlc11cbiAgICAgICAgOiBzdG9yZXM7XG4gICAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gICAgcmV0dXJuIHJlYWRhYmxlKGluaXRpYWxfdmFsdWUsIChzZXQpID0+IHtcbiAgICAgICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IHBlbmRpbmcgPSAwO1xuICAgICAgICBsZXQgY2xlYW51cCA9IG5vb3A7XG4gICAgICAgIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKHNpbmdsZSA/IHZhbHVlc1swXSA6IHZhbHVlcywgc2V0KTtcbiAgICAgICAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgICAgICAgICAgc2V0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwID0gaXNfZnVuY3Rpb24ocmVzdWx0KSA/IHJlc3VsdCA6IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBzdG9yZXNfYXJyYXkubWFwKChzdG9yZSwgaSkgPT4gc3RvcmUuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICBwZW5kaW5nICY9IH4oMSA8PCBpKTtcbiAgICAgICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBzeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmcgfD0gKDEgPDwgaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgc3luYygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGRlcml2ZWQsIHJlYWRhYmxlLCB3cml0YWJsZSB9O1xuIiwiY2xhc3MgU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoZGJOYW1lID0gJ2tleXZhbC1zdG9yZScsIHN0b3JlTmFtZSA9ICdrZXl2YWwnKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yZU5hbWUgPSBzdG9yZU5hbWU7XHJcbiAgICAgICAgdGhpcy5fZGJwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcGVucmVxID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCAxKTtcclxuICAgICAgICAgICAgb3BlbnJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG9wZW5yZXEuZXJyb3IpO1xyXG4gICAgICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xyXG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHNldHVwOiBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHN0b3JlXHJcbiAgICAgICAgICAgIG9wZW5yZXEub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3BlbnJlcS5yZXN1bHQuY3JlYXRlT2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF93aXRoSURCU3RvcmUodHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGJwLnRoZW4oZGIgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuc3RvcmVOYW1lLCB0eXBlKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IHRyYW5zYWN0aW9uLm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHJhbnNhY3Rpb24uZXJyb3IpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayh0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0aGlzLnN0b3JlTmFtZSkpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5sZXQgc3RvcmU7XHJcbmZ1bmN0aW9uIGdldERlZmF1bHRTdG9yZSgpIHtcclxuICAgIGlmICghc3RvcmUpXHJcbiAgICAgICAgc3RvcmUgPSBuZXcgU3RvcmUoKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5mdW5jdGlvbiBnZXQoa2V5LCBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKSB7XHJcbiAgICBsZXQgcmVxO1xyXG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWRvbmx5Jywgc3RvcmUgPT4ge1xyXG4gICAgICAgIHJlcSA9IHN0b3JlLmdldChrZXkpO1xyXG4gICAgfSkudGhlbigoKSA9PiByZXEucmVzdWx0KTtcclxufVxyXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSwgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSkge1xyXG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcclxuICAgICAgICBzdG9yZS5wdXQodmFsdWUsIGtleSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBkZWwoa2V5LCBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKSB7XHJcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xyXG4gICAgICAgIHN0b3JlLmRlbGV0ZShrZXkpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXIoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSkge1xyXG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcclxuICAgICAgICBzdG9yZS5jbGVhcigpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24ga2V5cyhzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKSB7XHJcbiAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XHJcbiAgICAgICAgLy8gVGhpcyB3b3VsZCBiZSBzdG9yZS5nZXRBbGxLZXlzKCksIGJ1dCBpdCBpc24ndCBzdXBwb3J0ZWQgYnkgRWRnZSBvciBTYWZhcmkuXHJcbiAgICAgICAgLy8gQW5kIG9wZW5LZXlDdXJzb3IgaXNuJ3Qgc3VwcG9ydGVkIGJ5IFNhZmFyaS5cclxuICAgICAgICAoc3RvcmUub3BlbktleUN1cnNvciB8fCBzdG9yZS5vcGVuQ3Vyc29yKS5jYWxsKHN0b3JlKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yZXN1bHQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGtleXMucHVzaCh0aGlzLnJlc3VsdC5rZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdC5jb250aW51ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KS50aGVuKCgpID0+IGtleXMpO1xyXG59XG5cbmV4cG9ydCB7IFN0b3JlLCBnZXQsIHNldCwgZGVsLCBjbGVhciwga2V5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LFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6RCxXQUFXLENBQUMsVUFBVSxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7WUFDekMsV0FBVyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxHQUFHLE1BQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1RSxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUNyRCxDQUFDLENBQUMsQ0FBQztLQUNQO0NBQ0o7QUFDRCxJQUFJLEtBQUssQ0FBQztBQUNWLFNBQVMsZUFBZSxHQUFHO0lBQ3ZCLElBQUksQ0FBQyxLQUFLO1FBQ04sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDeEIsT0FBTyxLQUFLLENBQUM7Q0FDaEI7QUFDRCxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxHQUFHLGVBQWUsRUFBRSxFQUFFO0lBQ3pDLElBQUksR0FBRyxDQUFDO0lBQ1IsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLElBQUk7UUFDNUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUM3QjtBQUNELFNBQVNBLEtBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxlQUFlLEVBQUUsRUFBRTtJQUNoRCxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSTtRQUM3QyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6QixDQUFDLENBQUM7Q0FDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
