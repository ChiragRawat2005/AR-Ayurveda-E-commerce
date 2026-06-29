// Format price in Indian Rupees
export const formatPrice = (price) => {
  return `₹${Number(price).toLocaleString("en-IN")}`;
};

// Calculate discount percentage
export const calculateDiscount = (price, oldPrice) => {
  if (!oldPrice || oldPrice <= price) return 0;

  return Math.round(((oldPrice - price) / oldPrice) * 100);
};

// Get total price of cart
export const calculateCartTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

// Get total quantity of cart
export const calculateCartItems = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

// Capitalize first letter
export const capitalize = (text) => {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Generate random product id (temporary)
export const generateId = () => {
  return Math.floor(Math.random() * 1000000);
};