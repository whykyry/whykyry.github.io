import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Typography, Box, AppBar, Toolbar, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

// Create a dark theme
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

// Home component
const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Kyle.dev
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          A modern React application with Material-UI and TypeScript
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/about"
            sx={{ mr: 2 }}
          >
            About
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            component={Link}
            to="/contact"
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

// About component
const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" paragraph>
        This is a modern React application built with:
      </Typography>
      <Box component="ul" sx={{ mt: 2 }}>
        <li>React 18</li>
        <li>TypeScript</li>
        <li>Material-UI</li>
        <li>React Router</li>
        <li>Vite</li>
        <li>Zustand for state management</li>
        <li>Supabase integration</li>
      </Box>
    </Container>
  )
}

// Contact component
const Contact: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" paragraph>
        Get in touch with me through the following channels:
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" paragraph>
          📧 Email: kyle@example.com
        </Typography>
        <Typography variant="body1" paragraph>
          🐙 GitHub: @whykyry
        </Typography>
        <Typography variant="body1" paragraph>
          🌐 Website: https://whykyry.github.io
        </Typography>
      </Box>
    </Container>
  )
}

// Navigation component
const Navigation: React.FC = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kyle.dev
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate('/about')}>
          About
        </Button>
        <Button color="inherit" onClick={() => navigate('/contact')}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  )
}

// Main App component
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App 