/**
 * Navigation Component
 * Handles the main navigation bar functionality
 */
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupSearchFunctionality();
  }

  setupEventListeners() {
    // Navigation event listeners
    const navLinks = document.querySelectorAll('.navbar-option');
    navLinks.forEach(link => {
      link.addEventListener('click', this.handleNavigation.bind(this));
    });
  }

  setupSearchFunctionality() {
    const searchForm = document.querySelector('.search-box');
    if (searchForm) {
      searchForm.addEventListener('submit', this.handleSearch.bind(this));
    }
  }

  handleNavigation(event) {
    // Navigation logic
    console.log('Navigation clicked:', event.target.textContent);
  }

  handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    console.log('Searching for:', query);
    
    // TODO: Implement actual search logic
    // This could redirect to shop page with search parameters
    // window.location.href = `src/pages/shop.html?search=${encodeURIComponent(query)}`;
  }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});

// Export for module usage (when transitioning to React)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navigation;
}
