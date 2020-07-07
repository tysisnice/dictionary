import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, c as claim_element, b as children, f as detach, g as attr, h as add_location, m as listen, j as insert, K as add_render_callback, L as create_in_transition, l as noop, v as validate_store, w as component_subscribe, t as text, a as space, d as claim_text, k as append, p as set_data, M as update_keyed_each, N as destroy_block } from './index.ec4d4981.js';
import { f as favorites } from './index.7445f01c.js';

function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}

function fade(node, { delay = 0, duration = 400 }) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        css: t => `opacity: ${t * o}`
    };
}

/* src\components\WordCard.svelte generated by Svelte v3.9.0 */

const file = "src\\components\\WordCard.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx._id = list[i]._id;
	child_ctx.word = list[i].word;
	child_ctx.clarifyer = list[i].clarifyer;
	child_ctx.index = i;
	return child_ctx;
}

// (34:2) {:else}
function create_else_block(ctx) {
	var div, t0, t1, p0, t2_value = ctx.entry.word + "", t2, t3, p1, t4_value = shrinkClarifyerText(ctx.entry.clarifyer) + "", t4;

	return {
		c: function create() {
			div = element("div");
			t0 = text("+");
			t1 = space();
			p0 = element("p");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			t4 = text(t4_value);
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			t0 = claim_text(div_nodes, "+");
			div_nodes.forEach(detach);
			t1 = claim_text(nodes, "\r\n    ");

			p0 = claim_element(nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, t2_value);
			p0_nodes.forEach(detach);
			t3 = claim_text(nodes, "\r\n    ");

			p1 = claim_element(nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t4 = claim_text(p1_nodes, t4_value);
			p1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "corner-button svelte-k08ugv");
			add_location(div, file, 34, 4, 1076);
			attr(p0, "class", "word svelte-k08ugv");
			add_location(p0, file, 35, 4, 1116);
			attr(p1, "class", "clarifyer svelte-k08ugv");
			add_location(p1, file, 36, 4, 1154);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			insert(target, t1, anchor);
			insert(target, p0, anchor);
			append(p0, t2);
			insert(target, t3, anchor);
			insert(target, p1, anchor);
			append(p1, t4);
		},

		p: function update(changed, ctx) {
			if ((changed.entry) && t2_value !== (t2_value = ctx.entry.word + "")) {
				set_data(t2, t2_value);
			}

			if ((changed.entry) && t4_value !== (t4_value = shrinkClarifyerText(ctx.entry.clarifyer) + "")) {
				set_data(t4, t4_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
				detach(t1);
				detach(p0);
				detach(t3);
				detach(p1);
			}
		}
	};
}

// (21:2) {#if open}
function create_if_block(ctx) {
	var div0, t0, div0_saved_value, t1, p0, t2_value = ctx.entry.word + "", t2, t3, p1, t4_value = ctx.entry.clarifyer + "", t4, t5, div1, each_blocks = [], each_1_lookup = new Map(), dispose;

	var each_value = ctx.entry.otherWords;

	const get_key = ctx => ctx._id;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c: function create() {
			div0 = element("div");
			t0 = text("★");
			t1 = space();
			p0 = element("p");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			t4 = text(t4_value);
			t5 = space();
			div1 = element("div");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
			this.h();
		},

		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true, saved: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "★");
			div0_nodes.forEach(detach);
			t1 = claim_text(nodes, "\r\n    ");

			p0 = claim_element(nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, t2_value);
			p0_nodes.forEach(detach);
			t3 = claim_text(nodes, "\r\n    ");

			p1 = claim_element(nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t4 = claim_text(p1_nodes, t4_value);
			p1_nodes.forEach(detach);
			t5 = claim_text(nodes, "\r\n    ");

			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].l(div1_nodes);

			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div0, "class", "corner-button open svelte-k08ugv");
			attr(div0, "saved", div0_saved_value = ctx.$savedById.includes(ctx.entry._id));
			add_location(div0, file, 21, 4, 592);
			attr(p0, "class", "word svelte-k08ugv");
			add_location(p0, file, 24, 4, 740);
			attr(p1, "class", "clarifyer svelte-k08ugv");
			add_location(p1, file, 25, 4, 778);
			attr(div1, "class", "other-entries svelte-k08ugv");
			add_location(div1, file, 26, 4, 826);
			dispose = listen(div0, "click", ctx.click_handler);
		},

		m: function mount(target, anchor) {
			insert(target, div0, anchor);
			append(div0, t0);
			insert(target, t1, anchor);
			insert(target, p0, anchor);
			append(p0, t2);
			insert(target, t3, anchor);
			insert(target, p1, anchor);
			append(p1, t4);
			insert(target, t5, anchor);
			insert(target, div1, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(div1, null);
		},

		p: function update(changed, ctx) {
			if ((changed.$savedById || changed.entry) && div0_saved_value !== (div0_saved_value = ctx.$savedById.includes(ctx.entry._id))) {
				attr(div0, "saved", div0_saved_value);
			}

			if ((changed.entry) && t2_value !== (t2_value = ctx.entry.word + "")) {
				set_data(t2, t2_value);
			}

			if ((changed.entry) && t4_value !== (t4_value = ctx.entry.clarifyer + "")) {
				set_data(t4, t4_value);
			}

			const each_value = ctx.entry.otherWords;
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, div1, destroy_block, create_each_block, null, get_each_context);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div0);
				detach(t1);
				detach(p0);
				detach(t3);
				detach(p1);
				detach(t5);
				detach(div1);
			}

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();

			dispose();
		}
	};
}

