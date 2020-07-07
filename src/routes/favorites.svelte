<script>
  import {onMount} from 'svelte';
  import { flip } from 'svelte/animate';
  import WordCard from '../components/WordCard.svelte';
  import { favorites } from '../store';
  const { savedWords, wordOfTheDay } = favorites;
  let _savedWords = [];
  let _wordOfTheDay;

  onMount(() => savedWords.subscribe(val => _savedWords = val.reverse()));
  onMount(() => wordOfTheDay.subscribe(val => _wordOfTheDay = val));
  // TODO add text for when there are no favorited words
</script>



<h2 class="top">Word of the Day</h2>
<WordCard entry={_wordOfTheDay} open="true" />
<h2>My Saved Words</h2>
{#each _savedWords as entry, i (entry._id)}
  <div animate:flip={{duration: 220}}>
    <WordCard {entry} />
  </div>
{/each}



<style>
  h2 {
    margin: 30px 0px 15px 0px;
    max-width: 95vw;
    width: 360px;
    font-size: 26px;
    font-weight: bold;
    color: #555;
  }
  h2.top {
    margin-top: 5px;
  }
</style>