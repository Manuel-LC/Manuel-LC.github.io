import { useState } from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import profile from '../data/profile.json';

export default function Header() {
  const [avatarClicked, setAvatarClicked] = useState(false);

  const handleAvatarClick = () => {
    setAvatarClicked(true);
    setTimeout(() => setAvatarClicked(false), 600);
  };

  return (
    <Box
      sx={{
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)'
            : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: '#fff',
        py: 6,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Avatar
        src={profile.avatar}
        alt={profile.name}
        onClick={handleAvatarClick}
        sx={{
          width: 140,
          height: 140,
          mx: 'auto',
          mb: 3,
          border: '4px solid rgba(255,255,255,0.3)',
          cursor: 'pointer',
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: avatarClicked ? 'rotate(360deg) scale(1.15)' : 'rotate(0deg) scale(1)',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
        {profile.name}
      </Typography>
      <Typography variant="h5" sx={{ opacity: 0.9, mb: 2, fontWeight: 400 }}>
        {profile.title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">{profile.location}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <PhoneIcon fontSize="small" />
          <Typography variant="body2">{profile.phone}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
        <IconButton
          component="a"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#fff' }}
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#fff' }}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href={`mailto:${profile.email}`}
          sx={{ color: '#fff' }}
          aria-label="Email"
        >
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
