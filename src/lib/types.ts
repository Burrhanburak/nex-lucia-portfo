export const routes = [
  { name: "Store", href: "/store" },
  { name: "Pro", href: "/pro" },
  { name: "Teams", href: "/teams" },
  { name: "Developers", href: "/developers" },
  { name: "Changelog", href: "/changelog" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Login", href: "/users/sign_in" },
] as const;

export type Route = (typeof routes)[number];
