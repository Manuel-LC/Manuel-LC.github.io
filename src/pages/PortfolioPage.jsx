import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FolderIcon from '@mui/icons-material/Folder';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

export default function PortfolioPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
        <FolderIcon color="primary" fontSize="large" />
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Mi Portfolio
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        A continuación presento una selección de mis proyectos más destacados. Cada uno refleja
        diferentes habilidades y tecnologías con las que he trabajado.
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
