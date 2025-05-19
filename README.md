# React + Vite + Tailwind CSS

This guide helps you set up a new React project using Vite and Tailwind CSS 3.

## Getting Started

### 1. Create a Vite + React Project

```bash
npm create vite@latest my-app -- --template react
cd my-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Tailwind CSS
https://v3.tailwindcss.com/docs/guides/vite
```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### 4. Configure Tailwind

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 5. Add Tailwind to CSS

Replace the contents of `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Start the Development Server

```bash
npm run dev
```

Your React app is now set up with Vite and Tailwind CSS 3!

## Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
