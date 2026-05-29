import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f5f5f5' : '#1a1a1a',
        borderTop: '1px solid',
        borderColor: 'divider',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {currentYear} Manuel L&oacute;pez Castillo. Todos los derechos reservados.
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
        Hecho con React + librería Material UI
      </Typography>
    </Box>
  );
}
