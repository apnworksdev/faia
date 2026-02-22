import { s as sanityClient, g as getPost, $ as $$Layout, a as getPosts, b as $$PortableText } from '../../chunks/sanity_CG-u7Q_g.mjs';
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_C1mCjOVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import imageUrlBuilder from '@sanity/image-url';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { slug: post.slug.current }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getPost(slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title, "data-astro-cid-ztig7rse": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="post" data-astro-cid-ztig7rse> ${post.mainImage ? renderTemplate`<img class="post__cover"${addAttribute(urlFor(post.mainImage).url(), "src")} alt="Cover image" data-astro-cid-ztig7rse>` : renderTemplate`<div class="post__cover--none" data-astro-cid-ztig7rse></div>`} <div class="post__container" data-astro-cid-ztig7rse> <h1 class="post__title" data-astro-cid-ztig7rse>${post.title}</h1> <p class="post__excerpt" data-astro-cid-ztig7rse>${post.excerpt}</p> <p class="post__date" data-astro-cid-ztig7rse> ${formatDate(post._createdAt)} </p> <div class="post__content" data-astro-cid-ztig7rse> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": post.body, "data-astro-cid-ztig7rse": true })} </div> </div> </section> ` })} `;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/pages/post/[slug].astro", void 0);

const $$file = "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
