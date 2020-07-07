import { M as onMount, S as SvelteComponentDev, a as init, s as safe_not_equal, D as empty, l as insert, v as transition_out, J as check_outros, u as transition_in, g as detach, I as group_outros, V as tick, e as element, t as text, b as space, c as claim_element, d as children, f as claim_text, h as attr, k as add_location, o as listen, m as append, q as set_data, N as update_keyed_each, O as destroy_block, n as noop, p as mount_component, w as destroy_component, T as outro_and_destroy_block } from './index.c568c806.js';
import { l as lookup, d as dictionary } from './index.824901d9.js';
import { W as WordCard } from './WordCard.109a972f.js';

function connectStore(store, callback) {
    onMount(function () { return store.subscribe(callback); });
}
function connectStores() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        connectStore(arguments[i][0], arguments[i][1]);
    }
}

/* src\routes\abc.svelte generated by Svelte v3.9.0 */

const file = "src\\routes\\abc.svelte";

function get_each_context_2(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.letter = list[i];
	child_ctx.i = i;
	return child_ctx;
}

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.entry = list[i].entry;
	child_ctx.open = list[i].open;
	child_ctx.i = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.letter = list[i];
	child_ctx.i = i;
	return child_ctx;
}

// (61:0) {:else}
function create_else_block(ctx) {
	var div, each_blocks = [], each_1_lookup = new Map();

	var each_value_2 = ctx.abcList.slice(1);

	const get_key = ctx => ctx.letter;

	for (var i = 0; i < each_value_2.length; i += 1) {
		let child_ctx = get_each_context_2(ctx, each_value_2, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_2(key, child_ctx));
	}

	return {
		c: function create() {
			div = element("div");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].l(div_nodes);

			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "az-container-open svelte-nbrrwd");
			add_location(div, file, 61, 2, 1844);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(div, null);
		},

		p: function update(changed, ctx) {
			const each_value_2 = ctx.abcList.slice(1);
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value_2, each_1_lookup, div, destroy_block, create_each_block_2, null, get_each_context_2);
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();
		}
	};
}

// (44:0) {#if _selectedLetter && _selectedLetter !== aToZ}
function create_if_block(ctx) {
	var div, each_blocks_1 = [], each0_lookup = new Map(), t0, h2, t1_value = ctx._selectedLetter.toUpperCase() + "", t1, t2, t3, each_blocks = [], each1_lookup = new Map(), each1_anchor, current;

	var each_value_1 = ctx.abcList;

	const get_key = ctx => ctx.letter;

	for (var i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each0_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
	}

	var if_block = (ctx._resultsByLetter.length === 0) && create_if_block_1(ctx);

	var each_value = ctx._resultsByLetter;

	const get_key_1 = ctx => ctx.entry._id;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key_1(child_ctx);
		each1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c: function create() {
			div = element("div");

			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].c();

			t0 = space();
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			if (if_block) if_block.c();
			t3 = space();

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();

			each1_anchor = empty();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].l(div_nodes);

			div_nodes.forEach(detach);
			t0 = claim_text(nodes, "\r\n  ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach);
			t2 = claim_text(nodes, "\r\n  ");
			if (if_block) if_block.l(nodes);
			t3 = claim_text(nodes, "\r\n  ");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].l(nodes);

			each1_anchor = empty();
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "az-container svelte-nbrrwd");
			add_location(div, file, 44, 2, 1326);
			attr(h2, "class", "svelte-nbrrwd");
			add_location(h2, file, 52, 2, 1574);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);

			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].m(div, null);

			insert(target, t0, anchor);
			insert(target, h2, anchor);
			append(h2, t1);
			insert(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, t3, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(target, anchor);

			insert(target, each1_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			const each_value_1 = ctx.abcList;
			each_blocks_1 = update_keyed_each(each_blocks_1, changed, get_key, 1, ctx, each_value_1, each0_lookup, div, destroy_block, create_each_block_1, null, get_each_context_1);

			if ((!current || changed._selectedLetter) && t1_value !== (t1_value = ctx._selectedLetter.toUpperCase() + "")) {
				set_data(t1, t1_value);
			}

			if (ctx._resultsByLetter.length === 0) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(t3.parentNode, t3);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			const each_value = ctx._resultsByLetter;

			group_outros();
			each_blocks = update_keyed_each(each_blocks, changed, get_key_1, 1, ctx, each_value, each1_lookup, each1_anchor.parentNode, outro_and_destroy_block, create_each_block, each1_anchor, get_each_context);
			check_outros();
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);

			current = true;
		},

		o: function outro(local) {
			for (i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].d();

			if (detaching) {
				detach(t0);
				detach(h2);
				detach(t2);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach(t3);
			}

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d(detaching);

			if (detaching) {
				detach(each1_anchor);
			}
		}
	};
}

