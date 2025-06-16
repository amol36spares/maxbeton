import HomePage from "./HomePage";

export const metadata = {
  title: "Electric Wheelbarrow Dumpers Manufacturer in India | MaxBeton",
  description:
    "MaxBeton—India’s trusted source for construction equipment. Shop excavators, loaders & cranes. Fast delivery, secure checkout & expert support.",
  keywords: [
    "electric wheelbarrow dumper",
    "wheelbarrow dumper manufacturer India",
    "electric construction wheelbarrow",
    "battery-powered dumper",
    "electric dump cart India",
    "MaxBeton wheelbarrow",
    "eco-friendly construction equipment",
    "electric site dumper",
    "electric mini dumper India",
    "MaxBeton machinery",
    "MaxBeton"
  ],
  openGraph: {
    title: "Electric Wheelbarrow Dumpers Manufacturer in India | MaxBeton",
    description:
      "Electric wheelbarrow and dumper manufacturers. Also, manufacture engine-based small efficient self loading dumpers",
    url: "https://www.maxbeton.in",
    siteName: "MaxBeton",
    images: [
      {
        url: "\Home-Image.jpeg",
        width: 1200,
        height: 630,
        alt: "MaxBeton Construction Machinery for Sale"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Heavy Construction Equipment Online | MaxBeton",
    description:
      "Explore a wide range of construction equipment for sale online at MaxBeton. Top quality, reliable service, and quick delivery across India.",
  },
  alternates: {
    canonical: "https://www.maxbeton.in"
  }
};


export default function Home() {
  return (
    <HomePage />
  );
}
