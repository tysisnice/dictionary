
<script>
  export let segment;

  import SearchIcon from './icons/SearchIcon.svelte';
</script>


<div class="tabbar">
  <a selected={segment === "abc"} class='abc' href='abc'>
    A-Z
  </a>
  <a selected={segment === "search"} class="search" href='search'>
    <SearchIcon />
  </a>
  <a selected={segment === "favorites"} class="star" href='favorites'>
    &#9733;
  </a>
</div>


<style>

  * {
    --height: 40px;
  }
	.tabbar {
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0; right: 0; left: 0;
    padding: 0;
    height: var(--height);
    background: white;
	}

	a {
		text-decoration: none;
		color: black;
    width: 33.33%;
    text-align: center;
    height: inherit;
    line-height: var(--height);
    height: var(--height);
    background: #fcfcfc;
    border: 1px solid #eee;
	}

	a[selected="true"] {
		color: dodgerblue;
	}

  .abc {
    font-size: 22px;
    font-weight: bold;
  }

  .search {
    padding-top: 2px;
  }

  .star {
    font-size: 32px;
    line-height: calc(var(--height) - 5px);
  }
  

  @media (min-width: 600px) {
    .tabbar {
      --height: inherit;
      position: relative;
      width: 210px;
      background: dodgerblue;
    }
    a {
      width: 70px;
      background: dodgerblue;
      color: white;
    border: none;
    }
    a[selected="true"] {
      background: royalblue;
      color: white;
    }
  }
</style>