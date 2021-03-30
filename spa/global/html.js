/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from '/spa/web_modules/svelte/internal/index.mjs';

import Head from '/spa/global/./head.js';
import Navigation from '/spa/global/./navigation.js';
import Footer from '/spa/global/./footer.js';

function create_fragment(ctx) {
	let html;
	let head;
	let t0;
	let body;
	let nav;
	let navigation;
	let t1;
	let main;
	let switch_instance;
	let t2;
	let footer1;
	let footer0;
	let current;

	head = new Head({
			props: { title: /*content*/ ctx[1].filename }
		});

	navigation = new Navigation({});

	const switch_instance_spread_levels = [
		/*content*/ ctx[1].fields,
		{ content: /*content*/ ctx[1] },
		{ allContent: /*allContent*/ ctx[2] },
		{ allLayouts: /*allLayouts*/ ctx[3] }
	];

	var switch_value = /*layout*/ ctx[0];

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	footer0 = new Footer({});

	return {
		c() {
			html = element("html");
			create_component(head.$$.fragment);
			t0 = space();
			body = element("body");
			nav = element("nav");
			create_component(navigation.$$.fragment);
			t1 = space();
			main = element("main");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t2 = space();
			footer1 = element("footer");
			create_component(footer0.$$.fragment);
			this.h();
		},
		l(nodes) {
			html = claim_element(nodes, "HTML", { lang: true });
			var html_nodes = children(html);
			claim_component(head.$$.fragment, html_nodes);
			t0 = claim_space(html_nodes);
			body = claim_element(html_nodes, "BODY", { class: true });
			var body_nodes = children(body);
			nav = claim_element(body_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			claim_component(navigation.$$.fragment, nav_nodes);
			nav_nodes.forEach(detach);
			t1 = claim_space(body_nodes);
			main = claim_element(body_nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			if (switch_instance) claim_component(switch_instance.$$.fragment, main_nodes);
			main_nodes.forEach(detach);
			t2 = claim_space(body_nodes);
			footer1 = claim_element(body_nodes, "FOOTER", { class: true });
			var footer1_nodes = children(footer1);
			claim_component(footer0.$$.fragment, footer1_nodes);
			footer1_nodes.forEach(detach);
			body_nodes.forEach(detach);
			html_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(nav, "class", "isFlexCentered svelte-o8ixbp");
			attr(main, "class", "isFlexCentered svelte-o8ixbp");
			attr(footer1, "class", "isFlexCentered svelte-o8ixbp");
			attr(body, "class", "isGrid svelte-o8ixbp");
			attr(html, "lang", "en");
		},
		m(target, anchor) {
			insert(target, html, anchor);
			mount_component(head, html, null);
			append(html, t0);
			append(html, body);
			append(body, nav);
			mount_component(navigation, nav, null);
			append(body, t1);
			append(body, main);

			if (switch_instance) {
				mount_component(switch_instance, main, null);
			}

			append(body, t2);
			append(body, footer1);
			mount_component(footer0, footer1, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const head_changes = {};
			if (dirty & /*content*/ 2) head_changes.title = /*content*/ ctx[1].filename;
			head.$set(head_changes);

			const switch_instance_changes = (dirty & /*content, allContent, allLayouts*/ 14)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*content*/ 2 && get_spread_object(/*content*/ ctx[1].fields),
					dirty & /*content*/ 2 && { content: /*content*/ ctx[1] },
					dirty & /*allContent*/ 4 && { allContent: /*allContent*/ ctx[2] },
					dirty & /*allLayouts*/ 8 && { allLayouts: /*allLayouts*/ ctx[3] }
				])
			: {};

			if (switch_value !== (switch_value = /*layout*/ ctx[0])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, main, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			transition_in(head.$$.fragment, local);
			transition_in(navigation.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			transition_in(footer0.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(head.$$.fragment, local);
			transition_out(navigation.$$.fragment, local);
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			transition_out(footer0.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(html);
			destroy_component(head);
			destroy_component(navigation);
			if (switch_instance) destroy_component(switch_instance);
			destroy_component(footer0);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { layout } = $$props,
		{ content } = $$props,
		{ allContent } = $$props,
		{ allLayouts } = $$props;

	$$self.$$set = $$props => {
		if ("layout" in $$props) $$invalidate(0, layout = $$props.layout);
		if ("content" in $$props) $$invalidate(1, content = $$props.content);
		if ("allContent" in $$props) $$invalidate(2, allContent = $$props.allContent);
		if ("allLayouts" in $$props) $$invalidate(3, allLayouts = $$props.allLayouts);
	};

	return [layout, content, allContent, allLayouts];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			layout: 0,
			content: 1,
			allContent: 2,
			allLayouts: 3
		});
	}
}

export default Component;