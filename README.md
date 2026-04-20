# Premier Herbal Inc. — Website

Production-ready website for **Premier Herbal Inc.** (premierherbal.ca), a Toronto-based wholesale herb, spice, and botanical distributor operating since 2009.

## Folder Structure

```
premierherbal/
├── index.html          # Main HTML — all sections
├── css/
│   └── styles.css      # All styles, custom properties, responsive layout
├── js/
│   ├── products.js     # Product data array (ALL_PRODUCTS)
│   └── main.js         # Nav, catalogue filter/search, form, animations
└── README.md
```

## Opening Locally

No build step required. Open `index.html` directly in any modern browser:

```
# macOS
open premierherbal/index.html

# Windows
start premierherbal/index.html

# Or drag index.html into Chrome / Firefox / Safari
```

> **Note:** Google Fonts loads from the CDN — an internet connection is needed for the correct typefaces (Playfair Display, Lato). The site degrades gracefully to Georgia / system-ui without it.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set source to **Deploy from a branch**, pick `main` (or `master`), root `/`.
4. GitHub will publish the site at `https://<username>.github.io/<repo>/`.
5. For the custom domain `premierherbal.ca`, add a `CNAME` file at the repo root containing `premierherbal.ca`, then configure the DNS A records at your registrar to point to GitHub's IPs.

## Customisation Notes

### Colours
All brand colours are CSS custom properties in `css/styles.css` at `:root`. Change them once and every section updates:

```css
:root {
  --green:     #2D4A2D;  /* deep forest green */
  --cream:     #F5EDD6;  /* warm cream */
  --brown:     #6B3F1F;  /* rich brown */
  --gold:      #C9A84C;  /* muted gold */
  --off-white: #FDFAF3;  /* off-white */
}
```

### Adding / Editing Products
Open `js/products.js` and add objects to the `ALL_PRODUCTS` array:

```js
{ title: "New Herb Name", uses: ["Culinary", "Tea"], form: "Whole" }
```

`uses` values drive the filter tabs. Supported tags:
- Culinary, Spice, Herb → *Culinary & Spices*
- Medicinal, Supplement → *Medicinal & Supplements*
- Tea, Adaptogen → *Teas & Adaptogens*
- Ayurvedic → *Ayurvedic*
- Skincare, Topical → *Skincare & Topical*
- Detox, Digestive → *Detox & Digestive*
- Sleep, Calming → *Sleep & Calming*

`form` values: `Whole`, `Powder`, `Cut Sifted` (or any string — it appears as the card badge).

### Contact Form
The form validates client-side and shows a thank-you message — no backend or external service required. To wire it to a real email service, replace the success block in `js/main.js → initForm()` with a `fetch()` call to Formspree, Netlify Forms, or your own endpoint.

### Page Load Count (48 per page)
Change the `PAGE_SIZE` constant at the top of `initCatalogue()` in `js/main.js`.

## Browser Support

Tested and functional in Chrome 90+, Firefox 88+, Safari 14+, Edge 90+. Uses `IntersectionObserver` with a graceful fallback for older environments.
