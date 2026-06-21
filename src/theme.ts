// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
palette: {
    primary: {
        main: '#1a3045',      // warna utama (AppBar, Button primary, dll)
        contrastText: '#061429', // warna teks di atas primary
    },
    secondary: {
        main: '#1976D2',
    },
    text: {
        primary: '#061429',   // warna teks default (body text)
        secondary: '#1976D2', // warna teks sekunder
    },
    background: {
        default: '#ffffff',
    },
    },
    typography: {
        fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
    },
});

export default theme;