

<svelte:head>
	<title>Iu Mien Language</title>
</svelte:head>


<script>

  import {app} from '../store';
  import WordCard from '../components/WordCard.svelte'



  let frog = "frogger";
  frog += 'g';
  const entry = {
     word: "asdfasdfsa",
  clarifyer: "aaaaaaaaaaaaaaaaa",
  language: "no lang",
  otherWords: [],
  lastEdited: "original",
  _id: 'sad'

  }
</script>

<h1>Great success!</h1>
<WordCard {entry} open={true}/>
<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>{$app.page}HIGH FIVE {frog}!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>





<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
