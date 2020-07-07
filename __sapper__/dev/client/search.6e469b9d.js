import { S as SvelteComponentDev, a as init, s as safe_not_equal, e as element, t as text, c as claim_element, d as children, f as claim_text, g as detach, h as attr, j as add_location, k as insert, l as append, D as empty, m as mount_component, o as transition_in, p as transition_out, q as destroy_component, b as space, v as listen, N as update_keyed_each, J as check_outros, I as group_outros, T as outro_and_destroy_block } from './index.42697b0b.js';
import { l as lookup } from './index.740af30a.js';
import { S as SearchIcon } from './SearchIcon.1bff16b3.js';
import { W as WordCard } from './WordCard.20a7419a.js';
import { c as connectStore } from './utils.1334c23a.js';

/* src\routes\search.svelte generated by Svelte v3.9.0 */

const file = "src\\routes\\search.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.entry = list[i].entry;
	child_ctx.open = list[i].open;
	child_ctx.index = i;
	return child_ctx;
}

// (28:0) {#if _searchQuery === ''}
function create_if_block(ctx) {
	var p, t;

	return {
		c: function create() {
			p = element("p");
			t = text("Type in the bar above to find the word you're looking for!");
			this.h();
		},

		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t = claim_text(p_nodes, "Type in the bar above to find the word you're looking for!");
			p_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(p, "class", "placeholder svelte-92zwzh");
			add_location(p, file, 28, 2, 821);
		},

		m: function mount(target, anchor) {
			insert(target, p, anchor);
			append(p, t);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(p);
			}
		}
	};
}

