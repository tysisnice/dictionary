import { S as SvelteComponentDev, a as init, s as safe_not_equal, b as space, e as element, f as claim_text, c as claim_element, d as children, g as detach, h as attr, j as add_location, k as insert, p as transition_out, J as check_outros, o as transition_in, V as beforeUpdate, C as globals, I as group_outros, t as text, v as listen, l as append, w as set_data, N as update_keyed_each, O as destroy_block, n as noop, D as empty, m as mount_component, q as destroy_component, W as handle_promise, P as outro_and_destroy_block, E as assign } from './index.218ba847.js';
import { l as lookup, d as dictionary } from './index.ae07b206.js';
import { W as WordCard } from './WordCard.60fb91fd.js';
import { a as connectStores } from './utils.0e0838d2.js';

/* src\routes\abc.svelte generated by Svelte v3.9.0 */
const { document: document_1 } = globals;

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
			attr(div, "class", "az-container-open svelte-ds36gw");
			add_location(div, file, 65, 2, 1986);
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

// (38:0) {#if _selectedLetter && _selectedLetter !== aToZ}
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
			attr(div, "class", "az-container svelte-ds36gw");
			add_location(div, file, 38, 2, 1195);
			attr(h2, "class", "svelte-ds36gw");
			add_location(h2, file, 46, 2, 1446);
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
			attr(div, "class", "az-item open svelte-ds36gw");
			attr(div, "selected", div_selected_value = ctx.letter === ctx._selectedLetter);
			add_location(div, file, 67, 6, 2077);
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

// (40:4) {#each abcList as letter, i (letter)}
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
			attr(div, "class", "az-item svelte-ds36gw");
			attr(div, "selected", div_selected_value = ctx.letter === ctx._selectedLetter);
			add_location(div, file, 40, 6, 1272);
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

// (48:2) {#if _resultsByLetter.length === 0}
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
			attr(h3, "class", "svelte-ds36gw");
			add_location(h3, file, 48, 4, 1531);
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

// (51:2) {#each first10Entries as {entry, open}
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

// (61:6) {:catch error}
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
			attr(div, "class", "svelte-ds36gw");
			add_location(div, file, 61, 6, 1946);
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

// (57:6) {:then value}
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

// (58:8) {#each restOfEntries as {entry, open}
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

