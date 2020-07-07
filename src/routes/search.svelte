<svelte:head>
	<title>Search</title>
</svelte:head>

<script>
  import SearchIcon from '../components/icons/SearchIcon.svelte';
  import WordCard from '../components/WordCard.svelte';
  import {connectStore} from '../store/utils';

  import { lookup } from '../store';
  const { searchQuery, resultsBySearch, updateSearchQuery } = lookup;
  const handleInput = ({ target }) => updateSearchQuery(target.value);

  let _searchQuery = ''; 
    connectStore(searchQuery, val => _searchQuery = val);
  let _resultsBySearch = {getAllMatches() { return [] }}; 
    connectStore(resultsBySearch, val => _resultsBySearch = val);
    
</script>



<div class="search-bar">
  <input type="text" on:input={handleInput} value={_searchQuery}/>
  <div><SearchIcon/></div>
</div>

{#if _searchQuery === ''}
  <p class="placeholder">Type in the bar above to find the word you're looking for!</p>
{/if}

{#each _resultsBySearch.getAllMatches() as {entry, open}, index (entry._id)}
  <WordCard {open} {entry}/>
{/each}



<style>
  .search-bar {
    display: flex;
    justify-content: space-between;
    width: 435px;
    height: 44px;
    margin: -5px 0 15px 0;
    border: 2px solid #ddd;
    border-radius: 40px;
    overflow: hidden;
  }

  .search-bar > input {
    width: 100%;
    border: none;
    padding: 5px;
    outline: none;
    font-size: 24px;
    padding-left: 18px;
  }

  .search-bar > div {
    font-size: 40px;
    padding: 10px;
    margin: -14px 6px auto auto;
    cursor: pointer;
  }

  p.placeholder {
    font-style: italic;
    color: #666;
    padding-top: 30px;
  }

  @media (max-width: 550px) {
    .search-bar {
      width: calc(100vw - 40px);
    }
  }
</style>