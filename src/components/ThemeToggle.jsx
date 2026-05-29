import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { mode, toggleTheme } = useContext(ColorModeContext);

  return (
    <Tooltip title={mode === 'light' ? 'Modo oscuro' : 'Modo claro'} arrow>
      <IconButton onClick={toggleTheme} color="inherit" aria-label="Cambiar tema">
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
