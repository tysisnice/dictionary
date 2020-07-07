import { S as SvelteComponentDev, a as init, s as safe_not_equal, b as space, e as element, t as text, f as claim_text, c as claim_element, d as children, g as detach, j as add_location, h as attr, k as insert, l as append, w as set_data, n as noop } from './index.42697b0b.js';

/* src\routes\blog\[slug].svelte generated by Svelte v3.9.0 */

const file = "src\\routes\\blog\\[slug].svelte";

function create_fragment(ctx) {
	var title_value, t0, h1, t1_value = ctx.post.title + "", t1, t2, div, raw_value = ctx.post.html + "";

	document.title = title_value = ctx.post.title;

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			div = element("div");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\r\n\r\n");

			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\r\n\r\n");

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(h1, file, 59, 0, 1284);
			attr(div, "class", "content svelte-dkhkxh");
			add_location(div, file, 61, 0, 1309);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, div, anchor);
			div.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.post) && title_value !== (title_value = ctx.post.title)) {
				document.title = title_value;
			}

			if ((changed.post) && t1_value !== (t1_value = ctx.post.title + "")) {
				set_data(t1, t1_value);
			}

			if ((changed.post) && raw_value !== (raw_value = ctx.post.html + "")) {
				div.innerHTML = raw_value;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(div);
			}
		}
	};
}

async function preload({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);
	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;

	const writable_props = ['post'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Slug> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('post' in $$props) $$invalidate('post', post = $$props.post);
	};

	return { post };
}

class Slug extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["post"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.post === undefined && !('post' in props)) {
			console.warn("<Slug> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<Slug>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<Slug>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Slug;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmY0ZDJkNDRhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG5cdFx0Ly8gdGhlIGBzbHVnYCBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGJlY2F1c2VcclxuXHRcdC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgYmxvZy8ke3BhcmFtcy5zbHVnfS5qc29uYCk7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcblx0XHRpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcblx0XHRcdHJldHVybiB7IHBvc3Q6IGRhdGEgfTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgbGV0IHBvc3Q7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC8qXHJcblx0XHRCeSBkZWZhdWx0LCBDU1MgaXMgbG9jYWxseSBzY29wZWQgdG8gdGhlIGNvbXBvbmVudCxcclxuXHRcdGFuZCBhbnkgdW51c2VkIHN0eWxlcyBhcmUgZGVhZC1jb2RlLWVsaW1pbmF0ZWQuXHJcblx0XHRJbiB0aGlzIHBhZ2UsIFN2ZWx0ZSBjYW4ndCBrbm93IHdoaWNoIGVsZW1lbnRzIGFyZVxyXG5cdFx0Z29pbmcgdG8gYXBwZWFyIGluc2lkZSB0aGUge3t7cG9zdC5odG1sfX19IGJsb2NrLFxyXG5cdFx0c28gd2UgaGF2ZSB0byB1c2UgdGhlIDpnbG9iYWwoLi4uKSBtb2RpZmllciB0byB0YXJnZXRcclxuXHRcdGFsbCBlbGVtZW50cyBpbnNpZGUgLmNvbnRlbnRcclxuXHQqL1xyXG5cdC5jb250ZW50IDpnbG9iYWwoaDIpIHtcclxuXHRcdGZvbnQtc2l6ZTogMS40ZW07XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQgOmdsb2JhbChwcmUpIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG5cdFx0cGFkZGluZzogMC41ZW07XHJcblx0XHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0XHRvdmVyZmxvdy14OiBhdXRvO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQgOmdsb2JhbCh1bCkge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IDpnbG9iYWwobGkpIHtcclxuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcblxyXG48ZGl2IGNsYXNzPSdjb250ZW50Jz5cclxuXHR7QGh0bWwgcG9zdC5odG1sfVxyXG48L2Rpdj5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7eUNBMkRLLElBQUksQ0FBQyxLQUFLLG9DQUdQLElBQUksQ0FBQyxJQUFJOztvQ0FOUixJQUFJLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQUFWLElBQUksQ0FBQyxLQUFLOzs7O3NEQUdkLElBQUksQ0FBQyxLQUFLOzs7O3dEQUdQLElBQUksQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBN0RULGVBQWUsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOzs7Q0FHaEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUN6RCxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Q0FFOUIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtFQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0VBQ3RCLE1BQU07RUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ3JDO0NBQ0Q7OztDQUlNLE1BQUksZ0JBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=