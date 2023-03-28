const cleanHref = (slug: string) => {
  let href = "";
  href = slug;
  if (slug === "home") {
    href = "/";
    return href;
  }
  if (href.slice(-1) !== "/") {
    href = href + "/";
  }
  if (href.slice(0) !== "/") {
    href = "/" + href;
  }
  return href;
};

export { cleanHref };
