interface Product {
  id: string; // Ensure this matches the actual property name
  _id?: string; // Add this if your product objects use `_id` instead of `id`
  title: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  discountPercentage: number;
  inventory?: number; // Add this to handle inventory in the cart
}

// Add a product to the cart
export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]'); 

  // Use `id` or `_id` based on your data structure
  const existingProductIndex = cart.findIndex(item => item.id === product.id || item._id === product._id);

  if (existingProductIndex > -1) {
    // If the product already exists in the cart, increment its inventory
    cart[existingProductIndex].inventory = (cart[existingProductIndex].inventory || 1) + 1;
  } else {
    // If the product is not in the cart, add it with an initial inventory of 1
    cart.push({ ...product, inventory: 1 });
  }

  // Update the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Remove a product from the cart
export const removeFromCart = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  // Filter out the product with the matching ID
  cart = cart.filter(item => item.id !== productId && item._id !== productId);

  // Update the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  // Find the product in the cart
  const productIndex = cart.findIndex(item => item.id === productId || item._id === productId);

  if (productIndex > -1) {
    // Update the inventory if the product exists
    cart[productIndex].inventory = quantity;

    // If the quantity is 0 or less, remove the product from the cart
    if (cart[productIndex].inventory <= 0) {
      cart.splice(productIndex, 1);
    }

    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

// Get all items in the cart
export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem('cart') || '[]');
};