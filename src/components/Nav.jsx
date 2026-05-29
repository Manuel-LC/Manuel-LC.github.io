import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Experiencia', path: '/experience' },
];

export default function Nav() {
  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CodeIcon sx={{ color: 'secondary.main', fontSize: 28 }} />
          <Button
            component={NavLink}
            to="/"
            sx={{
              color: 'inherit',
              fontWeight: 700,
              fontSize: '1.1rem',
              textDecoration: 'none',
            }}
          >
            Manuel López
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={({ isActive }) => ({
                color: 'inherit',
                fontWeight: isActive ? 700 : 400,
                borderBottom: isActive ? '2px solid' : '2px solid transparent',
                borderRadius: 0,
                px: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              })}
            >
              {item.label}
            </Button>
          ))}
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