// (63:4) {#each abcList.slice(1) as letter, i (letter)}
function create_each_block_2(key_1, ctx) {
	var div, t0_value = ctx.letter + "", t0, t1, div_selected_value, dispose;

	function click_handler_1() {
		return ctx.click_handler_1(ctx);
	}

	return {
		key: key_1,

		first: null,

		c: function create() {
			div = element("div");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, selected: true }, false);
			var div_nodes = children(div);

			t0 = claim_text(div_nodes, t0_value);
			t1 = claim_text(div_nodes, "\r\n      ");
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "az-item open svelte-nbrrwd");
			attr(div, "selected", div_selected_value = ctx.letter === ctx._selectedLetter);
			add_location(div, file, 63, 6, 1935);
			dispose = listen(div, "click", click_handler_1);
			this.first = div;
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.abcList) && t0_value !== (t0_value = ctx.letter + "")) {
				set_data(t0, t0_value);
			}

			if ((changed.abcList || changed._selectedLetter) && div_selected_value !== (div_selected_value = ctx.letter === ctx._selectedLetter)) {
				attr(div, "selected", div_selected_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			dispose();
		}
	};
}

// (46:4) {#each abcList as letter, i (letter)}
function create_each_block_1(key_1, ctx) {
	var div, t0_value = ctx.letter + "", t0, t1, div_selected_value, dispose;

	function click_handler() {
		return ctx.click_handler(ctx);
	}

	return {
		key: key_1,

		first: null,

		c: function create() {
			div = element("div");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, selected: true }, false);
			var div_nodes = children(div);

			t0 = claim_text(div_nodes, t0_value);
			t1 = claim_text(div_nodes, "\r\n      ");
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "az-item svelte-nbrrwd");
			attr(div, "selected", div_selected_value = ctx.letter === ctx._selectedLetter);
			add_location(div, file, 46, 6, 1403);
			dispose = listen(div, "click", click_handler);
			this.first = div;
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, t1);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.abcList) && t0_value !== (t0_value = ctx.letter + "")) {
				set_data(t0, t0_value);
			}

			if ((changed.abcList || changed._selectedLetter) && div_selected_value !== (div_selected_value = ctx.letter === ctx._selectedLetter)) {
				attr(div, "selected", div_selected_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			dispose();
		}
	};
}

// (54:2) {#if _resultsByLetter.length === 0}
function create_if_block_1(ctx) {
	var h3, t0, t1_value = ctx._selectedLetter.toUpperCase() + "", t1, t2;

	return {
		c: function create() {
			h3 = element("h3");
			t0 = text("No results for \"");
			t1 = text(t1_value);
			t2 = text("\"");
			this.h();
		},

		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", { class: true }, false);
			var h3_nodes = children(h3);

			t0 = claim_text(h3_nodes, "No results for \"");
			t1 = claim_text(h3_nodes, t1_value);
			t2 = claim_text(h3_nodes, "\"");
			h3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(h3, "class", "svelte-nbrrwd");
			add_location(h3, file, 54, 4, 1659);
		},

		m: function mount(target, anchor) {
			insert(target, h3, anchor);
			append(h3, t0);
			append(h3, t1);
			append(h3, t2);
		},

		p: function update(changed, ctx) {
			if ((changed._selectedLetter) && t1_value !== (t1_value = ctx._selectedLetter.toUpperCase() + "")) {
				set_data(t1, t1_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h3);
			}
		}
	};
}

