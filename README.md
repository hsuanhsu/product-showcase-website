# Product Showcase Website

A responsive product showcase website built with React. This platform allows users to browse products across different categories, view product details, and access product pages through affiliate marketing links.

## Features

- Responsive design for desktop and mobile devices
- Product categorization and search functionality
- Product detail modal
- Integrated affiliate marketing links
- Discount code display and copy feature

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- Font Awesome (for icons)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/product-showcase-website.git
   ```

2. Navigate to the project directory:
   ```
   cd product-showcase-website
   ```

3. Install dependencies (if using npm):
   ```
   npm install
   ```

## Usage

1. Run the project locally:
   ```
   npm start
   ```

2. Access the website in your browser at `http://localhost:3000` (or the port shown in your console).

## Customization

- Modify the `products` array in `product-showcase-app.js` to add or change products.
- Adjust the `product-showcase-styles.css` file to alter the website's appearance.
- Update metadata and title in `product-showcase-website.html`.

## Deployment

This project can be deployed to any static website hosting service such as GitHub Pages, Netlify, or Vercel.

For example, to deploy using GitHub Pages:

1. Add a "homepage" field to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/product-showcase-website"
   ```

2. Install gh-pages:
   ```
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Run the deploy command:
   ```
   npm run deploy
   ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
