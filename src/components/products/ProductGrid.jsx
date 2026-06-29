import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  // Empty State
  if (!products || products.length === 0) {
    return (
      <div className="flex h-80 items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Products Found
          </h2>

          <p className="mt-2 text-gray-500">
            Try changing your filters or search keyword.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section>
      {/* Products Count */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Products
        </h2>

        <span className="text-gray-600">
          {products.length} Product{products.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;