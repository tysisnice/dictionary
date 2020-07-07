import { S as SvelteComponentDev, a as init, s as safe_not_equal, D as empty, k as insert, p as transition_out, J as check_outros, o as transition_in, g as detach, V as beforeUpdate, I as group_outros, e as element, t as text, b as space, c as claim_element, d as children, f as claim_text, h as attr, j as add_location, v as listen, l as append, w as set_data, N as update_keyed_each, O as destroy_block, n as noop, m as mount_component, q as destroy_component, W as handle_promise, T as outro_and_destroy_block, E as assign } from './index.42697b0b.js';
import { l as lookup, d as dictionary } from './index.740af30a.js';
import { W as WordCard } from './WordCard.20a7419a.js';
import { a as connectStores } from './utils.1334c23a.js';

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

// (62:0) {:else}
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
			attr(div, "class", "az-container-open svelte-fognfe");
			add_location(div, file, 62, 2, 1915);
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

// (35:0) {#if _selectedLetter && _selectedLetter !== aToZ}
function create_if_block(ctx) {
	var div, each_blocks_1 = [], each0_lookup = new Map(), t0, h2, t1_value = ctx._selectedLetter.toUpperCase() + "", t1, t2, t3, each_blocks = [], each1_lookup = new Map(), t4, await_block_anchor, promise, current;

	var each_value_2 = ctx.abcList;

	const get_key = ctx => ctx.letter;

	for (var i = 0; i < each_value_2.length; i += 1) {
		let child_ctx = get_each_context_2(ctx, each_value_2, i);
		let key = get_key(child_ctx);
		each0_lookup.set(key, each_blocks_1[i] = create_each_block_2(key, child_ctx));
	}

	var if_block = (ctx._resultsByLetter.length === 0) && create_if_block_1(ctx);

	var each_value_1 = ctx.first10Entries;

	const get_key_1 = ctx => ctx.entry._id;

	for (var i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key_1(child_ctx);
		each1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
	}

	let info = {
		ctx,
		current: null,
		token: null,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 'value',
		error: 'error',
		blocks: [,,,]
	};

	handle_promise(promise = new Promise(ctx.func), info);

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

			t4 = space();
			await_block_anchor = empty();

			info.block.c();
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

			t4 = claim_text(nodes, "\r\n\r\n    ");
			await_block_anchor = empty();

			info.block.l(nodes);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "az-container svelte-fognfe");
			add_location(div, file, 35, 2, 1124);
			attr(h2, "class", "svelte-fognfe");
			add_location(h2, file, 43, 2, 1375);
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

			insert(target, t4, anchor);
			insert(target, await_block_anchor, anchor);

			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;

			current = true;
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			const each_value_2 = ctx.abcList;
			each_blocks_1 = update_keyed_each(each_blocks_1, changed, get_key, 1, ctx, each_value_2, each0_lookup, div, destroy_block, create_each_block_2, null, get_each_context_2);

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
			each_blocks = update_keyed_each(each_blocks, changed, get_key_1, 1, ctx, each_value_1, each1_lookup, t4.parentNode, outro_and_destroy_block, create_each_block_1, t4, get_each_context_1);
			check_outros();

			info.ctx = ctx;

			if (promise !== (promise = new Promise(ctx.func)) && handle_promise(promise, info)) ; else {
				info.block.p(changed, assign(assign({}, ctx), info.resolved));
			}
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value_1.length; i += 1) transition_in(each_blocks[i]);

			transition_in(info.block);
			current = true;
		},

		o: function outro(local) {
			for (i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);

			for (let i = 0; i < 3; i += 1) {
				const block = info.blocks[i];
				transition_out(block);
			}

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
				detach(t4);
				detach(await_block_anchor);
			}

			info.block.d(detaching);
			info.token = null;
			info = null;
		}
	};
}

// (64:4) {#each abcList.slice(1) as letter, i (letter)}
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
			attr(div, "class", "az-item open svelte-fognfe");
			attr(div, "selected", div_selected_value = ctx.letter === ctx._selectedLetter);
			add_location(div, file, 64, 6, 2006);
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