// (57:2) {#each _resultsByLetter as {entry, open}
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
			if (changed._resultsByLetter) wordcard_changes.open = ctx.open;
			if (changed._resultsByLetter) wordcard_changes.entry = ctx.entry;
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
	var current_block_type_index, if_block, if_block_anchor, current;

	var if_block_creators = [
		create_if_block,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx._selectedLetter && ctx._selectedLetter !== ctx.aToZ) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},

		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},

		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				group_outros();
				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});
				check_outros();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},

		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},

		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				detach(if_block_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	


  const { updateSelectedLetter, selectedLetter, resultsByLetter } = lookup;
  const { alphabet, language } = dictionary;

  let _selectedLetter = '';  
  let _resultsByLetter = []; 
  let _language = {selected: 'a'}; 
  let _alphabet = {a: 'a'}; 
  let mounted = false;

  connectStores(
    [selectedLetter, val => { const $$result = _selectedLetter = val; $$invalidate('_selectedLetter', _selectedLetter); return $$result; }], 
    [resultsByLetter, val => { const $$result = _resultsByLetter = val; $$invalidate('_resultsByLetter', _resultsByLetter); return $$result; }], 
    [alphabet, val => { const $$result = _alphabet = val; $$invalidate('_alphabet', _alphabet); return $$result; }], 
    [language, val => { const $$result = _language = val; $$invalidate('_language', _language); return $$result; }]
  );

  async function handleLetterClick(letter) {
      document.documentElement.scrollTop = 0;
      $$invalidate('mounted', mounted = false);
      updateSelectedLetter(letter);
      await tick();
      
  }

  onMount(() => {$$invalidate('mounted', mounted = true);});

	function click_handler({ letter }) {
		return handleLetterClick(letter);
	}

	function click_handler_1({ letter }) {
		return handleLetterClick(letter);
	}

	let abc, aToZ, abcList, first15Entries, restOfEntries;

	$$self.$$.update = ($$dirty = { _alphabet: 1, _language: 1, abc: 1, aToZ: 1, _resultsByLetter: 1, mounted: 1 }) => {
		if ($$dirty._alphabet || $$dirty._language) { $$invalidate('abc', abc = _alphabet[_language.selected]); }
		if ($$dirty.abc) { $$invalidate('aToZ', aToZ = `${abc[0].toUpperCase()}-${abc[abc.length - 1].toUpperCase()}`); }
		if ($$dirty.aToZ || $$dirty.abc) { $$invalidate('abcList', abcList = [aToZ, ...abc.split('')]); }
		if ($$dirty._resultsByLetter) { first15Entries = _resultsByLetter.slice(0, 15); }
		if ($$dirty.mounted || $$dirty._resultsByLetter) { restOfEntries = (mounted && _resultsByLetter.length > 15) ? _resultsByLetter.slice(15) : []; }
	};

	return {
		_selectedLetter,
		_resultsByLetter,
		handleLetterClick,
		aToZ,
		abcList,
		click_handler,
		click_handler_1
	};
}

