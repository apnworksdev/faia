import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, r as renderTemplate, d as renderComponent, b as addAttribute, F as Fragment, f as renderHead } from './astro/server_C1mCjOVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { LIST_NEST_MODE_HTML, isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, buildMarksTree, nestLists } from '@portabletext/toolkit';
import 'clsx';
/* empty css                         */
import { createClient } from '@sanity/client';
import groq from 'groq';

const sanityClient = createClient(
            {"apiVersion":"2024-12-08","projectId":"9xslap8x","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function useContext(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$8 = createAstro();
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = useContext(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$7 = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$6 = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$5 = createAstro();
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = useContext(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$4 = createAstro();
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$3 = createAstro();
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortableText;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const serializeNode = (isInline) => (node, index = 0) => asComponentProps(node, index, isInline);
  const serializeChildren = (node, isInline) => node.children.map(serializeNode(isInline));
  const serializeMarksTree = (node) => buildMarksTree(node).map(serializeNode(true));
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type) => {
    const component = components[nodeType];
    return isComponent(component) ? component : component[type] ?? missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
  };
  const prepareForRender = (props) => {
    const { node } = props;
    return isPortableTextToolkitList(node) ? [
      provideComponent("list", node.listItem) ?? components.unknownList,
      serializeChildren(node, false)
    ] : isPortableTextListItemBlock(node) ? [
      provideComponent("listItem", node.listItem) ?? components.unknownListItem,
      serializeMarksTree(node).map((children) => {
        if (node.style !== "normal") {
          const { listItem, ...blockNode } = node;
          children = serializeNode(false)(blockNode, 0);
        }
        return children;
      })
    ] : isPortableTextToolkitSpan(node) ? [
      provideComponent("mark", node.markType) ?? components.unknownMark,
      serializeChildren(node, true)
    ] : isPortableTextBlock(node) ? [
      provideComponent(
        "block",
        node.style ?? (node.style = "normal")
        /* Make sure style has been set */
      ) ?? components.unknownBlock,
      serializeMarksTree(node)
    ] : isPortableTextToolkitTextNode(node) ? [
      "\n" === node.text && isComponent(components.hardBreak) ? components.hardBreak : node.text,
      []
    ] : [
      provideComponent("type", node._type) ?? components.unknownType,
      []
    ];
  };
  globalThis[key] = (node) => {
    return {
      getDefaultComponent: provideDefaultComponent.bind(null, node),
      getUnknownComponent: provideUnknownComponent.bind(null, node)
    };
  };
  const provideDefaultComponent = (node) => {
    return isPortableTextToolkitList(node) ? $$List : isPortableTextListItemBlock(node) ? $$ListItem : isPortableTextToolkitSpan(node) ? $$Mark : isPortableTextBlock(node) ? $$Block : isPortableTextToolkitTextNode(node) ? $$HardBreak : $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    return isPortableTextToolkitList(node) ? components.unknownList : isPortableTextListItemBlock(node) ? components.unknownListItem : isPortableTextToolkitSpan(node) ? components.unknownMark : isPortableTextBlock(node) ? components.unknownBlock : !isPortableTextToolkitTextNode(node) ? components.unknownType : (() => {
      throw new Error(
        `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
      );
    })();
  };
  const blocks = Array.isArray(value) ? value : [value];
  function* renderBlocks() {
    let index = 0;
    for (const it of nestLists(blocks, listNestingMode)) {
      yield asComponentProps(it, index++, false);
    }
  }
  return renderTemplate`${[...renderBlocks()].map(function render(props) {
    const [Cmp, children] = prepareForRender(props);
    return !isComponent(Cmp) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${Cmp}` })}` : renderTemplate`${renderComponent($$result, "Cmp", Cmp, { ...props }, { "default": ($$result2) => renderTemplate`${children.map(render)}` })}`;
  })}`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="221" height="95" viewBox="0 0 221 95" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0.0129318H66.4638V15.9801H18.8224V38.3081H59.1924V54.4054H18.8224V92.8307H0V0.0194421V0.0129318Z" fill="white"></path> <path d="M109.685 85.4231H109.425C106.049 90.4832 101.249 94.3791 89.8216 94.3791C76.1894 94.3791 66.5831 87.2377 66.5831 74.0022C66.5831 59.3358 78.5243 54.6595 93.3208 52.5847C104.351 51.0303 109.418 50.1197 109.418 45.0532C109.418 39.9866 105.652 37.1379 98.2572 37.1379C89.9517 37.1379 85.9258 40.1232 85.4055 46.484H69.6984C70.2188 34.803 78.9145 24.5462 98.3873 24.5462C117.86 24.5462 126.426 33.5022 126.426 49.0791V82.9581C126.426 88.0182 127.206 91.0035 128.761 92.1742V92.8246H111.759C110.719 91.5238 110.068 88.4084 109.685 85.4231ZM109.815 69.3259V59.3293C106.699 61.1439 101.899 62.1845 97.4833 63.2252C88.2672 65.2999 83.7274 67.3812 83.7274 73.612C83.7274 79.8427 87.8835 82.0476 94.1142 82.0476C104.241 82.0476 109.821 75.8168 109.821 69.3259H109.815Z" fill="white"></path> <path d="M135.005 0.0127029H152.656V15.8498H135.005V0.0127029ZM135.005 26.2301H152.656V92.824H135.005V26.2301Z" fill="white"></path> <path d="M201.337 85.4231H201.077C197.702 90.4832 192.902 94.3791 181.474 94.3791C167.842 94.3791 158.236 87.2377 158.236 74.0022C158.236 59.3358 170.177 54.6595 184.973 52.5847C196.004 51.0303 201.071 50.1197 201.071 45.0532C201.071 39.9866 197.305 37.1379 189.91 37.1379C181.604 37.1379 177.578 40.1232 177.058 46.484H161.351C161.871 34.803 170.567 24.5462 190.04 24.5462C209.513 24.5462 218.078 33.5022 218.078 49.0791V82.9581C218.078 88.0182 218.859 91.0035 220.413 92.1742V92.8246H203.412C202.371 91.5238 201.721 88.4084 201.337 85.4231ZM201.467 69.3259V59.3293C198.352 61.1439 193.552 62.1845 189.136 63.2252C179.92 65.2999 175.38 67.3812 175.38 73.612C175.38 79.8427 179.536 82.0476 185.767 82.0476C195.893 82.0476 201.474 75.8168 201.474 69.3259H201.467Z" fill="white"></path> <path d="M217.142 0H164.382V15.8891H217.142V0Z" fill="white"></path> </svg>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/components/Logo.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { language = "en", pathname = "/" } = Astro2.props;
  const languages = [
    { id: "en", label: "En" },
    { id: "el", label: "Gr" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="header"> <a class="header-logo" href="/"> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <nav class="header-langs" aria-label="Language"> ${languages.map((lang) => renderTemplate`<a${addAttribute(`header-lang-link${language === lang.id ? " header-lang-link-active" : ""}`, "class")}${addAttribute(lang.id === "en" ? pathname || "/" : `${pathname || "/"}?lang=${lang.id}`, "href")}> ${lang.label} </a>`)} </nav> <p class="header-description">
Forensic Architecture<br>
Initiative Athens
</p> </header>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const now = /* @__PURE__ */ new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Athens",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "shortOffset"
  });
  const parts = formatter.formatToParts(now);
  const get = (type) => parts.find((p) => p.type === type)?.value ?? "";
  const tz = (get("timeZoneName") || "GMT+2").replace("GMT+", "GMT +").replace("GMT-", "GMT -");
  const formattedDateTime = `${get("month")} ${get("day")} ${get("year")} ${get("hour")}:${get("minute")} ${tz}`;
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <p class="footer-element copyright">© All rights reserved.</p> <p class="footer-element date-time" data-datetime>${formattedDateTime}</p> </footer> `;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, language = "en" } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`<html${addAttribute(language, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preload" href="/fonts/HelveticaNeueLTPro-Md.woff2" as="font" type="font/woff2" crossorigin><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <div class="container"> ${renderComponent($$result, "Header", $$Header, { "language": language, "pathname": pathname })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/layouts/Layout.astro", void 0);

async function getPosts() {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}
async function getPost(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug
    }
  );
}
const LANDING_QUERY = groq`coalesce(
  *[_type == "landing" && language == $language][0],
  *[_type == "landing"][0]
) {
  _type,
  headline,
  mission,
  methods,
  contact
}`;
async function getLanding(language = "en") {
  return await sanityClient.fetch(LANDING_QUERY, { language });
}

export { $$Layout as $, getPosts as a, $$PortableText as b, getLanding as c, getPost as g, sanityClient as s };
