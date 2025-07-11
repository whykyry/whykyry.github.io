# whykyry.github.io

Personal website and portfolio built with React, TypeScript, and Material-UI. This is my main GitHub Pages site deployed at [whykyry.github.io](https://whykyry.github.io).

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Material-UI (MUI)** for beautiful, responsive components
- **React Router** for client-side routing
- **Zustand** for state management
- **Supabase** integration ready
- **Dark theme** by default
- **Vite** for fast development and building
- **GitHub Pages** deployment with GitHub Actions

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/whykyry/whykyry.github.io.git
   cd whykyry.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will open automatically in your browser at `http://localhost:1387`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint


## 🌐 Deployment

### Automatic Deployment

This site uses GitHub Actions for automatic deployment:

1. **Push to main branch** - The workflow will automatically build and deploy
2. **GitHub Pages** - Deploys directly to the main GitHub Pages site
3. **Live at** - [https://whykyry.github.io](https://whykyry.github.io)

### Manual Deployment

To manually trigger a deployment, simply push to the main branch:

```bash
git push origin main
```

## 📁 Project Structure

```
whykyry.github.io/
├── public/
│   ├── vite.svg          # Favicon
│   └── index.html        # HTML template
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── vite.config.ts        # Vite configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Customization

### Theme

The app uses Material-UI's theming system. You can customize colors, typography, and more in `src/App.tsx`:

```typescript
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
})
```

### Routes

Add new routes in the `App.tsx` file:

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  {/* Add your routes here */}
</Routes>
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local environment variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Build Configuration

The project is configured for GitHub Pages user site deployment:

- **Base URL**: `/` for production (GitHub Pages user site)
- **Build Output**: `dist/` directory
- **Asset Directory**: `assets/`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

- GitHub: [@whykyry](https://github.com/whykyry)
- Email: whykyry@gmail.com
- Website: [https://whykyry.github.io](https://whykyry.github.io)

---

Built with ❤️ using React, TypeScript, and Material-UI 