// (37:4) {#each abcList as letter, i (letter)}
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
			attr(div, "class", "az-item svelte-fognfe");
			attr(div, "selected", div_selected_value = ctx.letter === ctx._selectedLetter);
			add_location(div, file, 37, 6, 1201);
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

// (45:2) {#if _resultsByLetter.length === 0}
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
			attr(h3, "class", "svelte-fognfe");
			add_location(h3, file, 45, 4, 1460);
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

// (48:2) {#each first10Entries as {entry, open}
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

// (58:6) {:catch error}
function create_catch_block(ctx) {
	var div;

	return {
		c: function create() {
			div = element("div");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "svelte-fognfe");
			add_location(div, file, 58, 6, 1875);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
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

// (54:6) {:then value}
function create_then_block(ctx) {
	var each_blocks = [], each_1_lookup = new Map(), each_1_anchor, current;

	var each_value = ctx.restOfEntries;

	const get_key = ctx => ctx.entry._id;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c: function create() {
			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();

			each_1_anchor = empty();
		},

		l: function claim(nodes) {
			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].l(nodes);

			each_1_anchor = empty();
		},

		m: function mount(target, anchor) {
			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(target, anchor);

			insert(target, each_1_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			const each_value = ctx.restOfEntries;

			group_outros();
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
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
			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d(detaching);

			if (detaching) {
				detach(each_1_anchor);
			}
		}
	};
}

// (55:8) {#each restOfEntries as {entry, open}
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

// (52:52)         <div></div>        {:then value}
function create_pending_block(ctx) {
	var div;

	return {
		c: function create() {
			div = element("div");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "svelte-fognfe");
			add_location(div, file, 52, 6, 1692);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
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

  connectStores(
    [selectedLetter, val => { const $$result = _selectedLetter = val; $$invalidate('_selectedLetter', _selectedLetter); return $$result; }], 
    [resultsByLetter, val => { const $$result = _resultsByLetter = val; $$invalidate('_resultsByLetter', _resultsByLetter); return $$result; }], 
    [alphabet, val => { const $$result = _alphabet = val; $$invalidate('_alphabet', _alphabet); return $$result; }], 
    [language, val => { const $$result = _language = val; $$invalidate('_language', _language); return $$result; }]
  );

  beforeUpdate(() => document.documentElement.scrollTop = 0);

	function click_handler({ letter }) {
		return updateSelectedLetter(letter);
	}

	function func(res) {
		return setTimeout(res, 10);
	}

	function click_handler_1({ letter }) {
		return updateSelectedLetter(letter);
	}

	let abc, aToZ, abcList, first10Entries, restOfEntries;

	$$self.$$.update = ($$dirty = { _alphabet: 1, _language: 1, abc: 1, aToZ: 1, _resultsByLetter: 1 }) => {
		if ($$dirty._alphabet || $$dirty._language) { $$invalidate('abc', abc = _alphabet[_language.selected]); }
		if ($$dirty.abc) { $$invalidate('aToZ', aToZ = `${abc[0].toUpperCase()}-${abc[abc.length - 1].toUpperCase()}`); }
		if ($$dirty.aToZ || $$dirty.abc) { $$invalidate('abcList', abcList = [aToZ, ...abc.split('')]); }
		if ($$dirty._resultsByLetter) { $$invalidate('first10Entries', first10Entries = _resultsByLetter.slice(0, 10)); }
		if ($$dirty._resultsByLetter) { $$invalidate('restOfEntries', restOfEntries = _resultsByLetter.length > 10 ? _resultsByLetter.slice(10) : []); }
	};

	return {
		updateSelectedLetter,
		_selectedLetter,
		_resultsByLetter,
		aToZ,
		abcList,
		first10Entries,
		restOfEntries,
		click_handler,
		func,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLmYwMzJlZTYyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FiYy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtiZWZvcmVVcGRhdGV9IGZyb20gJ3N2ZWx0ZSc7XHJcbiAgaW1wb3J0IHtjb25uZWN0U3RvcmVzfSBmcm9tICcuLi9zdG9yZS91dGlscyc7XHJcbiAgaW1wb3J0IHsgbG9va3VwLCBkaWN0aW9uYXJ5IH0gZnJvbSAnLi4vc3RvcmUnO1xyXG4gIGltcG9ydCBXb3JkQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRDYXJkLnN2ZWx0ZSc7XHJcblxyXG5cclxuICBjb25zdCB7IHVwZGF0ZVNlbGVjdGVkTGV0dGVyLCBzZWxlY3RlZExldHRlciwgcmVzdWx0c0J5TGV0dGVyIH0gPSBsb29rdXA7XHJcbiAgY29uc3QgeyBhbHBoYWJldCwgbGFuZ3VhZ2UgfSA9IGRpY3Rpb25hcnk7XHJcblxyXG4gIGxldCBfc2VsZWN0ZWRMZXR0ZXIgPSAnJzsgIFxyXG4gIGxldCBfcmVzdWx0c0J5TGV0dGVyID0gW107IFxyXG4gIGxldCBfbGFuZ3VhZ2UgPSB7c2VsZWN0ZWQ6ICdhJ307IFxyXG4gIGxldCBfYWxwaGFiZXQgPSB7YTogJ2EnfTsgXHJcblxyXG4gIGNvbm5lY3RTdG9yZXMoXHJcbiAgICBbc2VsZWN0ZWRMZXR0ZXIsIHZhbCA9PiBfc2VsZWN0ZWRMZXR0ZXIgPSB2YWxdLCBcclxuICAgIFtyZXN1bHRzQnlMZXR0ZXIsIHZhbCA9PiBfcmVzdWx0c0J5TGV0dGVyID0gdmFsXSwgXHJcbiAgICBbYWxwaGFiZXQsIHZhbCA9PiBfYWxwaGFiZXQgPSB2YWxdLCBcclxuICAgIFtsYW5ndWFnZSwgdmFsID0+IF9sYW5ndWFnZSA9IHZhbF1cclxuICApO1xyXG5cclxuICAkOiBhYmMgPSBfYWxwaGFiZXRbX2xhbmd1YWdlLnNlbGVjdGVkXTtcclxuICAkOiBhVG9aID0gYCR7YWJjWzBdLnRvVXBwZXJDYXNlKCl9LSR7YWJjW2FiYy5sZW5ndGggLSAxXS50b1VwcGVyQ2FzZSgpfWA7XHJcbiAgJDogYWJjTGlzdCA9IFthVG9aLCAuLi5hYmMuc3BsaXQoJycpXTtcclxuICAkOiBmaXJzdDEwRW50cmllcyA9IF9yZXN1bHRzQnlMZXR0ZXIuc2xpY2UoMCwgMTApO1xyXG4gICQ6IHJlc3RPZkVudHJpZXMgPSBfcmVzdWx0c0J5TGV0dGVyLmxlbmd0aCA+IDEwID8gX3Jlc3VsdHNCeUxldHRlci5zbGljZSgxMCkgOiBbXTtcclxuXHJcbiAgYmVmb3JlVXBkYXRlKCgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwKVxyXG48L3NjcmlwdD5cclxuICBcclxuXHJcblxyXG57I2lmIF9zZWxlY3RlZExldHRlciAmJiBfc2VsZWN0ZWRMZXR0ZXIgIT09IGFUb1p9XHJcbiAgPGRpdiBjbGFzcz1cImF6LWNvbnRhaW5lclwiPlxyXG4gICAgeyNlYWNoIGFiY0xpc3QgYXMgbGV0dGVyLCBpIChsZXR0ZXIpfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXotaXRlbVwiIHNlbGVjdGVkPXtsZXR0ZXIgPT09IF9zZWxlY3RlZExldHRlcn0gXHJcbiAgICAgICAgb246Y2xpY2s9eygpID0+IHVwZGF0ZVNlbGVjdGVkTGV0dGVyKGxldHRlcil9PlxyXG4gICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey9lYWNofVxyXG4gIDwvZGl2PlxyXG4gIDxoMj57X3NlbGVjdGVkTGV0dGVyLnRvVXBwZXJDYXNlKCl9PC9oMj5cclxuICB7I2lmIF9yZXN1bHRzQnlMZXR0ZXIubGVuZ3RoID09PSAwfVxyXG4gICAgPGgzPk5vIHJlc3VsdHMgZm9yIFwie19zZWxlY3RlZExldHRlci50b1VwcGVyQ2FzZSgpfVwiPC9oMz5cclxuICB7L2lmfVxyXG4gIHsjZWFjaCBmaXJzdDEwRW50cmllcyBhcyB7ZW50cnksIG9wZW59LCBpIChlbnRyeS5faWQpfVxyXG4gICAgPFdvcmRDYXJkIHtvcGVufSB7ZW50cnl9IC8+XHJcbiAgey9lYWNofVxyXG5cclxuICAgIHsjYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCAxMCkpfVxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICB7OnRoZW4gdmFsdWV9XHJcbiAgICAgICAgeyNlYWNoIHJlc3RPZkVudHJpZXMgYXMge2VudHJ5LCBvcGVufSwgaSAoZW50cnkuX2lkKX1cclxuICAgICAgICAgICAgPFdvcmRDYXJkIHtvcGVufSB7ZW50cnl9IC8+XHJcbiAgICAgICAgey9lYWNofVxyXG4gICAgICB7OmNhdGNoIGVycm9yfVxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgey9hd2FpdH1cclxuXHJcbns6ZWxzZX1cclxuICA8ZGl2IGNsYXNzPVwiYXotY29udGFpbmVyLW9wZW5cIj5cclxuICAgIHsjZWFjaCBhYmNMaXN0LnNsaWNlKDEpIGFzIGxldHRlciwgaSAobGV0dGVyKX1cclxuICAgICAgPGRpdiBjbGFzcz1cImF6LWl0ZW0gb3BlblwiIHNlbGVjdGVkPXtsZXR0ZXIgPT09IF9zZWxlY3RlZExldHRlcn0gXHJcbiAgICAgICAgb246Y2xpY2s9eygpID0+IHVwZGF0ZVNlbGVjdGVkTGV0dGVyKGxldHRlcil9PlxyXG4gICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey9lYWNofVxyXG4gIDwvZGl2PlxyXG57L2lmfVxyXG5cclxuXHJcblxyXG48c3R5bGU+XHJcbiAgKiB7XHJcbiAgICAtLW5hdi1oZWlnaHQ6IDQycHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgfVxyXG5cclxuICAuYXotY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IHZhcigtLW5hdi1oZWlnaHQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNjZweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgfVxyXG5cclxuICAuYXotaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDMxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjZweDtcclxuICAgIG1pbi13aWR0aDogNTZweDtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIC5hei1pdGVtW3NlbGVjdGVkPSd0cnVlJ10ge1xyXG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5hei1jb250YWluZXItb3BlbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDVweCAxNXB4IDVweDsgXHJcbiAgICBtYXJnaW46IC0zMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgfVxyXG5cclxuICAuYXotaXRlbS5vcGVuIHtcclxuICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyAzNnB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkErRFcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OzRCQUFlLE1BQU07O2tDQUExQzs7Ozs7Ozs7OzsrQkFBQTs7Ozs7Ozs7K0JBQUE7Ozs7Ozs7Ozs7Ozs7OytCQUFBOzs7OzRCQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7K0JBQXJCOzs7Ozs7OytFQXBCQyxlQUFlLENBQUMsV0FBVyxFQUFFOzt3QkFQekIsT0FBTzs7NEJBQWUsTUFBTTs7a0NBQWpDOzs7Ozs7cUJBUUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUM7O3dCQUczQixjQUFjOzs4QkFBc0IsS0FBSyxDQUFDLEdBQUc7O2tDQUFsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlRLElBQUksT0FBTyxDQUFDLFFBQTBCLENBQUM7Ozs7OztpQ0FmN0M7Ozs7Ozs7OzsrQkFXRjs7Ozs7Ozs7Ozs7OztpQ0FYRTs7Ozs7Ozs7Ozs7Ozs7K0JBV0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBWEU7Ozs7Ozs7OzsrQkFXRjs7Ozs7Ozs7Ozs7Ozs7NEJBWE8sT0FBTzs7OzZFQU9YLGVBQWUsQ0FBQyxXQUFXLEVBQUU7Ozs7V0FDN0IsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7NEJBRzNCLGNBQWM7Ozs7Ozs7OzhCQUlYLElBQUksT0FBTyxDQUFDLFFB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
