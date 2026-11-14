# Himmaika website (prototype)

D2C storefront prototype for Himmaika — postpartum "first 40 days" food from Dehradun.
Plain HTML, CSS and JavaScript. No build step, no backend; cart, booking and payment are mocked.

- `index.html` — page shell, navigation, footer
- `app.js` — products, home, shop, product pages, Our Story, cart
- `more.js` — 40-Day Plan, Gift a 40, Nutritionist, Quiz
- `info.js` — 40 Din ki Samajh (science) and Our Proof
- `styles.css` — design system

Preview locally: `node serve.cjs`, then open http://localhost:4173

Deploy: Render reads `render.yaml` and publishes this folder as a static site.
Search engines are told not to index it while it is a prototype.
