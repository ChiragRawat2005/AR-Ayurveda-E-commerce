import { useMemo, useState } from "react";

import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import { Link } from "react-router-dom";

// Temporary Data
import productsData from "../data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "Immunity",
    "Digestive Care",
    "Hair Care",
    "Heart Care",
    "Women's Wellness",
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];

    // Search
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Sorting
    switch (sortBy) {
      case "lowToHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "highToLow":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <>
      <section className="bg-[#FCFAF4] py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold text-[#184E2C]">Products</h1>

          <div className="mt-6 flex items-center justify-center gap-3 text-gray-500">
            <Link to="/" className="transition hover:text-green-700">
              Home
            </Link>

            <span>›</span>

            <span className="font-medium text-[#184E2C]">Products</span>
          </div>
        </div>
      </section>
      <section className="bg-[#F8FAF8] py-14 md:py-8">
        <div className="mx-auto w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <ProductFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={categories}
          />

          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  );
};

export default Products;
