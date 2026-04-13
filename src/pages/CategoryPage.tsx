import { useParams, Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useState } from "react";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.category === slug);
  const [sortBy, setSortBy] = useState("featured");

  const sorted = [...categoryProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-foreground">{category?.name || slug}</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">{category?.name || "Products"}</h1>
          <p className="text-muted-foreground font-body mt-1">{sorted.length} products</p>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-secondary text-foreground text-sm px-4 py-2 rounded-lg border border-border font-body"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <p className="text-center text-muted-foreground py-20 font-body">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sorted.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
