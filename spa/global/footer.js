/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from '/spa/web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let footer;
	let span0;
	let t0;
	let a0;
	let t1;
	let t2;
	let span1;
	let t3;
	let t4;
	let span2;
	let t5;
	let a1;
	let t6;
	let t7;
	let span3;
	let t8;
	let t9;
	let span4;
	let t10;
	let a2;
	let t11;

	return {
		c() {
			footer = element("footer");
			span0 = element("span");
			t0 = text("© 2021\n    ");
			a0 = element("a");
			t1 = text("PaperMod");
			t2 = space();
			span1 = element("span");
			t3 = text("·");
			t4 = space();
			span2 = element("span");
			t5 = text("Powered by\n    ");
			a1 = element("a");
			t6 = text("Plenti");
			t7 = space();
			span3 = element("span");
			t8 = text("·");
			t9 = space();
			span4 = element("span");
			t10 = text("Theme\n    ");
			a2 = element("a");
			t11 = text("PaperMod");
			this.h();
		},
		l(nodes) {
			footer = claim_element(nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			span0 = claim_element(footer_nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "© 2021\n    ");

			a0 = claim_element(span0_nodes, "A", {
				class: true,
				rel: true,
				target: true,
				href: true
			});

			var a0_nodes = children(a0);
			t1 = claim_text(a0_nodes, "PaperMod");
			a0_nodes.forEach(detach);
			span0_nodes.forEach(detach);
			t2 = claim_space(footer_nodes);
			span1 = claim_element(footer_nodes, "SPAN", {});
			var span1_nodes = children(span1);
			t3 = claim_text(span1_nodes, "·");
			span1_nodes.forEach(detach);
			t4 = claim_space(footer_nodes);
			span2 = claim_element(footer_nodes, "SPAN", {});
			var span2_nodes = children(span2);
			t5 = claim_text(span2_nodes, "Powered by\n    ");

			a1 = claim_element(span2_nodes, "A", {
				class: true,
				href: true,
				rel: true,
				target: true
			});

			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, "Plenti");
			a1_nodes.forEach(detach);
			span2_nodes.forEach(detach);
			t7 = claim_space(footer_nodes);
			span3 = claim_element(footer_nodes, "SPAN", {});
			var span3_nodes = children(span3);
			t8 = claim_text(span3_nodes, "·");
			span3_nodes.forEach(detach);
			t9 = claim_space(footer_nodes);
			span4 = claim_element(footer_nodes, "SPAN", {});
			var span4_nodes = children(span4);
			t10 = claim_text(span4_nodes, "Theme\n    ");

			a2 = claim_element(span4_nodes, "A", {
				class: true,
				href: true,
				rel: true,
				target: true
			});

			var a2_nodes = children(a2);
			t11 = claim_text(a2_nodes, "PaperMod");
			a2_nodes.forEach(detach);
			span4_nodes.forEach(detach);
			footer_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "class", " svelte-5k3e2e");
			attr(a0, "rel", "noopener noreferrer");
			attr(a0, "target", "_blank");
			attr(a0, "href", "https://adityatelange.github.io/hugo-PaperMod/");
			attr(a1, "class", " svelte-5k3e2e");
			attr(a1, "href", "https://plenti.co/");
			attr(a1, "rel", "noopener noreferrer");
			attr(a1, "target", "_blank");
			attr(a2, "class", " svelte-5k3e2e");
			attr(a2, "href", "https://git.io/hugopapermod");
			attr(a2, "rel", "noopener noreferrer");
			attr(a2, "target", "_blank");
			attr(footer, "class", " svelte-5k3e2e");
		},
		m(target, anchor) {
			insert(target, footer, anchor);
			append(footer, span0);
			append(span0, t0);
			append(span0, a0);
			append(a0, t1);
			append(footer, t2);
			append(footer, span1);
			append(span1, t3);
			append(footer, t4);
			append(footer, span2);
			append(span2, t5);
			append(span2, a1);
			append(a1, t6);
			append(footer, t7);
			append(footer, span3);
			append(span3, t8);
			append(footer, t9);
			append(footer, span4);
			append(span4, t10);
			append(span4, a2);
			append(a2, t11);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(footer);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;