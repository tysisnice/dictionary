<svelte:head>
	<title>Search</title>
</svelte:head>

<script>
  import SearchIcon from '../../components/icons/SearchIcon.svelte';
  import WordCard from '../../components/WordCard.svelte';
  import { lookup } from '../../store';
  
  const { searchQuery, resultsBySearch, updateSearchQuery } = lookup;
  const handleInput = ({ target }) => updateSearchQuery(target.value);
</script>

<div class="search-bar">
  <input type="text" on:input={handleInput} value={$searchQuery}/>
  <div><SearchIcon/></div>
</div>

{#each $resultsBySearch.getAllMatches() as {entry, open}, index (entry._id)}
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
    background: pink;
  }

  @media (max-width: 550px) {
    .search-bar {
      width: calc(100vw - 40px);
    }
  }
</style>