class Abc extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Abc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLjAyMTAzMWY1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FiYy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtvbk1vdW50LCB0aWNrfSBmcm9tICdzdmVsdGUnO1xyXG4gIGltcG9ydCB7Y29ubmVjdFN0b3Jlc30gZnJvbSAnLi4vc3RvcmUvdXRpbHMnO1xyXG4gIGltcG9ydCB7IGxvb2t1cCwgZGljdGlvbmFyeSB9IGZyb20gJy4uL3N0b3JlJztcclxuICBpbXBvcnQgV29yZENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ2FyZC5zdmVsdGUnO1xyXG5cclxuXHJcbiAgY29uc3QgeyB1cGRhdGVTZWxlY3RlZExldHRlciwgc2VsZWN0ZWRMZXR0ZXIsIHJlc3VsdHNCeUxldHRlciB9ID0gbG9va3VwO1xyXG4gIGNvbnN0IHsgYWxwaGFiZXQsIGxhbmd1YWdlIH0gPSBkaWN0aW9uYXJ5O1xyXG5cclxuICBsZXQgX3NlbGVjdGVkTGV0dGVyID0gJyc7ICBcclxuICBsZXQgX3Jlc3VsdHNCeUxldHRlciA9IFtdOyBcclxuICBsZXQgX2xhbmd1YWdlID0ge3NlbGVjdGVkOiAnYSd9OyBcclxuICBsZXQgX2FscGhhYmV0ID0ge2E6ICdhJ307IFxyXG4gIGxldCBtb3VudGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbm5lY3RTdG9yZXMoXHJcbiAgICBbc2VsZWN0ZWRMZXR0ZXIsIHZhbCA9PiBfc2VsZWN0ZWRMZXR0ZXIgPSB2YWxdLCBcclxuICAgIFtyZXN1bHRzQnlMZXR0ZXIsIHZhbCA9PiBfcmVzdWx0c0J5TGV0dGVyID0gdmFsXSwgXHJcbiAgICBbYWxwaGFiZXQsIHZhbCA9PiBfYWxwaGFiZXQgPSB2YWxdLCBcclxuICAgIFtsYW5ndWFnZSwgdmFsID0+IF9sYW5ndWFnZSA9IHZhbF1cclxuICApO1xyXG5cclxuICAkOiBhYmMgPSBfYWxwaGFiZXRbX2xhbmd1YWdlLnNlbGVjdGVkXTtcclxuICAkOiBhVG9aID0gYCR7YWJjWzBdLnRvVXBwZXJDYXNlKCl9LSR7YWJjW2FiYy5sZW5ndGggLSAxXS50b1VwcGVyQ2FzZSgpfWA7XHJcbiAgJDogYWJjTGlzdCA9IFthVG9aLCAuLi5hYmMuc3BsaXQoJycpXTtcclxuICAkOiBmaXJzdDE1RW50cmllcyA9IF9yZXN1bHRzQnlMZXR0ZXIuc2xpY2UoMCwgMTUpO1xyXG4gICQ6IHJlc3RPZkVudHJpZXMgPSAobW91bnRlZCAmJiBfcmVzdWx0c0J5TGV0dGVyLmxlbmd0aCA+IDE1KSA/IF9yZXN1bHRzQnlMZXR0ZXIuc2xpY2UoMTUpIDogW107XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUxldHRlckNsaWNrKGxldHRlcikge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgbW91bnRlZCA9IGZhbHNlO1xyXG4gICAgICB1cGRhdGVTZWxlY3RlZExldHRlcihsZXR0ZXIpO1xyXG4gICAgICBhd2FpdCB0aWNrKCk7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgb25Nb3VudCgoKSA9PiB7bW91bnRlZCA9IHRydWV9KTtcclxuPC9zY3JpcHQ+XHJcbiAgXHJcblxyXG5cclxueyNpZiBfc2VsZWN0ZWRMZXR0ZXIgJiYgX3NlbGVjdGVkTGV0dGVyICE9PSBhVG9afVxyXG4gIDxkaXYgY2xhc3M9XCJhei1jb250YWluZXJcIj5cclxuICAgIHsjZWFjaCBhYmNMaXN0IGFzIGxldHRlciwgaSAobGV0dGVyKX1cclxuICAgICAgPGRpdiBjbGFzcz1cImF6LWl0ZW1cIiBzZWxlY3RlZD17bGV0dGVyID09PSBfc2VsZWN0ZWRMZXR0ZXJ9IFxyXG4gICAgICAgIG9uOmNsaWNrPXsoKSA9PiBoYW5kbGVMZXR0ZXJDbGljayhsZXR0ZXIpfT5cclxuICAgICAgICB7bGV0dGVyfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIHsvZWFjaH1cclxuICA8L2Rpdj5cclxuICA8aDI+e19zZWxlY3RlZExldHRlci50b1VwcGVyQ2FzZSgpfTwvaDI+XHJcbiAgeyNpZiBfcmVzdWx0c0J5TGV0dGVyLmxlbmd0aCA9PT0gMH1cclxuICAgIDxoMz5ObyByZXN1bHRzIGZvciBcIntfc2VsZWN0ZWRMZXR0ZXIudG9VcHBlckNhc2UoKX1cIjwvaDM+XHJcbiAgey9pZn1cclxuICB7I2VhY2ggX3Jlc3VsdHNCeUxldHRlciBhcyB7ZW50cnksIG9wZW59LCBpIChlbnRyeS5faWQpfVxyXG4gICAgPFdvcmRDYXJkIHtvcGVufSB7ZW50cnl9IC8+XHJcbiAgey9lYWNofVxyXG5cclxuezplbHNlfVxyXG4gIDxkaXYgY2xhc3M9XCJhei1jb250YWluZXItb3BlblwiPlxyXG4gICAgeyNlYWNoIGFiY0xpc3Quc2xpY2UoMSkgYXMgbGV0dGVyLCBpIChsZXR0ZXIpfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXotaXRlbSBvcGVuXCIgc2VsZWN0ZWQ9e2xldHRlciA9PT0gX3NlbGVjdGVkTGV0dGVyfSBcclxuICAgICAgICBvbjpjbGljaz17KCkgPT4gaGFuZGxlTGV0dGVyQ2xpY2sobGV0dGVyKX0+XHJcbiAgICAgICAge2xldHRlcn1cclxuICAgICAgPC9kaXY+XHJcbiAgICB7L2VhY2h9XHJcbiAgPC9kaXY+XHJcbnsvaWZ9XHJcblxyXG5cclxuXHJcbjxzdHlsZT5cclxuICAqIHtcclxuICAgIC0tbmF2LWhlaWdodDogNDJweDtcclxuICB9XHJcblxyXG4gIC5hei1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogdmFyKC0tbmF2LWhlaWdodCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICB9XHJcblxyXG4gIC5hei1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgbWluLXdpZHRoOiA1NnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5hei1pdGVtW3NlbGVjdGVkPSd0cnVlJ10ge1xyXG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5hei1jb250YWluZXItb3BlbiB7XHJcbiAgICBwYWRkaW5nOiAzMHB4OyBcclxuICAgIG1hcmdpbjogLTMycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYXotaXRlbS5vcGVuIHtcclxuICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyAzNnB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBOERXLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs0QkFBZSxNQUFNOztrQ0FBMUM7Ozs7Ozs7Ozs7K0JBQUE7Ozs7Ozs7OytCQUFBOzs7Ozs7Ozs7Ozs7OzsrQkFBQTs7Ozs0QkFBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OytCQUFyQjs7Ozs7OzsrRUFWQyxlQUFlLENBQUMsV0FBVyxFQUFFOzt3QkFQekIsT0FBTzs7NEJBQWUsTUFBTTs7a0NBQWpDOzs7Ozs7cUJBUUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUM7O3NCQUczQixnQkFBZ0I7OzhCQUFzQixLQUFLLENBQUMsR0FBRzs7Z0NBQXBEOzs7Ozs7Ozs7O2lDQVhFOzs7Ozs7Ozs7K0JBV0Y7Ozs7Ozs7Ozs7aUNBWEU7Ozs7Ozs7Ozs7Ozs7OytCQVdGOzs7Ozs7Ozs7Ozs7Ozs7O2lDQVhFOzs7Ozs7Ozs7K0JBV0Y7Ozs7Ozs7NEJBWE8sT0FBTzs7OzZFQU9YLGVBQWUsQ0FBQyxXQUFXLEVBQUU7Ozs7V0FDN0IsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7MEJBRzNCLGdCQUFnQjs7Ozs7Ozs7O2tDQUFyQjs7Ozs7OytCQUFBOzs7Ozs7Ozs7O2lDQVhFOzs7Ozs7Ozs7Ozs7OzsrQkFXRjs7Ozs7Ozs7Ozs7eUJBU0ssTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUYyQixNQUFNLFNBQUssZUFBZTs7a0NBQ2xEOzs7Ozs7Ozs7Ozs7eURBQ1QsTUFBTTs7Ozt3R0FGMkIsTUFBTSxTQUFLLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQWYzRCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRnNCLE1BQU0sU0FBSyxlQUFlOztrQ0FDN0M7Ozs7Ozs7Ozs7Ozt5REFDVCxNQUFNOzs7O3dHQUZzQixNQUFNLFNBQUssZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBUXRDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQUE3QixlQUFlLENBQUMsV0FBVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR3ZDLElBQUk7YUFBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQUFaLElBQUk7OERBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQWR0QixlQUFlLFFBQUksZUFBZSxTQUFLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkM5QyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxHQUFHLE1BQU0sQ0FBQztFQUN6RSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLFVBQVUsQ0FBQzs7RUFFMUMsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0VBQ3pCLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0VBQzFCLElBQUksU0FBUyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQ2hDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQ3pCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQzs7RUFFcEIsYUFBYTtJQUNYLENBQUMsY0FBYyxFQUFFLEdBQUcsdUJBQUksZUFBZSxHQUFHLHlFQUFHLENBQUM7SUFDOUMsQ0FBQyxlQUFlLEVBQUUsR0FBRyx1QkFBSSxnQkFBZ0IsR0FBRywyRUFBRyxDQUFDO0lBQ2hELENBQUMsUUFBUSxFQUFFLEdBQUcsdUJBQUksU0FBUyxHQUFHLDZEQUFHLENBQUM7SUFDbEMsQ0FBQyxRQUFRLEVBQUUsR0FBRyx1QkFBSSxTQUFTLEdBQUcsNkRBQUcsQ0FBQztHQUNuQyxDQUFDOztFQVFGLGVBQWUsaUJBQWlCLENBQUMsTUFBTSxFQUFFO01BQ3JDLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzs4QkFDdkMsT0FBTyxHQUFHLE1BQUssQ0FBQztNQUNoQixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUM3QixNQUFNLElBQUksRUFBRSxDQUFDOztHQUVoQjs7RUFFRCxPQUFPLENBQUMsTUFBTSx5QkFBQyxPQUFPLEdBQUcsTUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztvRUFkN0IsR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFDLENBQUM7MENBQ3BDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDLENBQUM7NkRBQ3RFLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztrQ0FDbkMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7cURBQy9DLGFBQWEsR0FBRyxDQUFDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
