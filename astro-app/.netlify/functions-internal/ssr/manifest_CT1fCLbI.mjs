import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_C1mCjOVF.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DDOlpn4O.js"}],"styles":[{"type":"inline","content":"main{padding:480px 180px 680px 240px;padding:480px 8vw 320px 12vw}.landing-headline{font-size:50px;line-height:.95;margin-bottom:240px}.landing-section{display:grid;grid-template-columns:1fr 4fr;gap:10px;margin-top:140px}.landing-section-title{color:var(--color-gray)}.landing-content{font-size:28px;line-height:1}.landing-content p:not(:last-child){margin-bottom:28px}.vimeo-embed{position:relative;width:100%;padding-top:56.25%;margin:60px 0 115px}.vimeo-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}.landing-links{display:flex;flex-direction:column}.landing-coming-soon-section .landing-content{grid-column:2}@media (max-width: 1550px){.landing-headline{font-size:40px}.landing-section-title{font-size:14px}.landing-content{font-size:22px}}@media (max-width: 820px){main{padding:350px 24px 150px 10px}.landing-headline{font-size:30px;margin-bottom:70px}.landing-section{display:flex;flex-direction:column;margin-top:60px}.landing-content{font-size:16px}.vimeo-embed{margin:10px 0 45px}}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--color-black: #000000;--color-white: #ffffff;--color-gray: #555555;--color-accent: #FF6300}*:focus,*:focus-visible{outline:none!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important;box-shadow:none!important}::-webkit-scrollbar{display:none;-webkit-appearance:none;width:0!important}*,*:before,*:after{font-family:inherit;font-weight:inherit;font-size:inherit;margin:0;padding:0;border-radius:0;box-sizing:border-box;color:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*::-moz-selection{background:var(--selection-background-color);color:var(--selection-foreground-color)}*::selection{background:var(--selection-background-color);color:var(--selection-foreground-color)}html{overflow-x:hidden}ul,ol,menu{list-style:none}a,input,button,fieldset,textarea{all:unset}a,button{cursor:pointer}button[hidden],input[hidden]{display:none}textarea::-moz-placeholder,input::-moz-placeholder{color:inherit}textarea::placeholder,input::placeholder{color:inherit}summary{list-style:none}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px var(--background-color) inset!important}.uppercase{text-transform:uppercase}html{background:var(--color-black);color:var(--color-white)}body{font-family:HelveticaNeueLTPro,sans-serif;font-weight:700}.container{display:contents}header:before,footer:after{content:\"\";position:fixed;left:0;width:100%;height:15%;background:#000;background:linear-gradient(to bottom,#000,#000 18%,#0000);z-index:-1;pointer-events:none}header:before{top:0;height:30%;background:linear-gradient(to bottom,#000,#000 55%,#0000)}footer:after{bottom:-2px;transform:rotate(180deg)}main a,.landing-coming-soon{font-weight:300;color:var(--color-accent)}main a{text-decoration:underline;text-underline-offset:2px;text-decoration-thickness:.5px}main a:hover{text-decoration:none}@media (max-width: 820px){body{font-size:16px}body:before{height:20%}footer:after{bottom:20px}}header{position:fixed;top:0;left:0;z-index:100;display:grid;grid-template-columns:repeat(2,max-content);font-size:18px;align-items:end;padding:20px;-moz-column-gap:7px;column-gap:7px;width:100vw}.header-logo{line-height:0}.header-langs{grid-row:2;display:flex;-moz-column-gap:7px;column-gap:7px}.header-description{grid-row:2}.header-lang-link:not(.header-lang-link-active){color:var(--color-gray)}footer{position:fixed;bottom:0;left:0;right:0;z-index:100;color:var(--color-gray);width:100vw;padding:20px 20px 17px;display:flex;justify-content:space-between;gap:10px}.date-time{text-align:right}@media (max-width: 820px){header{padding:10px;background:#000}.header-langs,footer{font-size:14px}.header-logo{width:125px}.header-logo svg{width:100%;height:auto}footer{padding:10px 10px 8px;background:#000}}@font-face{font-family:HelveticaNeueLTPro;src:url(/fonts/HelveticaNeue-Light.woff2) format(\"woff2\");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:HelveticaNeueLTPro;src:url(/fonts/HelveticaNeue-Medium.woff2) format(\"woff2\");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:HelveticaNeueLTPro;src:url(/fonts/HelveticaNeue-Bold.woff2) format(\"woff2\");font-weight:700;font-style:normal;font-display:swap}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/chris/Desktop/SERVERS/FAIA/FAIA_DEV/astro-app/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:../node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CT1fCLbI.mjs","@astrojs/react/client.js":"_astro/client.UBkPjaHP.js","/astro/hoisted.js?q=0":"_astro/hoisted.DDOlpn4O.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/astro.svg","/favicon.svg","/sanity.svg","/_astro/client.UBkPjaHP.js","/_astro/hoisted.DDOlpn4O.js","/fonts/HelveticaNeue-Bold.woff2","/fonts/HelveticaNeue-Light.woff2","/fonts/HelveticaNeue-Medium.woff2","/fonts/HelveticaNeueLTPro-Bd.woff2","/fonts/HelveticaNeueLTPro-Lt.woff2","/fonts/HelveticaNeueLTPro-Md.woff2"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"1BUGW7toc3FO3zP+xMfzaL9JqTQuT9ZhzU7p+I8H2B8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
