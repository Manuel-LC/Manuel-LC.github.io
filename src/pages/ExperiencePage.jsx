import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ExperienceItem from '../components/ExperienceItem';
import experiences from '../data/experiences.json';

export default function ExperiencePage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <WorkHistoryIcon color="secondary" fontSize="large" />
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Mi Experiencia
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Mi trayectoria profesional en el desarrollo de software. Haz clic en cada posición para
        ver los detalles.
      </Typography>
      {experiences.map((exp) => (
        <ExperienceItem
          key={exp.id}
          role={exp.role}
          place={exp.place}
          dates={exp.dates}
          details={exp.details}
        />
      ))}
    </Container>
  );
}
