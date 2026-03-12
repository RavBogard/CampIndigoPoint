import { useEffect } from "react";
import { metaDefaults, pageMeta } from "../content/meta";

const ensureMetaTag = (selector, create) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = create();
    document.head.appendChild(element);
  }

  return element;
};

const ensureCanonical = () =>
  ensureMetaTag('link[rel="canonical"]', () => {
    const link = document.createElement("link");
    link.rel = "canonical";
    return link;
  });

const ensureDescription = () =>
  ensureMetaTag('meta[name="description"]', () => {
    const meta = document.createElement("meta");
    meta.name = "description";
    return meta;
  });

const ensureThemeColor = () =>
  ensureMetaTag('meta[name="theme-color"]', () => {
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    return meta;
  });

const ensureOgTag = (property) =>
  ensureMetaTag(`meta[property="${property}"]`, () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", property);
    return meta;
  });

export const resolvePageMetadata = (pageKey) => {
  const selected = pageMeta[pageKey] ?? pageMeta.home;

  return {
    ...metaDefaults,
    ...selected,
  };
};

export const usePageMetadata = (pageKey) => {
  useEffect(() => {
    const metadata = resolvePageMetadata(pageKey);
    const canonicalUrl = new URL(
      metadata.canonicalPath ?? "/",
      window.location.origin,
    ).toString();

    document.title = metadata.title;
    ensureDescription().setAttribute("content", metadata.description);
    ensureCanonical().setAttribute("href", canonicalUrl);
    ensureThemeColor().setAttribute("content", metadata.themeColor);
    ensureOgTag("og:title").setAttribute("content", metadata.title);
    ensureOgTag("og:description").setAttribute("content", metadata.description);
    ensureOgTag("og:url").setAttribute("content", canonicalUrl);
    ensureOgTag("og:image").setAttribute("content", metadata.ogImage);
    ensureOgTag("og:site_name").setAttribute("content", metadata.siteName);
  }, [pageKey]);
};
