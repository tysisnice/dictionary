
<script>
  import {beforeUpdate} from 'svelte';
  import {connectStores} from '../store/utils';
  import { lookup, dictionary } from '../store';
  import WordCard from '../components/WordCard.svelte';


  const { updateSelectedLetter, selectedLetter, resultsByLetter } = lookup;
  const { alphabet, language } = dictionary;

  let _selectedLetter = '';  
  let _resultsByLetter = []; 
  let _language = {selected: 'a'}; 
  let _alphabet = {a: 'a'}; 

  connectStores(
    [selectedLetter, val => _selectedLetter = val], 
    [resultsByLetter, val => _resultsByLetter = val], 
    [alphabet, val => _alphabet = val], 
    [language, val => _language = val]
  );

  $: abc = _alphabet[_language.selected];
  $: aToZ = `${abc[0].toUpperCase()}-${abc[abc.length - 1].toUpperCase()}`;
  $: abcList = [aToZ, ...abc.split('')];
  $: first10Entries = _resultsByLetter.slice(0, 10);
  $: restOfEntries = _resultsByLetter.length > 10 ? _resultsByLetter.slice(10) : [];

  beforeUpdate(() => document.documentElement.scrollTop = 0)
</script>
  


{#if _selectedLetter && _selectedLetter !== aToZ}
  <div class="az-container">
    {#each abcList as letter, i (letter)}
      <div class="az-item" selected={letter === _selectedLetter} 
        on:click={() => updateSelectedLetter(letter)}>
        {letter}
      </div>
    {/each}
  </div>
  <h2>{_selectedLetter.toUpperCase()}</h2>
  {#if _resultsByLetter.length === 0}
    <h3>No results for "{_selectedLetter.toUpperCase()}"</h3>
  {/if}
  {#each first10Entries as {entry, open}, i (entry._id)}
    <WordCard {open} {entry} />
  {/each}

    {#await new Promise(res => setTimeout(res, 10))}
      <div></div>
      {:then value}
        {#each restOfEntries as {entry, open}, i (entry._id)}
            <WordCard {open} {entry} />
        {/each}
      {:catch error}
      <div></div>
    {/await}

{:else}
  <div class="az-container-open">
    {#each abcList.slice(1) as letter, i (letter)}
      <div class="az-item open" selected={letter === _selectedLetter} 
        on:click={() => updateSelectedLetter(letter)}>
        {letter}
      </div>
    {/each}
  </div>
{/if}



<style>
  * {
    --nav-height: 42px;
    --background: #fff;
  }

  .az-container {
    width: 100vw;
    padding-left: 18px;
    overflow-x: auto;
    position: fixed;
    top: var(--nav-height);
    display: flex;
    height: 66px;
    background: var(--background);
    border-bottom: 1px solid #eee;
  }

  .az-item {
    font-size: 31px;
    line-height: 62px;
    text-align: center;
    height: 66px;
    min-width: 56px;
    transition: 0.15s;
    cursor: pointer;
    background: white;
  }
  .az-item[selected='true'] {
    color: dodgerblue;
    font-weight: bold;
  }

  .az-container-open {
    padding: 15px 5px 15px 5px; 
    margin: -32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: var(--background);
  }

  .az-item.open {
    width: 74px;
    height: 70px;
    line-height: 66px;
    border: 1px solid #ddd;
    border-radius: 12px;
    margin: 6px;
  }
  


  h2 {
    margin-top: calc(var(--nav-height) + 36px);
    margin-bottom: 30px;
    font-size: 40px;
    color: #222;
    font-weight: bold;
  }

  h3 {
    font-size: 24px;
    color: #555;
    margin-top: 30px;
    font-style: italic;
  }
</style>