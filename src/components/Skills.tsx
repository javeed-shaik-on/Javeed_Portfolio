import { Box, Container, Typography, Chip } from '@mui/material'
import { skills } from '../data'
import { tokens } from '../theme'

export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 9, md: 12 }, bgcolor: 'background.paper', borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontWeight: 600, color: tokens.teal, fontSize: '0.9rem', mb: 1.5 }}>
          Toolbox
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' } }}>
          What I build with
        </Typography>

        <Box sx={{ mt: 6, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
          {skills.map((s) => (
            <Box
              key={s.group}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: `${tokens[s.color]}0D`,
              }}
            >
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: tokens[s.color], mb: 1.5 }}>
                {s.group}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {s.items.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    size="small"
                    sx={{
                      bgcolor: 'background.paper',
                      color: 'text.primary',
                      border: '1px solid',
                      borderColor: `${tokens[s.color]}33`,
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
