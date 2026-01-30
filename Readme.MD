# SERENE - Fine Jewelry Website

A refined, elegant multi-page jewelry website with shopping cart functionality and contact form.

## Features

- **4 Separate Pages**: Home, Collection, About, and Contact
- **Shopping Cart**: Add/remove items with localStorage persistence
- **Contact Form**: Fully functional with validation
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Refined Aesthetics**: Soft color palette with subtle animations

## File Structure

```
serene-jewelry/
├── index.html          - Home page
├── collection.html     - Products page
├── about.html          - About page
├── contact.html        - Contact page
├── styles.css          - Main stylesheet
├── cart.js             - Shopping cart functionality
├── products.js         - Product data and display
├── contact.js          - Contact form handler
└── README.md           - This file
```

## How to Use

1. **Download all files** into a single folder
2. **Open index.html** in your web browser
3. Navigate between pages using the navigation menu
4. Add items to cart from the Collection page
5. Fill out the contact form on the Contact page

## Customization

### Update Products
Edit the `products` array in both `products.js` and `cart.js` to add/modify products.

### Change Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --soft-beige: #F4F1EA;
    --warm-grey: #8B8B8B;
    --charcoal: #3A3A3A;
    --muted-gold: #C9A961;
    --cream: #FDFBF7;
    --sage: #B4C4AE;
    --light-border: #E5E1D8;
}
```

### Add Product Images
Replace the SVG placeholder images with actual product images:
```javascript
image: "path/to/your/image.jpg"
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- Cart data persists using localStorage
- Contact form currently displays success message (connect to backend for actual email sending)
- All JavaScript is vanilla (no frameworks required)

## License

Free to use and modify for personal or commercial projects.
