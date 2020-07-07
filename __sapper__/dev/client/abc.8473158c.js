import { M as onMount, S as SvelteComponentDev, a as init, s as safe_not_equal, D as empty, l as insert, v as transition_out, J as check_outros, u as transition_in, g as detach, I as group_outros, e as element, t as text, b as space, c as claim_element, d as children, f as claim_text, h as attr, k as add_location, o as listen, m as append, q as set_data, N as update_keyed_each, O as destroy_block, n as noop, p as mount_component, w as destroy_component, T as outro_and_destroy_block } from './index.8f9533bf.js';
import { l as lookup, d as dictionary } from './index.9b72adf6.js';
import { W as WordCard } from './WordCard.970eb167.js';

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

function get_each_context_3(ctx, list, i) {
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
	child_ctx.entry = list[i].entry;
	child_ctx.open = list[i].open;
	child_ctx.i = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.letter = list[i];
	child_ctx.i = i;
	return child_ctx;
}

// (65:0) {:else}
function create_else_block(ctx) {
	var div, each_blocks = [], each_1_lookup = new Map();

	var each_value_3 = ctx.abcList.slice(1);

	const get_key = ctx => ctx.letter;

	for (var i = 0; i < each_value_3.length; i += 1) {
		let child_ctx = get_each_context_3(ctx, each_value_3, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_3(key, child_ctx));
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
			attr(div, "class", "az-container-open svelte-1c99a9o");
			add_location(div, file, 65, 2, 1965);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(div, null);
		},

		p: function update(changed, ctx) {
			const each_value_3 = ctx.abcList.slice(1);
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value_3, each_1_lookup, div, destroy_block, create_each_block_3, null, get_each_context_3);
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
	var div, each_blocks_2 = [], each0_lookup = new Map(), t0, h2, t1_value = ctx._selectedLetter.toUpperCase() + "", t1, t2, t3, each_blocks_1 = [], each1_lookup = new Map(), t4, each_blocks = [], each2_lookup = new Map(), each2_anchor, current;

	var each_value_2 = ctx.abcList;

	const get_key = ctx => ctx.letter;

	for (var i = 0; i < each_value_2.length; i += 1) {
		let child_ctx = get_each_context_2(ctx, each_value_2, i);
		let key = get_key(child_ctx);
		each0_lookup.set(key, each_blocks_2[i] = create_each_block_2(key, child_ctx));
	}

	var if_block = (ctx._resultsByLetter.length === 0) && create_if_block_1(ctx);

	var each_value_1 = ctx.first10Entries;

	const get_key_1 = ctx => ctx.entry._id;

	for (var i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key_1(child_ctx);
		each1_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
	}

	var each_value = ctx.restOfEntries;

	const get_key_2 = ctx => ctx.entry._id;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key_2(child_ctx);
		each2_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c: function create() {
			div = element("div");

			for (i = 0; i < each_blocks_2.length; i += 1) each_blocks_2[i].c();

			t0 = space();
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			if (if_block) if_block.c();
			t3 = space();

			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].c();

			t4 = space();

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();

			each2_anchor = empty();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			for (i = 0; i < each_blocks_2.length; i += 1) each_blocks_2[i].l(div_nodes);

			div_nodes.forEach(detach);
			t0 = claim_text(nodes, "\r\n  ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach);
			t2 = claim_text(nodes, "\r\n  ");
			if (if_block) if_block.l(nodes);
			t3 = claim_text(nodes, "\r\n  ");

			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].l(nodes);

			t4 = claim_text(nodes, "\r\n\r\n  ");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].l(nodes);

			each2_anchor = empty();
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "az-container svelte-1c99a9o");
			add_location(div, file, 44, 2, 1346);
			attr(h2, "class", "svelte-1c99a9o");
			add_location(h2, file, 52, 2, 1594);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);

			for (i = 0; i < each_blocks_2.length; i += 1) each_blocks_2[i].m(div, null);

			insert(target, t0, anchor);
			insert(target, h2, anchor);
			append(h2, t1);
			insert(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, t3, anchor);

			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].m(target, anchor);

			insert(target, t4, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(target, anchor);

			insert(target, each2_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			const each_value_2 = ctx.abcList;
			each_blocks_2 = update_keyed_each(each_blocks_2, changed, get_key, 1, ctx, each_value_2, each0_lookup, div, destroy_block, create_each_block_2, null, get_each_context_2);

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

			const each_value_1 = ctx.first10Entries;

			group_outros();
			each_blocks_1 = update_keyed_each(each_blocks_1, changed, get_key_1, 1, ctx, each_value_1, each1_lookup, t4.parentNode, outro_and_destroy_block, create_each_block_1, t4, get_each_context_1);
			check_outros();

			const each_value = ctx.restOfEntries;

			group_outros();
			each_blocks = update_keyed_each(each_blocks, changed, get_key_2, 1, ctx, each_value, each2_lookup, each2_anchor.parentNode, outro_and_destroy_block, create_each_block, each2_anchor, get_each_context);
			check_outros();
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value_1.length; i += 1) transition_in(each_blocks_1[i]);

			for (var i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);

			current = true;
		},

		o: function outro(local) {
			for (i = 0; i < each_blocks_1.length; i += 1) transition_out(each_blocks_1[i]);

			for (i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			for (i = 0; i < each_blocks_2.length; i += 1) each_blocks_2[i].d();

			if (detaching) {
				detach(t0);
				detach(h2);
				detach(t2);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach(t3);
			}

			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].d(detaching);

			if (detaching) {
				detach(t4);
			}

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d(detaching);

			if (detaching) {
				detach(each2_anchor);
			}
		}
	};
}

