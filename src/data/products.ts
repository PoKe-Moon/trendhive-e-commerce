export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory: string;
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
  slug: string;
}

export const categories: Category[] = [
  { id: "1", name: "Perfumes", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400", count: 124, slug: "perfumes" },
  { id: "2", name: "Lipsticks", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", count: 89, slug: "lipsticks" },
  { id: "3", name: "Skincare", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", count: 156, slug: "skincare" },
  { id: "4", name: "Clothing", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400", count: 312, slug: "clothing" },
  { id: "5", name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400", count: 78, slug: "electronics" },
  { id: "6", name: "Toys & Teddy", image: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=400", count: 64, slug: "toys" },
];

export const products: Product[] = [
  {
    id: "1", name: "Velvet Rose Eau de Parfum", brand: "Luxora", price: 89.99, originalPrice: 120,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
    category: "perfumes", subcategory: "eau-de-parfum", rating: 4.8, reviews: 234,
    description: "A captivating blend of Bulgarian rose, velvet musk, and warm amber. This luxurious fragrance unfolds beautifully throughout the day.",
    tags: ["bestseller", "floral"], inStock: true,
  },
  {
    id: "2", name: "Matte Velvet Lipstick - Ruby Red", brand: "GlowUp", price: 24.99,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600",
    category: "lipsticks", subcategory: "matte", rating: 4.6, reviews: 189,
    description: "Long-lasting matte finish with intense color payoff. Enriched with vitamin E for comfortable wear.",
    tags: ["trending", "matte"], inStock: true,
  },
  {
    id: "3", name: "Hyaluronic Acid Serum", brand: "SkinFirst", price: 34.99, originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600",
    category: "skincare", subcategory: "serums", rating: 4.9, reviews: 567,
    description: "Triple-weight hyaluronic acid for deep hydration. Plumps and smooths skin instantly.",
    tags: ["bestseller", "hydrating"], inStock: true,
  },
  {
    id: "4", name: "Silk Blend Blazer", brand: "Élan", price: 189.99,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
    category: "clothing", subcategory: "outerwear", rating: 4.7, reviews: 98,
    description: "Impeccably tailored blazer in a luxurious silk blend. Perfect for both office and evening wear.",
    tags: ["premium", "formal"], inStock: true,
  },
  {
    id: "5", name: "Wireless Noise-Cancelling Headphones", brand: "SoundWave", price: 249.99, originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    category: "electronics", subcategory: "audio", rating: 4.5, reviews: 312,
    description: "Premium ANC headphones with 40-hour battery life, adaptive sound, and ultra-comfort design.",
    tags: ["sale", "tech"], inStock: true,
  },
  {
    id: "6", name: "Giant Teddy Bear - Cream", brand: "CuddlePals", price: 49.99,
    image: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=600",
    category: "toys", subcategory: "plush", rating: 4.8, reviews: 445,
    description: "Super soft 4ft teddy bear made with premium plush fabric. Perfect gift for all ages.",
    tags: ["bestseller", "gift"], inStock: true,
  },
  {
    id: "7", name: "Midnight Oud Cologne", brand: "Luxora", price: 129.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea081e66b8e?w=600",
    category: "perfumes", subcategory: "cologne", rating: 4.7, reviews: 178,
    description: "Rich and mysterious oud fragrance with smoky undertones and a hint of leather.",
    tags: ["premium", "woody"], inStock: true,
  },
  {
    id: "8", name: "Retinol Night Cream", brand: "SkinFirst", price: 42.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38784?w=600",
    category: "skincare", subcategory: "moisturizers", rating: 4.6, reviews: 289,
    description: "Advanced retinol formula for overnight skin renewal. Wake up to smoother, brighter skin.",
    tags: ["anti-aging", "night-care"], inStock: true,
  },
  {
    id: "9", name: "Cashmere Knit Sweater", brand: "Élan", price: 149.99, originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a30?w=600",
    category: "clothing", subcategory: "knitwear", rating: 4.8, reviews: 134,
    description: "Luxuriously soft 100% cashmere sweater in a timeless crew-neck silhouette.",
    tags: ["sale", "luxury"], inStock: true,
  },
  {
    id: "10", name: "Smart Watch Pro", brand: "TechNova", price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    category: "electronics", subcategory: "wearables", rating: 4.4, reviews: 567,
    description: "Feature-packed smartwatch with health monitoring, GPS, and 7-day battery life.",
    tags: ["trending", "fitness"], inStock: true,
  },
  {
    id: "11", name: "Building Blocks Set - 500pc", brand: "BrainBuild", price: 39.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600",
    category: "toys", subcategory: "educational", rating: 4.7, reviews: 223,
    description: "Creative building set with 500 colorful pieces. Stimulates imagination and motor skills.",
    tags: ["educational", "gift"], inStock: true,
  },
  {
    id: "12", name: "Glossy Lip Oil - Peach", brand: "GlowUp", price: 18.99,
    image: "https://images.unsplash.com/photo-1631214500115-598fc2cb8ada?w=600",
    category: "lipsticks", subcategory: "lip-oil", rating: 4.5, reviews: 345,
    description: "Nourishing lip oil with a beautiful glossy finish. Infused with peach extract and vitamin C.",
    tags: ["trending", "nourishing"], inStock: true,
  },
];