// (55:52)         <div></div>        {:then value}
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
			attr(div, "class", "svelte-ds36gw");
			add_location(div, file, 55, 6, 1763);
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
	var t0, current_block_type_index, if_block, t1, div, current;

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
			t0 = space();
			if_block.c();
			t1 = space();
			div = element("div");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\r\n\r\n\r\n  \r\n\r\n\r\n");
			if_block.l(nodes);
			t1 = claim_text(nodes, "\r\n\r\n");

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document_1.title = "Mien Language - Lookup";
			attr(div, "class", "filler svelte-ds36gw");
			add_location(div, file, 75, 0, 2263);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, t1, anchor);
			insert(target, div, anchor);
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
				if_block.m(t1.parentNode, t1);
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
			if (detaching) {
				detach(t0);
			}

			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				detach(t1);
				detach(div);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJjLjQ4Zjg3ZDg0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FiYy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT5NaWVuIExhbmd1YWdlIC0gTG9va3VwPC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtiZWZvcmVVcGRhdGV9IGZyb20gJ3N2ZWx0ZSc7XHJcbiAgaW1wb3J0IHtjb25uZWN0U3RvcmVzfSBmcm9tICcuLi9zdG9yZS91dGlscyc7XHJcbiAgaW1wb3J0IHsgbG9va3VwLCBkaWN0aW9uYXJ5IH0gZnJvbSAnLi4vc3RvcmUnO1xyXG4gIGltcG9ydCBXb3JkQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRDYXJkLnN2ZWx0ZSc7XHJcblxyXG5cclxuICBjb25zdCB7IHVwZGF0ZVNlbGVjdGVkTGV0dGVyLCBzZWxlY3RlZExldHRlciwgcmVzdWx0c0J5TGV0dGVyIH0gPSBsb29rdXA7XHJcbiAgY29uc3QgeyBhbHBoYWJldCwgbGFuZ3VhZ2UgfSA9IGRpY3Rpb25hcnk7XHJcblxyXG4gIGxldCBfc2VsZWN0ZWRMZXR0ZXIgPSAnJzsgIFxyXG4gIGxldCBfcmVzdWx0c0J5TGV0dGVyID0gW107IFxyXG4gIGxldCBfbGFuZ3VhZ2UgPSB7c2VsZWN0ZWQ6ICdhJ307IFxyXG4gIGxldCBfYWxwaGFiZXQgPSB7YTogJ2EnfTsgXHJcblxyXG4gIGNvbm5lY3RTdG9yZXMoXHJcbiAgICBbc2VsZWN0ZWRMZXR0ZXIsIHZhbCA9PiBfc2VsZWN0ZWRMZXR0ZXIgPSB2YWxdLCBcclxuICAgIFtyZXN1bHRzQnlMZXR0ZXIsIHZhbCA9PiBfcmVzdWx0c0J5TGV0dGVyID0gdmFsXSwgXHJcbiAgICBbYWxwaGFiZXQsIHZhbCA9PiBfYWxwaGFiZXQgPSB2YWxdLCBcclxuICAgIFtsYW5ndWFnZSwgdmFsID0+IF9sYW5ndWFnZSA9IHZhbF1cclxuICApO1xyXG5cclxuICAkOiBhYmMgPSBfYWxwaGFiZXRbX2xhbmd1YWdlLnNlbGVjdGVkXTtcclxuICAkOiBhVG9aID0gYCR7YWJjWzBdLnRvVXBwZXJDYXNlKCl9LSR7YWJjW2FiYy5sZW5ndGggLSAxXS50b1VwcGVyQ2FzZSgpfWA7XHJcbiAgJDogYWJjTGlzdCA9IFthVG9aLCAuLi5hYmMuc3BsaXQoJycpXTtcclxuICAkOiBmaXJzdDEwRW50cmllcyA9IF9yZXN1bHRzQnlMZXR0ZXIuc2xpY2UoMCwgMTApO1xyXG4gICQ6IHJlc3RPZkVudHJpZXMgPSBfcmVzdWx0c0J5TGV0dGVyLmxlbmd0aCA+IDEwID8gX3Jlc3VsdHNCeUxldHRlci5zbGljZSgxMCkgOiBbXTtcclxuXHJcbiAgYmVmb3JlVXBkYXRlKCgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwKVxyXG48L3NjcmlwdD5cclxuICBcclxuXHJcblxyXG57I2lmIF9zZWxlY3RlZExldHRlciAmJiBfc2VsZWN0ZWRMZXR0ZXIgIT09IGFUb1p9XHJcbiAgPGRpdiBjbGFzcz1cImF6LWNvbnRhaW5lclwiPlxyXG4gICAgeyNlYWNoIGFiY0xpc3QgYXMgbGV0dGVyLCBpIChsZXR0ZXIpfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXotaXRlbVwiIHNlbGVjdGVkPXtsZXR0ZXIgPT09IF9zZWxlY3RlZExldHRlcn0gXHJcbiAgICAgICAgb246Y2xpY2s9eygpID0+IHVwZGF0ZVNlbGVjdGVkTGV0dGVyKGxldHRlcil9PlxyXG4gICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey9lYWNofVxyXG4gIDwvZGl2PlxyXG4gIDxoMj57X3NlbGVjdGVkTGV0dGVyLnRvVXBwZXJDYXNlKCl9PC9oMj5cclxuICB7I2lmIF9yZXN1bHRzQnlMZXR0ZXIubGVuZ3RoID09PSAwfVxyXG4gICAgPGgzPk5vIHJlc3VsdHMgZm9yIFwie19zZWxlY3RlZExldHRlci50b1VwcGVyQ2FzZSgpfVwiPC9oMz5cclxuICB7L2lmfVxyXG4gIHsjZWFjaCBmaXJzdDEwRW50cmllcyBhcyB7ZW50cnksIG9wZW59LCBpIChlbnRyeS5faWQpfVxyXG4gICAgPFdvcmRDYXJkIHtvcGVufSB7ZW50cnl9IC8+XHJcbiAgey9lYWNofVxyXG5cclxuICAgIHsjYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCAxMCkpfVxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICB7OnRoZW4gdmFsdWV9XHJcbiAgICAgICAgeyNlYWNoIHJlc3RPZkVudHJpZXMgYXMge2VudHJ5LCBvcGVufSwgaSAoZW50cnkuX2lkKX1cclxuICAgICAgICAgICAgPFdvcmRDYXJkIHtvcGVufSB7ZW50cnl9IC8+XHJcbiAgICAgICAgey9lYWNofVxyXG4gICAgICB7OmNhdGNoIGVycm9yfVxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgey9hd2FpdH1cclxuXHJcbns6ZWxzZX1cclxuICA8ZGl2IGNsYXNzPVwiYXotY29udGFpbmVyLW9wZW5cIj5cclxuICAgIHsjZWFjaCBhYmNMaXN0LnNsaWNlKDEpIGFzIGxldHRlciwgaSAobGV0dGVyKX1cclxuICAgICAgPGRpdiBjbGFzcz1cImF6LWl0ZW0gb3BlblwiIHNlbGVjdGVkPXtsZXR0ZXIgPT09IF9zZWxlY3RlZExldHRlcn0gXHJcbiAgICAgICAgb246Y2xpY2s9eygpID0+IHVwZGF0ZVNlbGVjdGVkTGV0dGVyKGxldHRlcil9PlxyXG4gICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey9lYWNofVxyXG4gIDwvZGl2PlxyXG57L2lmfVxyXG5cclxuPGRpdiBjbGFzcz1cImZpbGxlclwiPjwvZGl2PlxyXG5cclxuPHN0eWxlPlxyXG4gICoge1xyXG4gICAgLS1uYXYtaGVpZ2h0OiA0MnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1pdGVtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuYXotY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IHZhcigtLW5hdi1oZWlnaHQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNjZweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWl0ZW0tYmFja2dyb3VuZCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICB9XHJcblxyXG4gIC5hei1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgbWluLXdpZHRoOiA1NnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgLmF6LWl0ZW1bc2VsZWN0ZWQ9J3RydWUnXSB7XHJcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taXRlbS1iYWNrZ3JvdW5kKTtcclxuICB9XHJcblxyXG4gIC5hei1jb250YWluZXItb3BlbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDVweCAxNXB4IDVweDsgXHJcbiAgICBtYXJnaW46IC0zMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgfVxyXG5cclxuICAuYXotaXRlbS5vcGVuIHtcclxuICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyAzNnB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbiAgLmZpbGxlciB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQWtFVyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7NEJBQWUsTUFBTTs7a0NBQTFDOzs7Ozs7Ozs7OytCQUFBOzs7Ozs7OzsrQkFBQTs7Ozs7Ozs7Ozs7Ozs7K0JBQUE7Ozs7NEJBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OzsrQkFBckI7Ozs7Ozs7K0VBcEJDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7O3dCQVB6QixPQUFPOzs0QkFBZSxNQUFNOztrQ0FBakM7Ozs7OztxQkFRQyxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQzs7d0JBRzNCLGNBQWM7OzhCQUFzQixLQUFLLENBQUMsR0FBRzs7a0NBQWxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVEsSUFBSSxPQUFPLENBQUMs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
