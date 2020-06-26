
<script>
  export let segment;
</script>


<div class="tabbar">
  <a class='{segment === "abc" ? "selected" : ""}' href='abc'>
    A-Z
  </a>
  <a class='{segment === "search" ? "selected" : ""}' href='search'>
    Search
  </a>
  <a class='{segment === "favorites" ? "selected" : ""}' href='favorites'>
    Star
  </a>
</div>


<style>
	.tabbar {
    --height: 36px;
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0; right: 0; left: 0;
    height: var(--height);
	}

	a {
		text-decoration: none;
		color: black;
    width: 25%;
    text-align: center;
    height: inherit;
    background: pink;
    line-height: var(--height);
	}

	a.selected {
		color: dodgerblue;
	}
  

  @media (min-width: 600px) {
    .tabbar {
      --height: inherit;
      position: relative;
      width: 150px;
    }
    a {
      width: 50px;
    }
  }
</style>