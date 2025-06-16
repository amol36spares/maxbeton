import ProductsPage from "./ProductsPage"

export const metadata = {
  title: "MaxBeton Products | Buy or Rent Construction Equipment Online",
  description:
    "Browse MaxBeton's catalog of construction equipment for sale & rent. Electric Wheelbarrows and wheel dumpers, electric and diesel driven self loading dumpers, electric and diesel driven ride on dumpers for any project site in India. Fast delivery. Manufacturing in India",
  keywords: [
    "MaxBeton products",
    "buy construction equipment",
    "Electric wheelbarrows, electric driven wheel dumpers, electric self loading dumpers",
    "Diesel driven wheel dumpers, self loading dumpers",
    "rent wheelbarrows, wheel dumpers for India",
    "construction machinery listings",
    "heavy equipment for sale",
    "equipment sales",
    "construction tools MaxBeton"
  ],
  openGraph: {
    title: "MaxBeton | Electric driven equipment for sites and factories",
    description:
      "Explore a wide selection of construction equipment available for your sites, factories and warehouses. MaxBeton delivers reliable machines for every job site.",
    url: "https://www.maxbeton.in/products",
    siteName: "MaxBeton",
    images: [
      {
        url: "Home-Image.jpeg",
        width: 1200,
        height: 630,
        alt: "Wide selection of MaxBeton construction equipment"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxBeton Products | Heavy Equipment for Sale & Rent",
    description:
      "Discover top-quality construction machinery from MaxBeton. Shop or rent equipment for all your building and factory needs—fast, affordable, and reliable.",
  },
  alternates: {
    canonical: "https://www.maxbeton.in/products"
  }
};



export default function page() {
  return (
    <div>
      <ProductsPage />
    </div>
  )
}
