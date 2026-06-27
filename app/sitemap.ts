import { MetadataRoute } from "next";

const BASE_URL = "https://raizes-de-juripiranga.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      priority: 1,
    },
    {
      path: "/historia",
      priority: 0.9,
    },
    {
      path: "/geografia",
      priority: 0.9,
    },
    {
      path: "/urbanizacao",
      priority: 0.8,
    },
    {
      path: "/economia",
      priority: 0.8,
    },
    {
      path: "/meio-ambiente",
      priority: 0.8,
    },
    {
      path: "/cultura",
      priority: 0.9,
    },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
