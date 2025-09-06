/**
 * Product Data
 * Mock data for products - will be replaced with API calls later
 */
const PRODUCTS = [
  {
    id: 1,
    title: "Classic Blue Jeans",
    price: 89.99,
    color: "Blue",
    size: ["S", "M", "L", "XL"],
    image: "public/images/blue-denim-pic.png",
    category: "jeans",
    description: "Classic blue denim jeans with a comfortable fit."
  },
  {
    id: 2,
    title: "Black Denim Pants",
    price: 94.99,
    color: "Black",
    size: ["S", "M", "L", "XL"],
    image: "public/images/black-denim-pic.png",
    category: "jeans",
    description: "Sleek black denim pants perfect for any occasion."
  },
  {
    id: 3,
    title: "Light Blue Jeans",
    price: 79.99,
    color: "Light Blue",
    size: ["S", "M", "L", "XL"],
    image: "public/images/light-blue-denim-pic.png",
    category: "jeans",
    description: "Light blue denim with a relaxed fit."
  },
  {
    id: 4,
    title: "Navy Blue Denim",
    price: 99.99,
    color: "Navy Blue",
    size: ["S", "M", "L", "XL"],
    image: "public/images/navy-blue-denim.png",
    category: "jeans",
    description: "Rich navy blue denim with premium quality."
  },
  {
    id: 5,
    title: "TDU Cargo Pants",
    price: 109.99,
    color: "Khaki",
    size: ["S", "M", "L", "XL"],
    image: "public/images/tdu-cargo.png",
    category: "cargo",
    description: "Functional cargo pants with multiple pockets."
  }
];

const CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "jeans", name: "Jeans" },
  { id: "cargo", name: "Cargo Pants" },
  { id: "shorts", name: "Shorts" }
];

const COLORS = [
  "All Colors",
  "Blue",
  "Black", 
  "Light Blue",
  "Navy Blue",
  "Khaki",
  "White",
  "Gray"
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, CATEGORIES, COLORS };
} else {
  // Make available globally for vanilla JS
  window.PRODUCTS = PRODUCTS;
  window.CATEGORIES = CATEGORIES;
  window.COLORS = COLORS;
}
