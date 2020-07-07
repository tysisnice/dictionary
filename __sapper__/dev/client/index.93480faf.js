import { S as SvelteComponentDev, i as init, s as safe_not_equal, B as empty, j as insert, r as transition_out, H as check_outros, q as transition_in, f as detach, v as validate_store, w as component_subscribe, G as group_outros, e as element, t as text, a as space, c as claim_element, b as children, d as claim_text, g as attr, h as add_location, m as listen, k as append, p as set_data, M as update_keyed_each, N as destroy_block, l as noop, o as mount_component, u as destroy_component, R as outro_and_destroy_block } from './index.ec4d4981.js';
import { l as lookup, d as dictionary } from './index.7445f01c.js';
import { W as WordCard } from './WordCard.8d136ae8.js';

/* src\routes\abc\index.svelte generated by Svelte v3.9.0 */

const file = "src\\routes\\abc\\index.svelte";

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

// (30:0) {:else}
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
			add_location(div, file, 30, 2, 999);
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

// (14:0) {#if $selectedLetter && $selectedLetter !== aToZ}
function create_if_block(ctx) {
	var div, each_blocks_1 = [], each0_lookup = new Map(), t0, h2, t1_value = ctx.$selectedLetter.toUpperCase() + "", t1, t2, t3, each_blocks = [], each1_lookup = new Map(), each1_anchor, current;

	var each_value_1 = ctx.abcList;

	const get_key = ctx => ctx.letter;

	for (var i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each0_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
	}

	var if_block = (ctx.$resultsByLetter.length === 0) && create_if_block_1(ctx);

	var each_value = ctx.$resultsByLetter;

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
			add_location(div, file, 14, 2, 480);
			attr(h2, "class", "svelte-nbrrwd");
			add_location(h2, file, 22, 2, 731);
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

			if ((!current || changed.$selectedLetter) && t1_value !== (t1_value = ctx.$selectedLetter.toUpperCase() + "")) {
				set_data(t1, t1_value);
			}

			if (ctx.$resultsByLetter.length === 0) {
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

			const each_value = ctx.$resultsByLetter;

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

// (32:4) {#each abcList.slice(1) as letter, i (letter)}
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
			attr(div, "selected", div_selected_value = ctx.letter === ctx.$selectedLetter);
			add_location(div, file, 32, 6, 1090);
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

			if ((changed.abcList || changed.$selectedLetter) && div_selected_value !== (div_selected_value = ctx.letter === ctx.$selectedLetter)) {
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

// (16:4) {#each abcList as letter, i (letter)}
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
			attr(div, "selected", div_selected_value = ctx.letter === ctx.$selectedLetter);
			add_location(div, file, 16, 6, 557);
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

			if ((changed.abcList || changed.$selectedLetter) && div_selected_value !== (div_selected_value = ctx.letter === ctx.$selectedLetter)) {
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

// (24:2) {#if $resultsByLetter.length === 0}
function create_if_block_1(ctx) {
	var h3, t0, t1_value = ctx.$selectedLetter.toUpperCase() + "", t1, t2;

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
			add_location(h3, file, 24, 4, 816);
		},

		m: function mount(target, anchor) {
			insert(target, h3, anchor);
			append(h3, t0);
			append(h3, t1);
			append(h3, t2);
		},

		p: function update(changed, ctx) {
			if ((changed.$selectedLetter) && t1_value !== (t1_value = ctx.$selectedLetter.toUpperCase() + "")) {
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

// (27:2) {#each $resultsByLetter as {entry, open}
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
			if (changed.$resultsByLetter) wordcard_changes.open = ctx.open;
			if (changed.$resultsByLetter) wordcard_changes.entry = ctx.entry;
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
		if (ctx.$selectedLetter && ctx.$selectedLetter !== ctx.aToZ) return 0;
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
	let $alphabet, $language, $selectedLetter, $resultsByLetter;

	

  const { updateSelectedLetter, selectedLetter, resultsByLetter } = lookup; validate_store(selectedLetter, 'selectedLetter'); component_subscribe($$self, selectedLetter, $$value => { $selectedLetter = $$value; $$invalidate('$selectedLetter', $selectedLetter); }); validate_store(resultsByLetter, 'resultsByLetter'); component_subscribe($$self, resultsByLetter, $$value => { $resultsByLetter = $$value; $$invalidate('$resultsByLetter', $resultsByLetter); });
  const { alphabet, language } = dictionary; validate_store(alphabet, 'alphabet'); component_subscribe($$self, alphabet, $$value => { $alphabet = $$value; $$invalidate('$alphabet', $alphabet); }); validate_store(language, 'language'); component_subscribe($$self, language, $$value => { $language = $$value; $$invalidate('$language', $language); });

	function click_handler({ letter }) {
		return updateSelectedLetter(letter);
	}

	function click_handler_1({ letter }) {
		return updateSelectedLetter(letter);
	}

	let abc, aToZ, abcList;

	$$self.$$.update = ($$dirty = { $alphabet: 1, $language: 1, abc: 1, aToZ: 1 }) => {
		if ($$dirty.$alphabet || $$dirty.$language) { $$invalidate('abc', abc = $alphabet[$language.selected]); }
		if ($$dirty.abc) { $$invalidate('aToZ', aToZ = `${abc[0].toUpperCase()}-${abc[abc.length - 1].toUpperCase()}`); }
		if ($$dirty.aToZ || $$dirty.abc) { $$invalidate('abcList', abcList = [aToZ, ...abc.split('')]); }
	};

	return {
		updateSelectedLetter,
		selectedLetter,
		resultsByLetter,
		alphabet,
		language,
		aToZ,
		abcList,
		$selectedLetter,
		$resultsByLetter,
		click_handler,
		click_handler_1
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTM0ODBmYWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJjL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBsb29rdXAsIGRpY3Rpb25hcnkgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbiAgaW1wb3J0IFdvcmRDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV29yZENhcmQuc3ZlbHRlJztcclxuXHJcbiAgY29uc3QgeyB1cGRhdGVTZWxlY3RlZExldHRlciwgc2VsZWN0ZWRMZXR0ZXIsIHJlc3VsdHNCeUxldHRlciB9ID0gbG9va3VwO1xyXG4gIGNvbnN0IHsgYWxwaGFiZXQsIGxhbmd1YWdlIH0gPSBkaWN0aW9uYXJ5O1xyXG5cclxuICAkOiBhYmMgPSAkYWxwaGFiZXRbJGxhbmd1YWdlLnNlbGVjdGVkXTtcclxuICAkOiBhVG9aID0gYCR7YWJjWzBdLnRvVXBwZXJDYXNlKCl9LSR7YWJjW2FiYy5sZW5ndGggLSAxXS50b1VwcGVyQ2FzZSgpfWA7XHJcbiAgJDogYWJjTGlzdCA9IFthVG9aLCAuLi5hYmMuc3BsaXQoJycpXTtcclxuPC9zY3JpcHQ+XHJcblxyXG57I2lmICRzZWxlY3RlZExldHRlciAmJiAkc2VsZWN0ZWRMZXR0ZXIgIT09IGFUb1p9XHJcbiAgPGRpdiBjbGFzcz1cImF6LWNvbnRhaW5lclwiPlxyXG4gICAgeyNlYWNoIGFiY0xpc3QgYXMgbGV0dGVyLCBpIChsZXR0ZXIpfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXotaXRlbVwiIHNlbGVjdGVkPXtsZXR0ZXIgPT09ICRzZWxlY3RlZExldHRlcn0gXHJcbiAgICAgICAgb246Y2xpY2s9eygpID0+IHVwZGF0ZVNlbGVjdGVkTGV0dGVyKGxldHRlcil9PlxyXG4gICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey9lYWNofVxyXG4gIDwvZGl2PlxyXG4gIDxoMj57JHNlbGVjdGVkTGV0dGVyLnRvVXBwZXJDYXNlKCl9PC9oMj5cclxuICB7I2lmICRyZXN1bHRzQnlMZXR0ZXIubGVuZ3RoID09PSAwfVxyXG4gICAgPGgzPk5vIHJlc3VsdHMgZm9yIFwieyRzZWxlY3RlZExldHRlci50b1VwcGVyQ2FzZSgpfVwiPC9oMz5cclxuICB7L2lmfVxyXG4gIHsjZWFjaCAkcmVzdWx0c0J5TGV0dGVyIGFzIHtlbnRyeSwgb3Blbn0sIGkgKGVudHJ5Ll9pZCl9XHJcbiAgICA8V29yZENhcmQge29wZW59IHtlbnRyeX0gLz5cclxuICB7L2VhY2h9XHJcbns6ZWxzZX1cclxuICA8ZGl2IGNsYXNzPVwiYXotY29udGFpbmVyLW9wZW5cIj5cclxuICAgIHsjZWFjaCBhYmNMaXN0LnNsaWNlKDEpIGFzIGxldHRlciwgaSAobGV0dGVyKX1cclxuICAgICAgPGRpdiBjbGFzcz1cImF6LWl0ZW0gb3BlblwiIHNlbGVjdGVkPXtsZXR0ZXIgPT09ICRzZWxlY3RlZExldHRlcn0gXHJcbiAgICAgICAgb246Y2xpY2s9eygpID0+IHVwZGF0ZVNlbGVjdGVkTGV0dGVyKGxldHRlcil9PlxyXG4gICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgey9lYWNofVxyXG4gIDwvZGl2PlxyXG57L2lmfVxyXG5cclxuXHJcbjxzdHlsZT5cclxuICAqIHtcclxuICAgIC0tbmF2LWhlaWdodDogNDJweDtcclxuICB9XHJcblxyXG4gIC5hei1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogdmFyKC0tbmF2LWhlaWdodCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICB9XHJcblxyXG4gIC5hei1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgbWluLXdpZHRoOiA1NnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5hei1pdGVtW3NlbGVjdGVkPSd0cnVlJ10ge1xyXG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5hei1jb250YWluZXItb3BlbiB7XHJcbiAgICBwYWRkaW5nOiAzMHB4OyBcclxuICAgIG1hcmdpbjogLTMycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYXotaXRlbS5vcGVuIHtcclxuICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tbmF2LWhlaWdodCkgKyAzNnB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkErQlcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OzRCQUFlLE1BQU07O2tDQUExQzs7Ozs7Ozs7OzsrQkFBQTs7Ozs7Ozs7K0JBQUE7Ozs7Ozs7Ozs7Ozs7OytCQUFBOzs7OzRCQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7K0JBQXJCOzs7Ozs7OytFQVRDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7O3dCQVB6QixPQUFPOzs0QkFBZSxNQUFNOztrQ0FBakM7Ozs7OztxQkFRQyxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQzs7c0JBRzNCLGdCQUFnQjs7OEJBQXNCLEtBQUssQ0FBQyxHQUFHOztnQ0FBcEQ7Ozs7Ozs7Ozs7aUNBWEU7Ozs7Ozs7OzsrQkFXRjs7Ozs7Ozs7OztpQ0FYRTs7Ozs7Ozs7Ozs7Ozs7K0JBV0Y7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBWEU7Ozs7Ozs7OzsrQkFXRjs7Ozs7Ozs0QkFYTyxPQUFPOzs7NkVBT1gsZUFBZSxDQUFDLFdBQVcsRUFBRTs7OztXQUM3QixnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7OzswQkFHM0IsZ0JBQWdCOzs7Ozs7Ozs7a0NBQXJCOzs7Ozs7K0JBQUE7Ozs7Ozs7Ozs7aUNBWEU7Ozs7Ozs7Ozs7Ozs7OytCQVdGOzs7Ozs7Ozs7Ozt5QkFRSyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRjJCLE1BQU0sU0FBSyxlQUFlOztrQ0FDbEQ7Ozs7Ozs7Ozs7Ozt5REFDVCxNQUFNOzs7O3dHQUYyQixNQUFNLFNBQUssZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBZDNELE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFGc0IsTUFBTSxTQUFLLGVBQWU7O2tDQUM3Qzs7Ozs7Ozs7Ozs7O3lEQUNULE1BQU07Ozs7d0dBRnNCLE1BQU0sU0FBSyxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFRdEMsZUFBZSxDQUFDLFdBQVcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUVBQTdCLGVBQWUsQ0FBQyxXQUFXLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFHdkMsSUFBSSxhQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFBWixJQUFJOzhEQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFkdEIsZUFBZSxRQUFJLGVBQWUsU0FBSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFSOUMsTUFBTSxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsR0FBRyxvWUFBTSxDQUFDO0VBQ3pFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsMFRBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztvRUFFdkMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFDLENBQUM7MENBQ3BDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDLENBQUM7NkRBQ3RFLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
