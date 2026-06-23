import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import { urlFor } from "./image";

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset & { alt?: string };
  body: PortableTextBlock[];
}

export interface LandingLink {
  _type: "link";
  _key: string;
  url?: string;
  title?: string;
  target?: string;
}

export interface Landing {
  _type: "landing";
  headline?: string;
  missionTitle?: string;
  mission?: PortableTextBlock[];
  methodsTitle?: string;
  methods?: PortableTextBlock[];
  extraTitle?: string;
  extra?: PortableTextBlock[];
  contact?: LandingLink[];
}

export interface SiteSettings {
  _type: "siteSettings";
  favicon?: ImageAsset;
}

const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0] {
  _type,
  favicon
}`;

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return await sanityClient.fetch(SITE_SETTINGS_QUERY);
}

/** Returns the favicon URL from Settings, or null if not set. */
export function getFaviconUrl(settings: SiteSettings | null): string | null {
  if (!settings?.favicon) return null;
  return urlFor(settings.favicon).url();
}

const LANDING_QUERY = groq`coalesce(
  *[_type == "landing" && language == $language][0],
  *[_type == "landing"][0]
) {
  _type,
  headline,
  missionTitle,
  mission,
  methodsTitle,
  methods,
  extraTitle,
  extra,
  contact
}`;

export async function getLanding(language = "en"): Promise<Landing | null> {
  return await sanityClient.fetch(LANDING_QUERY, { language });
}
