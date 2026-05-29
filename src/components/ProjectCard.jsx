import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function ProjectCard({ title, description, image, link, tags }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 12px 24px rgba(0,0,0,0.15)'
              : '0 12px 24px rgba(0,0,0,0.4)',
        },
      }}
    >
      <Box
        sx={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => setShowOverlay(true)}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        {showOverlay && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              animation: 'fadeIn 0.3s ease',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setShowOverlay(false);
            }}
          >
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
              Ver Detalles
            </Typography>
          </Box>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" color="primary" variant="outlined" />
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon />}
          size="small"
        >
          Ver Proyecto
        </Button>
      </CardActions>
    </Card>
  );
}