// (28:6) {#each entry.otherWords as {_id, word, clarifyer}
function create_each_block(key_1, ctx) {
	var hr, t0, p0, t1_value = ctx.word + "", t1, t2, p1, t3_value = ctx.clarifyer + "", t3;

	return {
		key: key_1,

		first: null,

		c: function create() {
			hr = element("hr");
			t0 = space();
			p0 = element("p");
			t1 = text(t1_value);
			t2 = space();
			p1 = element("p");
			t3 = text(t3_value);
			this.h();
		},

		l: function claim(nodes) {
			hr = claim_element(nodes, "HR", { class: true }, false);
			var hr_nodes = children(hr);

			hr_nodes.forEach(detach);
			t0 = claim_text(nodes, "\r\n        ");

			p0 = claim_element(nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t1 = claim_text(p0_nodes, t1_value);
			p0_nodes.forEach(detach);
			t2 = claim_text(nodes, "\r\n        ");

			p1 = claim_element(nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t3 = claim_text(p1_nodes, t3_value);
			p1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(hr, "class", "svelte-k08ugv");
			add_location(hr, file, 28, 8, 934);
			attr(p0, "class", "word other svelte-k08ugv");
			add_location(p0, file, 29, 8, 948);
			attr(p1, "class", "clarifyer other svelte-k08ugv");
			add_location(p1, file, 30, 8, 990);
			this.first = hr;
		},

		m: function mount(target, anchor) {
			insert(target, hr, anchor);
			insert(target, t0, anchor);
			insert(target, p0, anchor);
			append(p0, t1);
			insert(target, t2, anchor);
			insert(target, p1, anchor);
			append(p1, t3);
		},

		p: function update(changed, ctx) {
			if ((changed.entry) && t1_value !== (t1_value = ctx.word + "")) {
				set_data(t1, t1_value);
			}

			if ((changed.entry) && t3_value !== (t3_value = ctx.clarifyer + "")) {
				set_data(t3, t3_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(hr);
				detach(t0);
				detach(p0);
				detach(t2);
				detach(p1);
			}
		}
	};
}

function create_fragment(ctx) {
	var div, div_intro, dispose;

	function select_block_type(ctx) {
		if (ctx.open) return create_if_block;
		return create_else_block;
	}

	var current_block_type = select_block_type(ctx);
	var if_block = current_block_type(ctx);

	return {
		c: function create() {
			div = element("div");
			if_block.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, open: true }, false);
			var div_nodes = children(div);

			if_block.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(div, "class", "container svelte-k08ugv");
			attr(div, "open", ctx.open);
			add_location(div, file, 19, 0, 487);
			dispose = listen(div, "click", ctx.click_handler_1);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			if_block.m(div, null);
		},

		p: function update(changed, ctx) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(changed, ctx);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);
				if (if_block) {
					if_block.c();
					if_block.m(div, null);
				}
			}

			if (changed.open) {
				attr(div, "open", ctx.open);
			}
		},

		i: function intro(local) {
			if (!div_intro) {
				add_render_callback(() => {
					div_intro = create_in_transition(div, fade, {duration: 170});
					div_intro.start();
				});
			}
		},

		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			if_block.d();
			dispose();
		}
	};
}

