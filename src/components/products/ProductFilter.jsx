import { FaSearch } from "react-icons/fa";

const ProductFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories,
}) => {
  return (
    <div className="mb-10 rounded-2xl bg-white p-6 shadow-md">
      <div className="grid gap-6 md:grid-cols-3">

        {/* Search */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Search Product
          </label>

          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-green-700"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Category
          </label>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-green-700"
          >
            <option value="All">All Categories</option>

            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Sort By
          </label>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-green-700"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price : Low to High</option>
            <option value="highToLow">Price : High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">A - Z</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default ProductFilter;