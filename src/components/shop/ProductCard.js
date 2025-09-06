/**
 * ProductCard Component
 * Displays individual product information in a card format
 */
class ProductCard {
  constructor(productData) {
    this.product = productData;
    this.element = null;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'shop-item';
    card.innerHTML = `
      <div class="shop-item-image">
        <img src="${this.product.image}" alt="${this.product.title}">
      </div>
      <div class="shop-item-content">
        <h3 class="shop-item-title">${this.product.title}</h3>
        <p class="shop-item-price">$${this.product.price}</p>
        <p class="shop-item-color">${this.product.color}</p>
        <button class="add-to-cart-btn" data-product-id="${this.product.id}">
          Add to Cart
        </button>
      </div>
    `;

    this.element = card;
    this.setupEventListeners();
    return card;
  }

  setupEventListeners() {
    const addToCartBtn = this.element.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', this.handleAddToCart.bind(this));
    }
  }

  handleAddToCart(event) {
    event.preventDefault();
    console.log('Adding to cart:', this.product);
    
    // TODO: Implement cart functionality
    // This could dispatch an event or call a cart service
    // CartService.addItem(this.product);
  }

  // Method to update product data
  updateProduct(newProductData) {
    this.product = { ...this.product, ...newProductData };
    if (this.element) {
      this.render();
    }
  }
}

// Export for module usage (when transitioning to React)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProductCard;
}
