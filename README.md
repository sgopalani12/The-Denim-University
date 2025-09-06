# The Denim University - E-commerce Website

A modern, component-based e-commerce website for premium denim products.

## 🏗️ Project Structure

```
The-Denim-University/
├── public/                     # Static assets
│   └── images/                # All image assets
├── src/                       # Source code
│   ├── components/            # Reusable UI components
│   │   ├── common/           # Shared components (Navigation, Footer, etc.)
│   │   ├── shop/             # Shop-specific components
│   │   └── cart/             # Cart components
│   ├── pages/                # HTML page files
│   ├── services/             # JavaScript business logic
│   ├── styles/               # CSS files organized by purpose
│   │   ├── base/            # Base styles (reset, typography)
│   │   ├── components/      # Component-specific styles
│   │   └── pages/           # Page-specific styles
│   ├── utils/                # Utility functions
│   └── data/                 # Static data & mock data
├── docs/                     # Documentation
└── index.html               # Main entry point
```

## 🚀 Getting Started

### Prerequisites
- A local web server (Python, Node.js, PHP, or VS Code Live Server)

### Running Locally

**Option 1: Python (Recommended)**
```bash
# Navigate to project directory
cd "C:\Users\jeffr\Documents\The-Denim-University"

# Start local server
python -m http.server 8000
```

**Option 2: Node.js**
```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server -p 8000
```

**Option 3: VS Code Live Server**
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Access the Website
Open your browser and navigate to: `http://localhost:8000`

## 📁 File Organization

### Components Architecture
- **Common Components**: Navigation, Footer, SearchBar, ProductCard
- **Shop Components**: ProductGrid, FilterDropdown, SortOptions
- **Cart Components**: CartItem, CartSummary

### Services (JavaScript)
- `filter-data.js` - Product filtering logic
- `grid-images.js` - Image grid functionality
- `item-page-filters.js` - Individual product page filters
- `searchbar-filter.js` - Search functionality
- `shop-filters.js` - Shop page filtering

### Styles Organization
- **Base**: `styles.css` - Core styles, typography, layout
- **Pages**: Page-specific styles (shop.css, contact.css, etc.)
- **Components**: Component-specific styles (future)

## 🎯 Development Goals

This project is structured to support the transition from vanilla JavaScript to React.js:

1. **Phase 1**: JavaScript Fundamentals Mastery
2. **Phase 2**: Component Architecture Refactoring
3. **Phase 3**: React.js Migration

See `docs/Goals.md` for detailed learning objectives.

## 🛠️ Features

- **Responsive Design**: Mobile-first approach
- **Product Search & Filtering**: Advanced filtering capabilities
- **Shopping Cart**: Full cart functionality
- **Multiple Product Categories**: Organized product catalog
- **Contact & Support Pages**: Customer service integration
- **Social Media Integration**: Instagram and Facebook links

## 📱 Pages

- **Homepage** (`index.html`) - Hero section with call-to-action
- **Shop** (`src/pages/shop.html`) - Product catalog with filters
- **Product Pages** (`src/pages/itempage.html`) - Individual product details
- **Shopping Cart** (`src/pages/shopcart.html`) - Cart management
- **Support Pages**: Contact, Returns, Shipping, Order Status, Privacy Policy

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Roboto, Tektur)
- **Architecture**: Component-based structure (preparing for React migration)

## 📈 Future Enhancements

- React.js migration
- Backend API integration
- Database integration
- User authentication
- Payment processing
- Advanced search functionality
- Product reviews and ratings

## 🤝 Contributing

This is a learning project focused on modern web development practices and React.js preparation.

## 📄 License

This project is for educational purposes.