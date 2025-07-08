const baseUrl = "https://www.maxbeton.in";

export default async function Sitemap() {
  let products = [];

  try {
    const apiRes = await fetch(`${baseUrl}/api/products`);
    const data = await apiRes.json();
    // ✅ Ensure products is always an array
    products = Array.isArray(data?.products) ? data.products : [];
  } catch (error) {
    console.error("Failed to fetch products for sitemap:", error);
    products = [];
  }
  const sitemap = products?.reduce((acc, product) => {
    if (product?._id) {
      acc.push({
        url: `${baseUrl}/products/${product._id}`,
        lastModified: new Date().toISOString(),
        priority: 1.0, // Highest priority for product pages
        changeFrequency: "weekly",
      });
    }
    return acc;
  }, []);
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0, // Highest priority for homepage
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      priority: 0.3,
    },
  ];

  return [...staticPages, ...sitemap];
}