// (67:4) {#each abcList.slice(1) as letter, i (letter)}
function create_each_block_3(key_1, ctx) {
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
			attr(div, "class", "az-item open svelte-1c99a9o");
			attr(div, "selected", div_selected_value = ctx.letter === ctx._selectedLetter);
			add_location(div, file, 67, 6, 2056);
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
function create_each_block_2(key_1, ctx) {
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
			attr(div, "class", "az-item svelte-1c99a9o");
			attr(div, "selected", div_selected_value = ctx.letter === ctx._selectedLetter);
			add_location(div, file, 46, 6, 1423);
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
			attr(h3, "class", "svelte-1c99a9o");
			add_location(h3, file, 54, 4, 1679);
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

// (57:2) {#each first10Entries as {entry, open}
function create_each_block_1(key_1, ctx) {
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
			if (changed.first10Entries) wordcard_changes.open = ctx.open;
			if (changed.first10Entries) wordcard_changes.entry = ctx.entry;
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

// (61:2) {#each restOfEntries as {entry, open}
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
			if (changed.restOfEntries) wordcard_changes.open = ctx.open;
			if (changed.restOfEntries) wordcard_changes.entry = ctx.entry;
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
  let renderAll = false;

  connectStores(
    [selectedLetter, val => { const $$result = _selectedLetter = val; $$invalidate('_selectedLetter', _selectedLetter); return $$result; }], 
    [resultsByLetter, val => { const $$result = _resultsByLetter = val; $$invalidate('_resultsByLetter', _resultsByLetter); return $$result; }], 
    [alphabet, val => { const $$result = _alphabet = val; $$invalidate('_alphabet', _alphabet); return $$result; }], 
    [language, val => { const $$result = _language = val; $$invalidate('_language', _language); return $$result; }]
  );

  function handleLetterClick(letter) {
      document.documentElement.scrollTop = 0;
      $$invalidate('renderAll', renderAll = false);
      updateSelectedLetter(letter);
      setTimeout(() => { const $$result = renderAll = true; $$invalidate('renderAll', renderAll); return $$result; }, 2);
      
  }

  onMount(() => {$$invalidate('renderAll', renderAll = true);});

	function click_handler({ letter }) {
		return handleLetterClick(letter);
	}

	function click_handler_1({ letter }) {
		return handleLetterClick(letter);
	}

	let abc, aToZ, abcList, first10Entries, restOfEntries;

	$$self.$$.update = ($$dirty = { _alphabet: 1, _language: 1, abc: 1, aToZ: 1, _resultsByLetter: 1, renderAll: 1 }) => {
		if ($$dirty._alphabet || $$dirty._language) { $$invalidate('abc', abc = _alphabet[_language.selected]); }
		if ($$dirty.abc) { $$invalidate('aToZ', aToZ = `${abc[0].toUpperCase()}-${abc[abc.length - 1].toUpperCase()}`); }
		if ($$dirty.aToZ || $$dirty.abc) { $$invalidate('abcList', abcList = [aToZ, ...abc.split('')]); }
		if ($$dirty._resultsByLetter) { $$invalidate('first10Entries', first10Entries = _resultsByLetter.slice(0, 10)); }
		if ($$dirty.renderAll || $$dirty._resultsByLetter) { $$invalidate('restOfEntries', restOfEntries = (renderAll && _resultsByLetter.length > 10) ? _resultsByLetter.slice(10) : []); }
	};

	return {
		_selectedLetter,
		_resultsByLetter,
		handleLetterClick,
		aToZ,
		abcList,
		first10Entries,
		restOfEntries,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLjg0NzMxNThjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FiYy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xyXG4gIGltcG9ydCB7Y29ubmVjdFN0b3Jlc30gZnJvbSAnLi4vc3RvcmUvdXRpbHMnO1xyXG4gIGltcG9ydCB7IGxvb2t1cCwgZGljdGlvbmFyeSB9IGZyb20gJy4uL3N0b3JlJztcclxuICBpbXBvcnQgV29yZENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ2FyZC5zdmVsdGUnO1xyXG5cclxuXHJcbiAgY29uc3QgeyB1cGRhdGVTZWxlY3RlZExldHRlciwgc2VsZWN0ZWRMZXR0ZXIsIHJlc3VsdHNCeUxldHRlciB9ID0gbG9va3VwO1xyXG4gIGNvbnN0IHsgYWxwaGFiZXQsIGxhbmd1YWdlIH0gPSBkaWN0aW9uYXJ5O1xyXG5cclxuICBsZXQgX3NlbGVjdGVkTGV0dGVyID0gJyc7ICBcclxuICBsZXQgX3Jlc3VsdHNCeUxldHRlciA9IFtdOyBcclxuICBsZXQgX2xhbmd1YWdlID0ge3NlbGVjdGVkOiAnYSd9OyBcclxuICBsZXQgX2FscGhhYmV0ID0ge2E6ICdhJ307IFxyXG4gIGxldCByZW5kZXJBbGwgPSBmYWxzZTtcclxuXHJcbiAgY29ubmVjdFN0b3JlcyhcclxuICAgIFtzZWxlY3RlZExldHRlciwgdmFsID0+IF9zZWxlY3RlZExldHRlciA9IHZhbF0sIFxyXG4gICAgW3Jlc3VsdHNCeUxldHRlciwgdmFsID0+IF9yZXN1bHRzQnlMZXR0ZXIgPSB2YWxdLCBcclxuICAgIFthbHBoYWJldCwgdmFsID0+IF9hbHBoYWJldCA9IHZhbF0sIFxyXG4gICAgW2xhbmd1YWdlLCB2YWwgPT4gX2xhbmd1YWdlID0gdmFsXVxyXG4gICk7XHJcblxyXG4gICQ6IGFiYyA9IF9hbHBoYWJldFtfbGFuZ3VhZ2Uuc2VsZWN0ZWRdO1xyXG4gICQ6IGFUb1ogPSBgJHthYmNbMF0udG9VcHBlckNhc2UoKX0tJHthYmNbYWJjLmxlbmd0aCAtIDFdLnRvVXBwZXJDYXNlKCl9YDtcclxuICAkOiBhYmNMaXN0ID0gW2FUb1osIC4uLmFiYy5zcGxpdCgnJyldO1xyXG4gICQ6IGZpcnN0MTBFbnRyaWVzID0gX3Jlc3VsdHNCeUxldHRlci5zbGljZSgwLCAxMCk7XHJcbiAgJDogcmVzdE9mRW50cmllcyA9IChyZW5kZXJBbGwgJiYgX3Jlc3VsdHNCeUxldHRlci5sZW5ndGggPiAxMCkgPyBfcmVzdWx0c0J5TGV0dGVyLnNsaWNlKDEwKSA6IFtdO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVMZXR0ZXJDbGljayhsZXR0ZXIpIHtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgIHJlbmRlckFsbCA9IGZhbHNlO1xyXG4gICAgICB1cGRhdGVTZWxlY3RlZExldHRlcihsZXR0ZXIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlbmRlckFsbCA9IHRydWUsIDIpXHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgb25Nb3VudCgoKSA9PiB7cmVuZGVyQWxsID0gdHJ1ZX0pO1xyXG48L3NjcmlwdD5cclxuICBcclxuXHJcblxyXG57I2lmIF9zZWxlY3RlZExldHRlciAmJiBfc2VsZWN0ZWRMZXR0ZXIgIT09IGFUb1p9XHJcbiAgPGRpdiBjbGFzcz1cImF6LWNvbnRhaW5lclwiPlxyXG4gICAgeyNlYWNoIGFiY0xpc3QgYXMgbGV0dGVyLCBpIChsZXR0ZXIpfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXotaXRlbVwiIHNlbGVjdGVkPXtsZXR0ZXIgPT09IF9zZWxlY3RlZExldHRlcn0gXHJcbiAgICAgICAgb246Y2xpY2s9eygpID0+IGhhbmRsZUxldHRlckNsaWNrKGxldHRlcil9PlxyXG4gICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey9lYWNofVxyXG4gIDwvZGl2PlxyXG4gIDxoMj57X3NlbGVjdGVkTGV0dGVyLnRvVXBwZXJDYXNlKCl9PC9oMj5cclxuICB7I2lmIF9yZXN1bHRzQnlMZXR0ZXIubGVuZ3RoID09PSAwfVxyXG4gICAgPGgzPk5vIHJlc3VsdHMgZm9yIFwie19zZWxlY3RlZExldHRlci50b1VwcGVyQ2FzZSgpfVwiPC9oMz5cclxuICB7L2lmfVxyXG4gIHsjZWFjaCBmaXJzdDEwRW50cmllcyBhcyB7ZW50cnksIG9wZW59LCBpIChlbnRyeS5faWQpfVxyXG4gICAgPFdvcmRDYXJkIHtvcGVufSB7ZW50cnl9IC8+XHJcbiAgey9lYWNofVxyXG5cclxuICB7I2VhY2ggcmVzdE9mRW50cmllcyBhcyB7ZW50cnksIG9wZW59LCBpIChlbnRyeS5faWQpfVxyXG4gICAgPFdvcmRDYXJkIHtvcGVufSB7ZW50cnl9IC8+XHJcbiAgey9lYWNofVxyXG5cclxuezplbHNlfVxyXG4gIDxkaXYgY2xhc3M9XCJhei1jb250YWluZXItb3BlblwiPlxyXG4gICAgeyNlYWNoIGFiY0xpc3Quc2xpY2UoMSkgYXMgbGV0dGVyLCBpIChsZXR0ZXIpfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXotaXRlbSBvcGVuXCIgc2VsZWN0ZWQ9e2xldHRlciA9PT0gX3NlbGVjdGVkTGV0dGVyfSBcclxuICAgICAgICBvbjpjbGljaz17KCkgPT4gaGFuZGxlTGV0dGVyQ2xpY2sobGV0dGVyKX0+XHJcbiAgICAgICAge2xldHRlcn1cclxuICAgICAgPC9kaXY+XHJcbiAgICB7L2VhY2h9XHJcbiAgPC9kaXY+XHJcbnsvaWZ9XHJcblxyXG5cclxuXHJcbjxzdHlsZT5cclxuICAqIHtcclxuICAgIC0tbmF2LWhlaWdodDogNDJweDtcclxuICB9XHJcblxyXG4gIC5hei1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogdmFyKC0tbmF2LWhlaWdodCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICB9XHJcblxyXG4gIC5hei1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgbWluLXdpZHRoOiA1NnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5hei1pdGVtW3NlbGVjdGVkPSd0cnVlJ10ge1xyXG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5hei1jb250YWluZXItb3BlbiB7XHJcbiAgICBwYWRkaW5nOiAzMHB4OyBcclxuICAgIG1hcmdpbjogLTMycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYXotaXRlbS5vcGVuIHtcclxuICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyAzNnB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFrRVcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OzRCQUFlLE1BQU07O2tDQUExQzs7Ozs7Ozs7OzsrQkFBQTs7Ozs7Ozs7K0JBQUE7Ozs7Ozs7Ozs7Ozs7OytCQUFBOzs7OzRCQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7K0JBQXJCOzs7Ozs7OytFQWRDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7O3dCQVB6QixPQUFPOzs0QkFBZSxNQUFNOztrQ0FBakM7Ozs7OztxQkFRQyxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQzs7d0JBRzNCLGNBQWM7OzhCQUFzQixLQUFLLENBQUMsR0FBRzs7a0NBQWxEOzs7Ozs7c0JBSUssYUFBYTs7OEJBQXNCLEtBQUssQ0FBQyxHQUFHOztnQ0FBakQ7Ozs7Ozs7Ozs7aUNBZkU7Ozs7Ozs7OztpQ0FXRjs7OzsrQkFJQTs7Ozs7Ozs7OztpQ0FmRTs7Ozs7Ozs7Ozs7Ozs7aUNBV0Y7Ozs7K0JBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBZkU7Ozs7Ozs7OztpQ0FXRjs7OzsrQkFJQTs7Ozs7Ozs0QkFmTyxPQUFPOzs7NkVBT1gsZUFBZSxDQUFDLFdBQVcsRUFBRTs7OztXQUM3QixnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs0QkFHM0IsY0FBYzs7Ozs7OzBCQUlkLGFBQWE7Ozs7Ozs7OztvQ0FKbEI7O2tDQUlBOzs7Ozs7aUNBSkE7OytCQUlBOzs7Ozs7Ozs7O2lDQWZFOzs7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
