import { c as getLanding, $ as $$Layout, b as $$PortableTextContent } from '../chunks/Layout_BmyK8GwE.mjs';
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C1mCjOVF.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const language = Astro2.url.searchParams.get("lang") || "en";
  const landing = await getLanding(language);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fai\u0101", "language": language }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="landing"> ${landing ? renderTemplate`<div class="landing-container"> ${landing.headline && renderTemplate`<p class="landing-headline">${landing.headline}</p>`} ${landing.mission && landing.mission.length > 0 && renderTemplate`<div class="landing-section"> <h2 class="landing-section-title">${landing.missionTitle || "Mission"}</h2> <div class="landing-content"> ${renderComponent($$result2, "PortableTextContent", $$PortableTextContent, { "value": landing.mission, "openLinksInNewTab": true })} </div> </div>`} ${landing.methods && landing.methods.length > 0 && renderTemplate`<div class="landing-section"> <h2 class="landing-section-title">${landing.methodsTitle || "Methods"}</h2> <div class="landing-content"> ${renderComponent($$result2, "PortableTextContent", $$PortableTextContent, { "value": landing.methods, "openLinksInNewTab": true })} </div> </div>`} ${landing.extra && landing.extra.length > 0 && renderTemplate`<div class="landing-section"> <h2 class="landing-section-title">${landing.extraTitle || "Extra"}</h2> <div class="landing-content"> ${renderComponent($$result2, "PortableTextContent", $$PortableTextContent, { "value": landing.extra, "openLinksInNewTab": true })} </div> </div>`} ${landing.contact && landing.contact.length > 0 && renderTemplate`<div class="landing-section"> <h2 class="landing-section-title">Contact</h2> <nav class="landing-content landing-links"> ${landing.contact.map((link) => renderTemplate`<a class="landing-link"${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer"> ${link.title || link.url} </a>`)} </nav> </div>`} </div>` : renderTemplate`<p class="landing-empty">No landing content yet. Add content in Sanity Studio.</p>`} <div class="landing-section landing-coming-soon-section"> <div class="landing-content"> <p class="landing-coming-soon">Complete website coming soon.</p> </div> </div> </section> ` })}`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/pages/index.astro", void 0);

const $$file = "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
