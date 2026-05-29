import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import FolderIcon from '@mui/icons-material/Folder';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useNavigate } from 'react-router-dom';
import SkillBar from '../components/SkillBar';
import profile from '../data/profile.json';
import skills from '../data/skills.json';

export default function LandingPage() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  // 3 habilidades destacadas (las de mayor nivel)
  const topSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, 3);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroVisible(true), 50);
    const t2 = setTimeout(() => setVisible(true), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <Box>
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <Box
        sx={{
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)'
              : 'linear-gradient(135deg, #0a1929 0%, #102a43 50%, #0d47a1 100%)',
          color: '#fff',
          py: 8,
          px: 2,
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'translateY(0)' : 'translateY(-30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <RocketLaunchIcon sx={{ fontSize: 60, mb: 2, opacity: 0.85 }} />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 1,
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
            }}
          >
            Hola, soy {profile.name.split(' ')[0]}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              mb: 2,
              opacity: 0.9,
              fontSize: { xs: '1rem', sm: '1.2rem' },
            }}
          >
            {profile.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              mb: 3,
              lineHeight: 1.7,
              opacity: 0.85,
              fontSize: '1rem',
            }}
          >
            {profile.about}
          </Typography>

          {/* Links sociales del hero */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' },
              }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' },
              }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href={`mailto:${profile.email}`}
              sx={{
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' },
              }}
            >
              Contacto
            </Button>
          </Box>

          {/* 3 habilidades destacadas como Chips */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
            {topSkills.map((s) => (
              <Chip
                key={s.name}
                label={`${s.name} — ${s.level}%`}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontWeight: 600,
                  backdropFilter: 'blur(4px)',
                  '& .MuiChip-label': { fontSize: '0.9rem' },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════ CONTENIDO PRINCIPAL ═══════════════ */}
      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* --- Sobre Mí --- */}
        <Box
          sx={{
            mb: 6,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <PersonIcon color="primary" fontSize="large" />
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Sobre M&iacute;
            </Typography>
          </Box>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                {profile.about}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* --- Habilidades --- */}
        <Box
          sx={{
            mb: 6,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <StarIcon color="secondary" fontSize="large" />
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Habilidades T&eacute;cnicas
            </Typography>
          </Box>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  {skills.slice(0, 5).map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Grid>
                <Grid item xs={12} md={6}>
                  {skills.slice(5).map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* --- Navegación rápida --- */}
        <Box
          sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <FolderIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Mi Portfolio
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Explora mis proyectos del ciclo DAW: aplicaciones web con PHP, React, JavaScript y m&aacute;s tecnolog&iacute;as.
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate('/portfolio')}
                >
                  Ver Portfolio
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <WorkHistoryIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Mi Experiencia
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Conoce mi formaci&oacute;n en DAW y SMR, as&iacute; como las pr&aacute;cticas realizadas durante los estudios.
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate('/experience')}
                >
                  Ver Experiencia
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
