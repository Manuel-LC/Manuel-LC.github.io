import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function ExperienceItem({ role, place, dates, details }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      sx={{
        mb: 2,
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 4px 12px rgba(0,0,0,0.1)'
              : '0 4px 12px rgba(0,0,0,0.3)',
        },
        borderLeft: '4px solid',
        borderColor: 'primary.main',
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <CardContent sx={{ pb: expanded ? 2 : '16px !important' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {role}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
              <WorkIcon fontSize="small" color="primary" />
              <Typography variant="body2" color="text.secondary">
                {place}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
              <CalendarTodayIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {dates}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ color: 'text.secondary' }}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        </Box>

        <Box
          sx={{
            maxHeight: expanded ? '500px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, opacity 0.4s ease',
            opacity: expanded ? 1 : 0,
            mt: expanded ? 2 : 0,
          }}
        >
          <List dense disablePadding>
            {details.map((detail, index) => (
              <ListItem
                key={index}
                sx={{
                  pl: 0,
                  animation: expanded ? `slideIn 0.4s ease ${index * 0.1}s both` : 'none',
                }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={detail} primaryTypographyProps={{ variant: 'body2' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}
