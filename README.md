# MR3 System

MR3 System is a static browser-based pharmacy POS, invoicing, inventory, accounting, reports, users, permissions, and settings application built with HTML, CSS, and JavaScript only.

## Default Logins

Admin:

- Email: `admin@example.com`
- Password: `Admin@123456`

User:

- Email: `user@example.com`
- Password: `User@123456`

The login page does not display these credentials publicly.

## Run Locally

Open `index.html` directly in a browser, or run a small static server from this folder:

```bash
npx serve
```

You can also use:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish

The project has no backend, build step, external database, `DATABASE_URL`, or secrets.

Publish the whole folder to any static hosting service:

- Netlify: drag and drop the project folder or deploy from Git.
- GitHub Pages: push the files and enable Pages from the repository settings.
- Vercel static hosting: import the folder/repository as a static site.

For Vercel-specific deployment settings and Arabic steps, see `VERCEL_DEPLOY.md`.

## Local Browser Database

Data is stored locally in the browser in an encoded local store with an automatic local backup copy. It persists after refreshes on the same browser profile. Clearing all site data, using another browser, or opening a different profile creates a separate local database.

Because this is a static offline browser app, browser storage cannot be made fully invisible or undeletable from developer tools. For stronger protection, the storage layer should later be moved to a backend with authenticated server-side access.

Admin users can reset the demo data from Settings.

## Included Modules

- Authentication and remembered sessions
- Interactive Home page with live quick actions, activity, stock, and expiry widgets
- Editable admin/user profiles with personal data and profile photos
- Light and night modes with saved theme preference across login and the full system
- Admin and user permissions
- Arabic and English interface with RTL/LTR layout
- Products, categories, product card, stock, expiry, and item movement history
- Sales invoices, purchase invoices, sales returns, purchase returns
- Customers, suppliers, account balances, and printable statements
- Payments, expenses, shortages, reports, charts, and printing
- Responsive desktop, tablet, and mobile layout

## Notes

This static version stores passwords locally for demo/offline use. The code is organized so authentication and storage can later be replaced by a real backend.
