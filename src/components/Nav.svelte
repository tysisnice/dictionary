
<script>
	export let segment;
	import { dictionary } from '../store';
	import Tabbar from './Tabbar.svelte';
	const { language, changeLanguage } = dictionary;

	$: langButtonClass = $language.selected;
	$: langIsPrimary = $language.selected === 'primary';
	$: langText = langIsPrimary ? 'En' : 'Mien';
</script>


<nav>
	<h1>Iu Mien Language</h1>
	<div>
		<Tabbar {segment}/>
		<button class={langButtonClass} on:click={changeLanguage}>
			{langText}
		</button>
	</div>
</nav>


<style>
	nav {
		--nav-heigth: 42px;
		position: fixed;
		top: 0; left: 0; right: 0;
		height: var(--nav-heigth);
		background: dodgerblue;
		color: white;
		z-index: 10;
		padding-right: 0;
		display: flex;
		justify-content: space-between;
	}

	h1 {
		margin-left: 10px;
		line-height: calc(var(--nav-heigth) - 2px);
		font-size: 22px;
	}

	div {
		display: flex;
		align-items: center;
		height: inherit;
	}

	button {
		cursor: pointer;
		font-size: 16px;
		height: calc(var(--nav-heigth) - 10px);
		margin: 5px;
		border: none;
		border-radius: 6px;
		box-shadow: 0px 2px 5px 0px rgba(50,50,50,0.2);
		transition: 0.05s;
	}
	button.primary {
		width: 40px;
		margin: 5px 9px 5px 9px;
	}
	button.secondary {
		width: 48px;
	}
</style>