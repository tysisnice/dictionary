import { S as SvelteComponentDev, a as init, s as safe_not_equal, e as element, t as text, c as claim_element, d as children, f as claim_text, g as detach, h as attr, k as add_location, l as insert, m as append, n as noop, D as empty, p as mount_component, u as transition_in, v as transition_out, w as destroy_component, b as space, o as listen, N as update_keyed_each, J as check_outros, M as onMount, I as group_outros, T as outro_and_destroy_block } from './index.37edae6e.js';
import { l as lookup } from './index.071b1cc5.js';
import { W as WordCard } from './WordCard.6c176ff1.js';

/* src\components\icons\SearchIcon.svelte generated by Svelte v3.9.0 */

const file = "src\\components\\icons\\SearchIcon.svelte";

function create_fragment(ctx) {
	var div, t;

	return {
		c: function create() {
			div = element("div");
			t = text("⚲");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			t = claim_text(div_nodes, "⚲");
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "search-icon svelte-19kiufp");
			add_location(div, file, 13, 0, 274);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

class SearchIcon extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

/* src\routes\search.svelte generated by Svelte v3.9.0 */

const file$1 = "src\\routes\\search.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.entry = list[i].entry;
	child_ctx.open = list[i].open;
	child_ctx.index = i;
	return child_ctx;
}

// (27:0) {#each _resultsBySearch.getAllMatches() as {entry, open}
function create_each_block(key_1, ctx) {
	var first, current;

	var wordcard = new WordCard({
		props: { open: ctx.open, entry: ctx.entry },
		$$inline: true
	});

	return {
		key: key_1,

		first: null,

		c: function create() {
			first = empty();
			wordcard.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			first = empty();
			wordcard.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			this.first = first;
		},

		m: function mount(target, anchor) {
			insert(target, first, anchor);
			mount_component(wordcard, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var wordcard_changes = {};
			if (changed._resultsBySearch) wordcard_changes.open = ctx.open;
			if (changed._resultsBySearch) wordcard_changes.entry = ctx.entry;
			wordcard.$set(wordcard_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(wordcard.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(wordcard.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(first);
			}

			destroy_component(wordcard, detaching);
		}
	};
}

function create_fragment$1(ctx) {
	var t0, div1, input, t1, div0, t2, each_blocks = [], each_1_lookup = new Map(), each_1_anchor, current, dispose;

	var searchicon = new SearchIcon({ $$inline: true });

	var each_value = ctx._resultsBySearch.getAllMatches();

	const get_key = ctx => ctx.entry._id;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c: function create() {
			t0 = space();
			div1 = element("div");
			input = element("input");
			t1 = space();
			div0 = element("div");
			searchicon.$$.fragment.c();
			t2 = space();

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();

			each_1_anchor = empty();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\r\n\r\n\r\n\r\n\r\n\r\n");

			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input = claim_element(div1_nodes, "INPUT", { type: true, value: true, class: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\r\n  ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			searchicon.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\r\n\r\n");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].l(nodes);

			each_1_anchor = empty();
			this.h();
		},

		h: function hydrate() {
			document.title = "Search";
			attr(input, "type", "text");
			input.value = ctx._searchQuery;
			attr(input, "class", "svelte-1s8v1c4");
			add_location(input, file$1, 22, 2, 690);
			attr(div0, "class", "svelte-1s8v1c4");
			add_location(div0, file$1, 23, 2, 758);
			attr(div1, "class", "search-bar svelte-1s8v1c4");
			add_location(div1, file$1, 21, 0, 662);
			dispose = listen(input, "input", ctx.handleInput);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, div1, anchor);
			append(div1, input);
			append(div1, t1);
			append(div1, div0);
			mount_component(searchicon, div0, null);
			insert(target, t2, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(target, anchor);

			insert(target, each_1_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if (!current || changed._searchQuery) {
				input.value = ctx._searchQuery;
			}

			const each_value = ctx._resultsBySearch.getAllMatches();

			group_outros();
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
			check_outros();
		},

		i: function intro(local) {
			if (current) return;
			transition_in(searchicon.$$.fragment, local);

			for (var i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);

			current = true;
		},

		o: function outro(local) {
			transition_out(searchicon.$$.fragment, local);

			for (i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(div1);
			}

			destroy_component(searchicon);

			if (detaching) {
				detach(t2);
			}

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d(detaching);

			if (detaching) {
				detach(each_1_anchor);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	
  const { searchQuery, resultsBySearch, updateSearchQuery } = lookup;
  const handleInput = ({ target }) => updateSearchQuery(target.value);

  let _searchQuery = ''; 
    onMount(() => searchQuery.subscribe(val => { const $$result = _searchQuery = val; $$invalidate('_searchQuery', _searchQuery); return $$result; }));
  let _resultsBySearch = {getAllMatches() { return [] }}; 
    onMount(() => resultsBySearch.subscribe(val => { const $$result = _resultsBySearch = val; $$invalidate('_resultsBySearch', _resultsBySearch); return $$result; }));

	return {
		handleInput,
		_searchQuery,
		_resultsBySearch
	};
}

class Search extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment$1, safe_not_equal, []);
	}
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFhYjdkNzVlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3NlYXJjaC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT5TZWFyY2g8L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge29uTW91bnR9IGZyb20gJ3N2ZWx0ZSdcclxuICBpbXBvcnQgU2VhcmNoSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb25zL1NlYXJjaEljb24uc3ZlbHRlJztcclxuICBpbXBvcnQgV29yZENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ2FyZC5zdmVsdGUnO1xyXG5cclxuICBpbXBvcnQgeyBsb29rdXAgfSBmcm9tICcuLi9zdG9yZSc7XHJcbiAgY29uc3QgeyBzZWFyY2hRdWVyeSwgcmVzdWx0c0J5U2VhcmNoLCB1cGRhdGVTZWFyY2hRdWVyeSB9ID0gbG9va3VwO1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0ID0gKHsgdGFyZ2V0IH0pID0+IHVwZGF0ZVNlYXJjaFF1ZXJ5KHRhcmdldC52YWx1ZSk7XHJcblxyXG4gIGxldCBfc2VhcmNoUXVlcnkgPSAnJzsgXHJcbiAgICBvbk1vdW50KCgpID0+IHNlYXJjaFF1ZXJ5LnN1YnNjcmliZSh2YWwgPT4gX3NlYXJjaFF1ZXJ5ID0gdmFsKSk7XHJcbiAgbGV0IF9yZXN1bHRzQnlTZWFyY2ggPSB7Z2V0QWxsTWF0Y2hlcygpIHsgcmV0dXJuIFtdIH19OyBcclxuICAgIG9uTW91bnQoKCkgPT4gcmVzdWx0c0J5U2VhcmNoLnN1YnNjcmliZSh2YWwgPT4gX3Jlc3VsdHNCeVNlYXJjaCA9IHZhbCkpO1xyXG48L3NjcmlwdD5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIj5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbjppbnB1dD17aGFuZGxlSW5wdXR9IHZhbHVlPXtfc2VhcmNoUXVlcnl9Lz5cclxuICA8ZGl2PjxTZWFyY2hJY29uLz48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG57I2VhY2ggX3Jlc3VsdHNCeVNlYXJjaC5nZXRBbGxNYXRjaGVzKCkgYXMge2VudHJ5LCBvcGVufSwgaW5kZXggKGVudHJ5Ll9pZCl9XHJcbiAgPFdvcmRDYXJkIHtvcGVufSB7ZW50cnl9Lz5cclxuey9lYWNofVxyXG5cclxuXHJcblxyXG48c3R5bGU+XHJcbiAgLnNlYXJjaC1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA0MzVweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbjogLTVweCAwIDE1cHggMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYmFyID4gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1iYXIgPiBkaXYge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogLTE0cHggNnB4IGF1dG8gYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5zZWFyY2gtYmFyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBMkJhLElBQUksYUFBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBQVosSUFBSTs4REFBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQURsQixnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7OzRCQUEwQixLQUFLLENBQUMsR0FBRzs7Z0NBQXhFOzs7Ozs7Ozs7Ozs7Ozs7OytCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFBQTs7Ozs7Ozs7O3FCQUppRCxZQUFZOzs7Ozs7O3dDQUFoQyxXQUFXOzs7Ozs7Ozs7Ozs7K0JBSXhDOzs7Ozs7OztzQkFKaUQsWUFBWTs7OzBCQUl4RCxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7Ozs7Ozs7Ozs7O2tDQUFyQzs7Ozs7Ozs7K0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUFBOzs7Ozs7Ozs7Ozs7O0VBaEJBLE1BQU0sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsTUFBTSxDQUFDO0VBQ25FLE1BQU0sV0FBVyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7O0VBRXBFLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUNwQixPQUFPLENBQUMsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsdUJBQUksWUFBWSxHQUFHLG1FQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ2xFLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxhQUFhLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckQsT0FBTyxDQUFDLE1BQU0sZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLHVCQUFJLGdCQUFnQixHQUFHLDJFQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
