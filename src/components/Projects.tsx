import { Box, Container, Typography } from '@mui/material'
import { experience, projects } from '../data'
import { tokens } from '../theme'

export default function Projects() {
  return (
    <Box id="work" component="section" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontWeight: 600, color: tokens.violet, fontSize: '0.9rem', mb: 1.5 }}>
          Selected work
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, maxWidth: '18ch' }}>
          Four products, one company
        </Typography>
        <Typography sx={{ mt: 2, maxWidth: '60ch', color: 'text.secondary', fontSize: '1.05rem' }}>
          {experience.role} at {experience.company}, {experience.period}. All
          four shipped in production, used daily by legal teams.
        </Typography>

        <Box
          sx={{
            mt: 7,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
          }}
        >
          {projects.map((p) => (
            <Box
              key={p.name}
              sx={{
                position: 'relative',
                bgcolor: 'background.paper',
                borderRadius: 4,
                p: 4,
                border: '1px solid',
                borderColor: 'divider',
                borderTop: '4px solid',
                borderTopColor: tokens[p.color],
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 16px 40px -20px ${tokens[p.color]}66`,
                },
              }}
            >
              <Typography variant="h3" sx={{ fontSize: '1.35rem' }}>
                {p.name}
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: '0.92rem', color: 'text.secondary' }}>
                {p.tagline}
              </Typography>

              <Box component="ul" sx={{ mt: 2.5, pl: 0, m: 0, listStyle: 'none' }}>
                {p.points.map((pt) => (
                  <Box
                    key={pt}
                    component="li"
                    sx={{ display: 'flex', gap: 1.2, mb: 1.2, fontSize: '0.92rem', lineHeight: 1.6, color: 'rgba(20,22,43,0.82)' }}
                  >
                    <Box sx={{ mt: '8px', width: 5, height: 5, flex: 'none', borderRadius: '50%', bgcolor: tokens[p.color] }} />
                    <span>{pt}</span>
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 2.5, display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                {p.stack.map((s) => (
                  <Box
                    key={s}
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      px: 1.2,
                      py: 0.4,
                      borderRadius: 999,
                      bgcolor: `${tokens[p.color]}14`,
                      color: tokens[p.color],
                    }}
                  >
                    {s}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
