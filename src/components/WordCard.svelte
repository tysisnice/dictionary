
<script context="module">
  function shrinkClarifyerText(text) {
    const firstLine = text.split('\n')[0];
    const newClarifyer = firstLine.substring(0, 30);
    newClarifyer.length > firstLine.length && (newClarifyer += '...');
    return newClarifyer;
  }
</script>

<script>
  import {onMount} from 'svelte';
  import { fade } from 'svelte/transition';

  import { favorites } from '../store';
  const { savedById, toggleFavorite } = favorites;

  export let entry = {
     word: "Word",
    clarifyer: "clarifyer",
    language: "language",
    otherWords: [],
    lastEdited: "lastEdited",
    _id: '_id'
  }; //WordEntry
  export let open = false; //boolean
  
  let _savedById = []; //string[]
    onMount(() => savedById.subscribe(val => _savedById = val))
</script>



<div class="container" in:fade={{duration: 170}} {open} on:click={() => open = true}>
  {#if open}
    <div class="corner-button open" 
      saved={_savedById.includes(entry._id)}
      on:click={() => toggleFavorite(entry._id)}>&#9733;</div>
    <p class="word" {open}>{entry.word}</p>
    <p class="clarifyer" {open}>{entry.clarifyer}</p>
    <div class="other-entries">
      {#each entry.otherWords as {_id, word, clarifyer}, index (_id)}
        <hr>
        <p class="word other">{word}</p>
        <p class="clarifyer other">{clarifyer}</p>
      {/each}
    </div>
  {:else}
    <div class="corner-button">+</div>
    <p class="word">{entry.word}</p>
    <p class="clarifyer">{shrinkClarifyerText(entry.clarifyer)}</p>
  {/if}
</div>



<style>
  div {
    --padding: 12px 18px 12px 18px;
    --inverse-padding: -25px;
    --border-color: #ddd;
  }

  hr {
    margin: 10px var(--inverse-padding) 10px var(--inverse-padding);
    border: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }


  .container {
    box-sizing: border-box;
    margin: 4px 5px 4px 5px;
    padding: var(--padding);
    border: 0.5px solid var(--border-color);
    border-radius: 16px;
    width: 380px;
    transition: 0.25s;
    cursor: pointer;
    border: 1px solid var(--border-color);
    background: white;
  }
  .container[open="true"] {
    width: 420px;
    cursor: auto;
    padding: 25px;
    margin: 10px 5px 10px 5px;
  }

  .corner-button {
    float: right;
    height: 40px;
    width: 40px;
    margin-left: 10px;
    cursor: pointer;
    text-align: right;
    line-height: 28px;
    font-size: 42px;
    user-select: none;
  }
  .corner-button.open {
    font-size: 28px;
    color: #777;
    transition: 0.15s;
  }
  .corner-button.open[saved="true"] {
    color: gold;
  }


  .word {
    color: #000;
    font-size: 22px;
    font-weight: bold;
  }
  .word[open="true"] {
    font-size: 24px;
  }

  .clarifyer {
    margin-top: 0px;
    margin-left: 10px;
    font-size: 14px;
    font-style: italic;
    color: #555;
  }
  .clarifyer[open="true"] {
    margin-top: 5px;
    font-size: 16px;
  }

  .word.other {
    font-size: 22px;
    font-weight: normal;
    color: #222;
    margin-left: 10px;
  }

  .clarifyer.other {
    margin-left: 20px;
    font-size: 16px;
  }


  @media(max-width: 550px) {
    .container {
      width: calc(100vw - 70px);
    }
    .container[open="true"] {
      width: calc(100vw - 50px);
    }
  }
</style>