// (32:0) {#each _resultsBySearch.getAllMatches() as {entry, open}
function create_each_block(key_1, ctx) {
	var first, current;

	var wordcard = new WordCard({
		props: {
		open: ctx.open,
		entry: ctx.entry
	},
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

function create_fragment(ctx) {
	var t0, div1, input, t1, div0, t2, t3, each_blocks = [], each_1_lookup = new Map(), each_1_anchor, current, dispose;

	var searchicon = new SearchIcon({ $$inline: true });

	var if_block = (ctx._searchQuery === '') && create_if_block();

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
			if (if_block) if_block.c();
			t3 = space();

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
			if (if_block) if_block.l(nodes);
			t3 = claim_text(nodes, "\r\n\r\n");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].l(nodes);

			each_1_anchor = empty();
			this.h();
		},

		h: function hydrate() {
			document.title = "Search";
			attr(input, "type", "text");
			input.value = ctx._searchQuery;
			attr(input, "class", "svelte-92zwzh");
			add_location(input, file, 23, 2, 688);
			attr(div0, "class", "svelte-92zwzh");
			add_location(div0, file, 24, 2, 756);
			attr(div1, "class", "search-bar svelte-92zwzh");
			add_location(div1, file, 22, 0, 660);
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
			if (if_block) if_block.m(target, anchor);
			insert(target, t3, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(target, anchor);

			insert(target, each_1_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if (!current || changed._searchQuery) {
				input.value = ctx._searchQuery;
			}

			if (ctx._searchQuery === '') {
				if (!if_block) {
					if_block = create_if_block();
					if_block.c();
					if_block.m(t3.parentNode, t3);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
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

			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach(t3);
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
    connectStore(searchQuery, val => { const $$result = _searchQuery = val; $$invalidate('_searchQuery', _searchQuery); return $$result; });
  let _resultsBySearch = {getAllMatches() { return [] }}; 
    connectStore(resultsBySearch, val => { const $$result = _resultsBySearch = val; $$invalidate('_resultsBySearch', _resultsBySearch); return $$result; });

	return {
		handleInput,
		_searchQuery,
		_resultsBySearch
	};
}

class Search extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLjZlNDY5YjlkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3NlYXJjaC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT5TZWFyY2g8L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgU2VhcmNoSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb25zL1NlYXJjaEljb24uc3ZlbHRlJztcclxuICBpbXBvcnQgV29yZENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ2FyZC5zdmVsdGUnO1xyXG4gIGltcG9ydCB7Y29ubmVjdFN0b3JlfSBmcm9tICcuLi9zdG9yZS91dGlscyc7XHJcblxyXG4gIGltcG9ydCB7IGxvb2t1cCB9IGZyb20gJy4uL3N0b3JlJztcclxuICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCByZXN1bHRzQnlTZWFyY2gsIHVwZGF0ZVNlYXJjaFF1ZXJ5IH0gPSBsb29rdXA7XHJcbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoeyB0YXJnZXQgfSkgPT4gdXBkYXRlU2VhcmNoUXVlcnkodGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgbGV0IF9zZWFyY2hRdWVyeSA9ICcnOyBcclxuICAgIGNvbm5lY3RTdG9yZShzZWFyY2hRdWVyeSwgdmFsID0+IF9zZWFyY2hRdWVyeSA9IHZhbCk7XHJcbiAgbGV0IF9yZXN1bHRzQnlTZWFyY2ggPSB7Z2V0QWxsTWF0Y2hlcygpIHsgcmV0dXJuIFtdIH19OyBcclxuICAgIGNvbm5lY3RTdG9yZShyZXN1bHRzQnlTZWFyY2gsIHZhbCA9PiBfcmVzdWx0c0J5U2VhcmNoID0gdmFsKTtcclxuICAgIFxyXG48L3NjcmlwdD5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIj5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbjppbnB1dD17aGFuZGxlSW5wdXR9IHZhbHVlPXtfc2VhcmNoUXVlcnl9Lz5cclxuICA8ZGl2PjxTZWFyY2hJY29uLz48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG57I2lmIF9zZWFyY2hRdWVyeSA9PT0gJyd9XHJcbiAgPHAgY2xhc3M9XCJwbGFjZWhvbGRlclwiPlR5cGUgaW4gdGhlIGJhciBhYm92ZSB0byBmaW5kIHRoZSB3b3JkIHlvdSdyZSBsb29raW5nIGZvciE8L3A+XHJcbnsvaWZ9XHJcblxyXG57I2VhY2ggX3Jlc3VsdHNCeVNlYXJjaC5nZXRBbGxNYXRjaGVzKCkgYXMge2VudHJ5LCBvcGVufSwgaW5kZXggKGVudHJ5Ll9pZCl9XHJcbiAgPFdvcmRDYXJkIHtvcGVufSB7ZW50cnl9Lz5cclxuey9lYWNofVxyXG5cclxuXHJcblxyXG48c3R5bGU+XHJcbiAgLnNlYXJjaC1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA0MzVweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbjogLTVweCAwIDE1cHggMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYmFyID4gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1iYXIgPiBkaXYge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogLTE0cHggNnB4IGF1dG8gYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHAucGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLnNlYXJjaC1iYXIge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQ2EsSUFBSTthQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBQVosSUFBSTs4REFBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUxwQixZQUFZLEtBQUssRUFBRTs7c0JBSWpCLGdCQUFnQixDQUFDLGFBQWEsRUFBRTs7NEJBQTBCLEtBQUssQ0FBQyxHQUFHOztnQ0FBeEU7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFBQTs7Ozs7Ozs7O3FCQVJpRCxZQUFZOzs7Ozs7O3dDQUFoQyxXQUFXOzs7Ozs7Ozs7Ozs7OzsrQkFReEM7Ozs7Ozs7O3NCQVJpRCxZQUFZOzs7V0FJMUQsWUFBWSxLQUFLLEVBQUU7Ozs7Ozs7Ozs7OzBCQUlqQixnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7Ozs7Ozs7Ozs7O2tDQUFyQzs7Ozs7Ozs7K0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUFBOzs7Ozs7Ozs7Ozs7O0VBckJBLE1BQU0sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsTUFBTSxDQUFDO0VBQ25FLE1BQU0sV0FBVyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7O0VBRXBFLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUNwQixZQUFZLENBQUMsV0FBVyxFQUFFLEdBQUcsdUJBQUksWUFBWSxHQUFHLG1FQUFHLENBQUMsQ0FBQztFQUN2RCxJQUFJLGdCQUFnQixHQUFHLENBQUMsYUFBYSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxlQUFlLEVBQUUsR0FBRyx1QkFBSSxnQkFBZ0IsR0FBRywyRUFBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
