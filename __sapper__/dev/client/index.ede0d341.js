import { S as SvelteComponentDev, a as init, s as safe_not_equal, e as element, t as text, c as claim_element, d as children, f as claim_text, g as detach, h as attr, j as add_location, k as insert, l as append, D as empty, m as mount_component, o as transition_in, p as transition_out, q as destroy_component, b as space, v as listen, N as update_keyed_each, J as check_outros, I as group_outros, P as outro_and_destroy_block } from './index.218ba847.js';
import { l as lookup } from './index.ae07b206.js';
import { S as SearchIcon } from './SearchIcon.fef9140e.js';
import { W as WordCard } from './WordCard.60fb91fd.js';
import { c as connectStore } from './utils.0e0838d2.js';

/* src\routes\index.svelte generated by Svelte v3.9.0 */

const file = "src\\routes\\index.svelte";

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
			attr(p, "class", "placeholder svelte-1nwfcrr");
			add_location(p, file, 28, 2, 837);
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
	var t0, div1, input, t1, div0, t2, t3, each_blocks = [], each_1_lookup = new Map(), t4, div2, current, dispose;

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

			t4 = space();
			div2 = element("div");
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

			t4 = claim_text(nodes, "\r\n\r\n");

			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Mien Language - Search";
			attr(input, "type", "text");
			input.value = ctx._searchQuery;
			attr(input, "class", "svelte-1nwfcrr");
			add_location(input, file, 23, 2, 704);
			attr(div0, "class", "svelte-1nwfcrr");
			add_location(div0, file, 24, 2, 772);
			attr(div1, "class", "search-bar svelte-1nwfcrr");
			add_location(div1, file, 22, 0, 676);
			attr(div2, "class", "filler svelte-1nwfcrr");
			add_location(div2, file, 35, 0, 1052);
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

			insert(target, t4, anchor);
			insert(target, div2, anchor);
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
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, t4.parentNode, outro_and_destroy_block, create_each_block, t4, get_each_context);
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
				detach(t4);
				detach(div2);
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

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWRlMGQzNDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6aGVhZD5cclxuXHQ8dGl0bGU+TWllbiBMYW5ndWFnZSAtIFNlYXJjaDwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBTZWFyY2hJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbnMvU2VhcmNoSWNvbi5zdmVsdGUnO1xyXG4gIGltcG9ydCBXb3JkQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRDYXJkLnN2ZWx0ZSc7XHJcbiAgaW1wb3J0IHtjb25uZWN0U3RvcmV9IGZyb20gJy4uL3N0b3JlL3V0aWxzJztcclxuXHJcbiAgaW1wb3J0IHsgbG9va3VwIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIHJlc3VsdHNCeVNlYXJjaCwgdXBkYXRlU2VhcmNoUXVlcnkgfSA9IGxvb2t1cDtcclxuICBjb25zdCBoYW5kbGVJbnB1dCA9ICh7IHRhcmdldCB9KSA9PiB1cGRhdGVTZWFyY2hRdWVyeSh0YXJnZXQudmFsdWUpO1xyXG5cclxuICBsZXQgX3NlYXJjaFF1ZXJ5ID0gJyc7IFxyXG4gICAgY29ubmVjdFN0b3JlKHNlYXJjaFF1ZXJ5LCB2YWwgPT4gX3NlYXJjaFF1ZXJ5ID0gdmFsKTtcclxuICBsZXQgX3Jlc3VsdHNCeVNlYXJjaCA9IHtnZXRBbGxNYXRjaGVzKCkgeyByZXR1cm4gW10gfX07IFxyXG4gICAgY29ubmVjdFN0b3JlKHJlc3VsdHNCeVNlYXJjaCwgdmFsID0+IF9yZXN1bHRzQnlTZWFyY2ggPSB2YWwpO1xyXG4gICAgXHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwic2VhcmNoLWJhclwiPlxyXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uOmlucHV0PXtoYW5kbGVJbnB1dH0gdmFsdWU9e19zZWFyY2hRdWVyeX0vPlxyXG4gIDxkaXY+PFNlYXJjaEljb24vPjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbnsjaWYgX3NlYXJjaFF1ZXJ5ID09PSAnJ31cclxuICA8cCBjbGFzcz1cInBsYWNlaG9sZGVyXCI+VHlwZSBpbiB0aGUgYmFyIGFib3ZlIHRvIGZpbmQgdGhlIHdvcmQgeW91J3JlIGxvb2tpbmcgZm9yITwvcD5cclxuey9pZn1cclxuXHJcbnsjZWFjaCBfcmVzdWx0c0J5U2VhcmNoLmdldEFsbE1hdGNoZXMoKSBhcyB7ZW50cnksIG9wZW59LCBpbmRleCAoZW50cnkuX2lkKX1cclxuICA8V29yZENhcmQge29wZW59IHtlbnRyeX0vPlxyXG57L2VhY2h9XHJcblxyXG48ZGl2IGNsYXNzPVwiZmlsbGVyXCI+PC9kaXY+XHJcblxyXG5cclxuXHJcbjxzdHlsZT5cclxuICAuc2VhcmNoLWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDQzNXB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luOiAtNXB4IDAgMTVweCAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJhciA+IGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYmFyID4gZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IC0xNHB4IDZweCBhdXRvIGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBwLnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuZmlsbGVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5zZWFyY2gtYmFyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NhLElBQUk7YUFBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQUFaLElBQUk7OERBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFMcEIsWUFBWSxLQUFLLEVBQUU7O3NCQUlqQixnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7OzRCQUEwQixLQUFLLENBQUMsR0FBRzs7Z0NBQXhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUFBOzs7Ozs7Ozs7Ozs7OztxQkFSaUQsWUFBWTs7Ozs7Ozs7O3dDQUFoQyxXQUFXOzs7Ozs7Ozs7Ozs7OzsrQkFReEM7Ozs7Ozs7OztzQkFSaUQsWUFBWTs7O1dBSTFELFlBQVksS0FBSyxFQUFFOzs7Ozs7Ozs7OzswQkFJakIsZ0JBQWdCLENBQUMsYUFBYSxFQUFFOzs7Ozs7Ozs7OztrQ0FBckM7Ozs7Ozs7OytCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFBQTs7Ozs7Ozs7Ozs7Ozs7RUFyQkEsTUFBTSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxNQUFNLENBQUM7RUFDbkUsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7RUFFcEUsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLFlBQVksQ0FBQyxXQUFXLEVBQUUsR0FBRyx1QkFBSSxZQUFZLEdBQUcsbUVBQUcsQ0FBQyxDQUFDO0VBQ3ZELElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxhQUFhLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckQsWUFBWSxDQUFDLGVBQWUsRUFBRSxHQUFHLHVCQUFJLGdCQUFnQixHQUFHLDJFQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