function shrinkClarifyerText(text) {
  const firstLine = text.split('\n')[0];
  const newClarifyer = firstLine.substring(0, 30);
  newClarifyer.length > firstLine.length && (newClarifyer += '...');
  return newClarifyer;
}

function instance($$self, $$props, $$invalidate) {
	let $savedById;

	
  const { savedById, toggleFavorite } = favorites; validate_store(savedById, 'savedById'); component_subscribe($$self, savedById, $$value => { $savedById = $$value; $$invalidate('$savedById', $savedById); });

  let { entry, open } = $$props;

	const writable_props = ['entry', 'open'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<WordCard> was created with unknown prop '${key}'`);
	});

	function click_handler() {
		return toggleFavorite(entry._id);
	}

	function click_handler_1() {
		const $$result = open = true;
		$$invalidate('open', open);
		return $$result;
	}

	$$self.$set = $$props => {
		if ('entry' in $$props) $$invalidate('entry', entry = $$props.entry);
		if ('open' in $$props) $$invalidate('open', open = $$props.open);
	};

	return {
		savedById,
		toggleFavorite,
		entry,
		open,
		$savedById,
		click_handler,
		click_handler_1
	};
}

class WordCard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["entry", "open"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.entry === undefined && !('entry' in props)) {
			console.warn("<WordCard> was created without expected prop 'entry'");
		}
		if (ctx.open === undefined && !('open' in props)) {
			console.warn("<WordCard> was created without expected prop 'open'");
		}
	}

	get entry() {
		throw new Error("<WordCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set entry(value) {
		throw new Error("<WordCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		throw new Error("<WordCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set open(value) {
		throw new Error("<WordCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { WordCard as W, cubicOut as c };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZENhcmQuZDMxMTAxYTUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvZWFzaW5nL2luZGV4Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvdHJhbnNpdGlvbi9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Xb3JkQ2FyZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgaWRlbnRpdHkgYXMgbGluZWFyIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuXG4vKlxuQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbFxuRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsL2Vhc2VzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiovXG5mdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICAgICAgcmV0dXJuIDAuNSAqICh0ICogdCAqICgocyArIDEpICogdCAtIHMpKTtcbiAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMik7XG59XG5mdW5jdGlvbiBiYWNrSW4odCkge1xuICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpO1xufVxuZnVuY3Rpb24gYmFja091dCh0KSB7XG4gICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDE7XG59XG5mdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICAgIGNvbnN0IGEgPSA0LjAgLyAxMS4wO1xuICAgIGNvbnN0IGIgPSA4LjAgLyAxMS4wO1xuICAgIGNvbnN0IGMgPSA5LjAgLyAxMC4wO1xuICAgIGNvbnN0IGNhID0gNDM1Ni4wIC8gMzYxLjA7XG4gICAgY29uc3QgY2IgPSAzNTQ0Mi4wIC8gMTgwNS4wO1xuICAgIGNvbnN0IGNjID0gMTYwNjEuMCAvIDE4MDUuMDtcbiAgICBjb25zdCB0MiA9IHQgKiB0O1xuICAgIHJldHVybiB0IDwgYVxuICAgICAgICA/IDcuNTYyNSAqIHQyXG4gICAgICAgIDogdCA8IGJcbiAgICAgICAgICAgID8gOS4wNzUgKiB0MiAtIDkuOSAqIHQgKyAzLjRcbiAgICAgICAgICAgIDogdCA8IGNcbiAgICAgICAgICAgICAgICA/IGNhICogdDIgLSBjYiAqIHQgKyBjY1xuICAgICAgICAgICAgICAgIDogMTAuOCAqIHQgKiB0IC0gMjAuNTIgKiB0ICsgMTAuNzI7XG59XG5mdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjVcbiAgICAgICAgPyAwLjUgKiAoMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQgKiAyLjApKVxuICAgICAgICA6IDAuNSAqIGJvdW5jZU91dCh0ICogMi4wIC0gMS4wKSArIDAuNTtcbn1cbmZ1bmN0aW9uIGJvdW5jZUluKHQpIHtcbiAgICByZXR1cm4gMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQpO1xufVxuZnVuY3Rpb24gY2lyY0luT3V0KHQpIHtcbiAgICBpZiAoKHQgKj0gMikgPCAxKVxuICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpO1xuICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSk7XG59XG5mdW5jdGlvbiBjaXJjSW4odCkge1xuICAgIHJldHVybiAxLjAgLSBNYXRoLnNxcnQoMS4wIC0gdCAqIHQpO1xufVxuZnVuY3Rpb24gY2lyY091dCh0KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gLS10ICogdCk7XG59XG5mdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNSA/IDQuMCAqIHQgKiB0ICogdCA6IDAuNSAqIE1hdGgucG93KDIuMCAqIHQgLSAyLjAsIDMuMCkgKyAxLjA7XG59XG5mdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0O1xufVxuZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICAgIGNvbnN0IGYgPSB0IC0gMS4wO1xuICAgIHJldHVybiBmICogZiAqIGYgKyAxLjA7XG59XG5mdW5jdGlvbiBlbGFzdGljSW5PdXQodCkge1xuICAgIHJldHVybiB0IDwgMC41XG4gICAgICAgID8gMC41ICpcbiAgICAgICAgICAgIE1hdGguc2luKCgoKzEzLjAgKiBNYXRoLlBJKSAvIDIpICogMi4wICogdCkgKlxuICAgICAgICAgICAgTWF0aC5wb3coMi4wLCAxMC4wICogKDIuMCAqIHQgLSAxLjApKVxuICAgICAgICA6IDAuNSAqXG4gICAgICAgICAgICBNYXRoLnNpbigoKC0xMy4wICogTWF0aC5QSSkgLyAyKSAqICgyLjAgKiB0IC0gMS4wICsgMS4wKSkgKlxuICAgICAgICAgICAgTWF0aC5wb3coMi4wLCAtMTAuMCAqICgyLjAgKiB0IC0gMS4wKSkgK1xuICAgICAgICAgICAgMS4wO1xufVxuZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgICByZXR1cm4gTWF0aC5zaW4oKDEzLjAgKiB0ICogTWF0aC5QSSkgLyAyKSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSk7XG59XG5mdW5jdGlvbiBlbGFzdGljT3V0KHQpIHtcbiAgICByZXR1cm4gKE1hdGguc2luKCgtMTMuMCAqICh0ICsgMS4wKSAqIE1hdGguUEkpIC8gMikgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogdCkgKyAxLjApO1xufVxuZnVuY3Rpb24gZXhwb0luT3V0KHQpIHtcbiAgICByZXR1cm4gdCA9PT0gMC4wIHx8IHQgPT09IDEuMFxuICAgICAgICA/IHRcbiAgICAgICAgOiB0IDwgMC41XG4gICAgICAgICAgICA/ICswLjUgKiBNYXRoLnBvdygyLjAsIDIwLjAgKiB0IC0gMTAuMClcbiAgICAgICAgICAgIDogLTAuNSAqIE1hdGgucG93KDIuMCwgMTAuMCAtIHQgKiAyMC4wKSArIDEuMDtcbn1cbmZ1bmN0aW9uIGV4cG9Jbih0KSB7XG4gICAgcmV0dXJuIHQgPT09IDAuMCA/IHQgOiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpO1xufVxuZnVuY3Rpb24gZXhwb091dCh0KSB7XG4gICAgcmV0dXJuIHQgPT09IDEuMCA/IHQgOiAxLjAgLSBNYXRoLnBvdygyLjAsIC0xMC4wICogdCk7XG59XG5mdW5jdGlvbiBxdWFkSW5PdXQodCkge1xuICAgIHQgLz0gMC41O1xuICAgIGlmICh0IDwgMSlcbiAgICAgICAgcmV0dXJuIDAuNSAqIHQgKiB0O1xuICAgIHQtLTtcbiAgICByZXR1cm4gLTAuNSAqICh0ICogKHQgLSAyKSAtIDEpO1xufVxuZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgICByZXR1cm4gdCAqIHQ7XG59XG5mdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgICByZXR1cm4gLXQgKiAodCAtIDIuMCk7XG59XG5mdW5jdGlvbiBxdWFydEluT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNVxuICAgICAgICA/ICs4LjAgKiBNYXRoLnBvdyh0LCA0LjApXG4gICAgICAgIDogLTguMCAqIE1hdGgucG93KHQgLSAxLjAsIDQuMCkgKyAxLjA7XG59XG5mdW5jdGlvbiBxdWFydEluKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codCwgNC4wKTtcbn1cbmZ1bmN0aW9uIHF1YXJ0T3V0KHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codCAtIDEuMCwgMy4wKSAqICgxLjAgLSB0KSArIDEuMDtcbn1cbmZ1bmN0aW9uIHF1aW50SW5PdXQodCkge1xuICAgIGlmICgodCAqPSAyKSA8IDEpXG4gICAgICAgIHJldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0ICogdDtcbiAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpO1xufVxuZnVuY3Rpb24gcXVpbnRJbih0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0O1xufVxuZnVuY3Rpb24gcXVpbnRPdXQodCkge1xuICAgIHJldHVybiAtLXQgKiB0ICogdCAqIHQgKiB0ICsgMTtcbn1cbmZ1bmN0aW9uIHNpbmVJbk91dCh0KSB7XG4gICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSk7XG59XG5mdW5jdGlvbiBzaW5lSW4odCkge1xuICAgIGNvbnN0IHYgPSBNYXRoLmNvcyh0ICogTWF0aC5QSSAqIDAuNSk7XG4gICAgaWYgKE1hdGguYWJzKHYpIDwgMWUtMTQpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIDEgLSB2O1xufVxuZnVuY3Rpb24gc2luZU91dCh0KSB7XG4gICAgcmV0dXJuIE1hdGguc2luKCh0ICogTWF0aC5QSSkgLyAyKTtcbn1cblxuZXhwb3J0IHsgYmFja0luLCBiYWNrSW5PdXQsIGJhY2tPdXQsIGJvdW5jZUluLCBib3VuY2VJbk91dCwgYm91bmNlT3V0LCBjaXJjSW4sIGNpcmNJbk91dCwgY2lyY091dCwgY3ViaWNJbiwgY3ViaWNJbk91dCwgY3ViaWNPdXQsIGVsYXN0aWNJbiwgZWxhc3RpY0luT3V0LCBlbGFzdGljT3V0LCBleHBvSW4sIGV4cG9Jbk91dCwgZXhwb091dCwgcXVhZEluLCBxdWFkSW5PdXQsIHF1YWRPdXQsIHF1YXJ0SW4sIHF1YXJ0SW5PdXQsIHF1YXJ0T3V0LCBxdWludEluLCBxdWludEluT3V0LCBxdWludE91dCwgc2luZUluLCBzaW5lSW5PdXQsIHNpbmVPdXQgfTtcbiIsImltcG9ydCB7IGN1YmljT3V0LCBjdWJpY0luT3V0IH0gZnJvbSAnLi4vZWFzaW5nJztcbmltcG9ydCB7IGlzX2Z1bmN0aW9uLCBhc3NpZ24gfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cblxuZnVuY3Rpb24gZmFkZShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAgfSkge1xuICAgIGNvbnN0IG8gPSArZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5vcGFjaXR5O1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgY3NzOiB0ID0+IGBvcGFjaXR5OiAke3QgKiBvfWBcbiAgICB9O1xufVxuZnVuY3Rpb24gZmx5KG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHggPSAwLCB5ID0gMCwgb3BhY2l0eSA9IDAgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNsaWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCBvcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpO1xuICAgIGNvbnN0IHBhZGRpbmdfdG9wID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKTtcbiAgICBjb25zdCBwYWRkaW5nX2JvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgY29uc3QgbWFyZ2luX3RvcCA9IHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luVG9wKTtcbiAgICBjb25zdCBtYXJnaW5fYm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pO1xuICAgIGNvbnN0IGJvcmRlcl90b3Bfd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKTtcbiAgICBjb25zdCBib3JkZXJfYm90dG9tX3dpZHRoID0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogdCA9PiBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICAgIGBvcGFjaXR5OiAke01hdGgubWluKHQgKiAyMCwgMSkgKiBvcGFjaXR5fTtgICtcbiAgICAgICAgICAgIGBoZWlnaHQ6ICR7dCAqIGhlaWdodH1weDtgICtcbiAgICAgICAgICAgIGBwYWRkaW5nLXRvcDogJHt0ICogcGFkZGluZ190b3B9cHg7YCArXG4gICAgICAgICAgICBgcGFkZGluZy1ib3R0b206ICR7dCAqIHBhZGRpbmdfYm90dG9tfXB4O2AgK1xuICAgICAgICAgICAgYG1hcmdpbi10b3A6ICR7dCAqIG1hcmdpbl90b3B9cHg7YCArXG4gICAgICAgICAgICBgbWFyZ2luLWJvdHRvbTogJHt0ICogbWFyZ2luX2JvdHRvbX1weDtgICtcbiAgICAgICAgICAgIGBib3JkZXItdG9wLXdpZHRoOiAke3QgKiBib3JkZXJfdG9wX3dpZHRofXB4O2AgK1xuICAgICAgICAgICAgYGJvcmRlci1ib3R0b20td2lkdGg6ICR7dCAqIGJvcmRlcl9ib3R0b21fd2lkdGh9cHg7YFxuICAgIH07XG59XG5mdW5jdGlvbiBzY2FsZShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCBzdGFydCA9IDAsIG9wYWNpdHkgPSAwIH0pIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3QgdGFyZ2V0X29wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgIGNvbnN0IHNkID0gMSAtIHN0YXJ0O1xuICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6IChfdCwgdSkgPT4gYFxuXHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gc2NhbGUoJHsxIC0gKHNkICogdSl9KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1cblx0XHRgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRyYXcobm9kZSwgeyBkZWxheSA9IDAsIHNwZWVkLCBkdXJhdGlvbiwgZWFzaW5nID0gY3ViaWNJbk91dCB9KSB7XG4gICAgY29uc3QgbGVuID0gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IDgwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gbGVuIC8gc3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24obGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBzdHJva2UtZGFzaGFycmF5OiAke3QgKiBsZW59ICR7dSAqIGxlbn1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyb3NzZmFkZShfYSkge1xuICAgIHZhciB7IGZhbGxiYWNrIH0gPSBfYSwgZGVmYXVsdHMgPSBfX3Jlc3QoX2EsIFtcImZhbGxiYWNrXCJdKTtcbiAgICBjb25zdCB0b19yZWNlaXZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHRvX3NlbmQgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gY3Jvc3NmYWRlKGZyb20sIG5vZGUsIHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSBkID0+IE1hdGguc3FydChkKSAqIDMwLCBlYXNpbmcgPSBjdWJpY091dCB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGR4ID0gZnJvbS5sZWZ0IC0gdG8ubGVmdDtcbiAgICAgICAgY29uc3QgZHkgPSBmcm9tLnRvcCAtIHRvLnRvcDtcbiAgICAgICAgY29uc3QgZHcgPSBmcm9tLndpZHRoIC8gdG8ud2lkdGg7XG4gICAgICAgIGNvbnN0IGRoID0gZnJvbS5oZWlnaHQgLyB0by5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgZHVyYXRpb246IGlzX2Z1bmN0aW9uKGR1cmF0aW9uKSA/IGR1cmF0aW9uKGQpIDogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmcsXG4gICAgICAgICAgICBjc3M6ICh0LCB1KSA9PiBgXG5cdFx0XHRcdG9wYWNpdHk6ICR7dCAqIG9wYWNpdHl9O1xuXHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcblx0XHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCR7dSAqIGR5fXB4KSBzY2FsZSgke3QgKyAoMSAtIHQpICogZHd9LCAke3QgKyAoMSAtIHQpICogZGh9KTtcblx0XHRcdGBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbihpdGVtcywgY291bnRlcnBhcnRzLCBpbnRybykge1xuICAgICAgICByZXR1cm4gKG5vZGUsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuc2V0KHBhcmFtcy5rZXksIHtcbiAgICAgICAgICAgICAgICByZWN0OiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJwYXJ0cy5oYXMocGFyYW1zLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZWN0IH0gPSBjb3VudGVycGFydHMuZ2V0KHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydHMuZGVsZXRlKHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Jvc3NmYWRlKHJlY3QsIG5vZGUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBub2RlIGlzIGRpc2FwcGVhcmluZyBhbHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgLy8gKGkuZS4gd2Fzbid0IGNsYWltZWQgYnkgdGhlIG90aGVyIGxpc3QpXG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBuZWVkIHRvIHN1cHBseSBhbiBvdXRyb1xuICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZShwYXJhbXMua2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2sgJiYgZmFsbGJhY2sobm9kZSwgcGFyYW1zLCBpbnRybyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICB0cmFuc2l0aW9uKHRvX3NlbmQsIHRvX3JlY2VpdmUsIGZhbHNlKSxcbiAgICAgICAgdHJhbnNpdGlvbih0b19yZWNlaXZlLCB0b19zZW5kLCB0cnVlKVxuICAgIF07XG59XG5cbmV4cG9ydCB7IGNyb3NzZmFkZSwgZHJhdywgZmFkZSwgZmx5LCBzY2FsZSwgc2xpZGUgfTtcbiIsIlxyXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICBmdW5jdGlvbiBzaHJpbmtDbGFyaWZ5ZXJUZXh0KHRleHQpIHtcclxuICAgIGNvbnN0IGZpcnN0TGluZSA9IHRleHQuc3BsaXQoJ1xcbicpWzBdO1xyXG4gICAgY29uc3QgbmV3Q2xhcmlmeWVyID0gZmlyc3RMaW5lLnN1YnN0cmluZygwLCAzMCk7XHJcbiAgICBuZXdDbGFyaWZ5ZXIubGVuZ3RoID4gZmlyc3RMaW5lLmxlbmd0aCAmJiAobmV3Q2xhcmlmeWVyICs9ICcuLi4nKTtcclxuICAgIHJldHVybiBuZXdDbGFyaWZ5ZXI7XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHsgZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcclxuICBpbXBvcnQgeyBmYXZvcml0ZXMgfSBmcm9tICcuLi9zdG9yZSc7XHJcbiAgY29uc3QgeyBzYXZlZEJ5SWQsIHRvZ2dsZUZhdm9yaXRlIH0gPSBmYXZvcml0ZXM7XHJcblxyXG4gIGV4cG9ydCBsZXQgZW50cnk7XHJcbiAgZXhwb3J0IGxldCBvcGVuO1xyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpbjpmYWRlPXt7ZHVyYXRpb246IDE3MH19IHtvcGVufSBvbjpjbGljaz17KCkgPT4gb3BlbiA9IHRydWV9PlxyXG4gIHsjaWYgb3Blbn1cclxuICAgIDxkaXYgY2xhc3M9XCJjb3JuZXItYnV0dG9uIG9wZW5cIiBcclxuICAgICAgc2F2ZWQ9eyRzYXZlZEJ5SWQuaW5jbHVkZXMoZW50cnkuX2lkKX1cclxuICAgICAgb246Y2xpY2s9eygpID0+IHRvZ2dsZUZhdm9yaXRlKGVudHJ5Ll9pZCl9PiYjOTczMzs8L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwid29yZFwiPntlbnRyeS53b3JkfTwvcD5cclxuICAgIDxwIGNsYXNzPVwiY2xhcmlmeWVyXCI+e2VudHJ5LmNsYXJpZnllcn08L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwib3RoZXItZW50cmllc1wiPlxyXG4gICAgICB7I2VhY2ggZW50cnkub3RoZXJXb3JkcyBhcyB7X2lkLCB3b3JkLCBjbGFyaWZ5ZXJ9LCBpbmRleCAoX2lkKX1cclxuICAgICAgICA8aHI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ3b3JkIG90aGVyXCI+e3dvcmR9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2xhcmlmeWVyIG90aGVyXCI+e2NsYXJpZnllcn08L3A+XHJcbiAgICAgIHsvZWFjaH1cclxuICAgIDwvZGl2PlxyXG4gIHs6ZWxzZX1cclxuICAgIDxkaXYgY2xhc3M9XCJjb3JuZXItYnV0dG9uXCI+KzwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJ3b3JkXCI+e2VudHJ5LndvcmR9PC9wPlxyXG4gICAgPHAgY2xhc3M9XCJjbGFyaWZ5ZXJcIj57c2hyaW5rQ2xhcmlmeWVyVGV4dChlbnRyeS5jbGFyaWZ5ZXIpfTwvcD5cclxuICB7L2lmfVxyXG48L2Rpdj5cclxuXHJcbjxzdHlsZT5cclxuICBkaXYge1xyXG4gICAgLS1wYWRkaW5nOiAxMnB4IDE4cHggMTJweCAxOHB4O1xyXG4gICAgLS1pbnZlcnNlLXBhZGRpbmc6IC0yNXB4O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBtYXJnaW46IDEwcHggdmFyKC0taW52ZXJzZS1wYWRkaW5nKSAxMHB4IHZhcigtLWludmVyc2UtcGFkZGluZyk7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDVweDtcclxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHdpZHRoOiAzODBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcltvcGVuPVwidHJ1ZVwiXSB7XHJcbiAgICB3aWR0aDogNDIwcHg7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvcm5lci1idXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgLmNvcm5lci1idXR0b24ub3BlbiB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG4gIH1cclxuICAuY29ybmVyLWJ1dHRvbi5vcGVuW3NhdmVkPVwidHJ1ZVwiXSB7XHJcbiAgICBjb2xvcjogZ29sZDtcclxuICB9XHJcblxyXG5cclxuICAud29yZCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmNsYXJpZnllciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuXHJcbiAgLndvcmQub3RoZXIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY2xhcmlmeWVyLm90aGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA3MHB4KTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJbb3Blbj1cInRydWVcIl0ge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDUwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUE2REEsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0lBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDMUI7O0FDbENELFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBRSxFQUFFO0lBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzFDLE9BQU87UUFDSCxLQUFLO1FBQ0wsUUFBUTtRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2hDLENBQUM7Q0FDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNDRm9CLEtBQUssQ0FBQyxJQUFJLDhCQUNMLG1CQUFtQixLQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQUR6QyxLQUFLLENBQUMsSUFBSTs7OzttREFDTCxtQkFBbUIsS0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dEQVp6QyxLQUFLLENBQUMsSUFBSSxrQ0FDTCxLQUFLLENBQUMsU0FBUzs7c0JBRTVCLEtBQUssQ0FBQyxVQUFVOzs0QkFBbUMsR0FBRzs7Z0NBQTNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFBQTs7Ozs7Ozs7OENBTEssVUFBVSxDQUFDLFFBQVEsS0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7Ozs7OzttQ0FDM0I7Ozs7Ozs7Ozs7Ozs7OzsrQkFJUjs7Ozs2RkFMSyxVQUFVLENBQUMsUUFBUSxLQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7dURBRXRCLEtBQUssQ0FBQyxJQUFJOzs7O3VEQUNMLEtBQUssQ0FBQyxTQUFTOzs7OzBCQUU1QixLQUFLLENBQUMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OytCQUFyQjs7Ozs7Ozs7O2dDQUV1QixJQUFJLGtDQUNDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBRGQsSUFBSTs7Ozt1REFDQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFWdEMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFEdUMsSUFBSTs7a0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBaEIsSUFBSTs7Ozs7OztpREFBdEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakI3QyxTQUFTLG1CQUFtQixDQUFDLElBQUksRUFBRTtFQUNqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RDLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQ2hELFlBQVksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sS0FBSyxZQUFZLElBQUksS0FBSyxDQUFDLENBQUM7RUFDbEUsT0FBTyxZQUFZLENBQUM7Q0FDckI7Ozs7OztFQU1ELE1BQU0sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEdBQUcsdUtBQVMsQ0FBQzs7RUFFekMsTUFBSSxLQUFLLEVBQ0wsZ0JBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
