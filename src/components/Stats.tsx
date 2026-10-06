import { Box, Container, Typography } from '@mui/material'
import { stats } from '../data'
import { tokens } from '../theme'

export default function Stats() {
  return (
    <Box component="section" sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          }}
        >
          {stats.map((s, i) => (
            <Box
              key={s.label}
              sx={{
                py: 5,
                px: 3,
                textAlign: 'center',
                borderRight: {
                  xs: i % 2 === 0 ? '1px solid' : 'none',
                  md: i !== stats.length - 1 ? '1px solid' : 'none',
                },
                borderBottom: {
                  xs: i < 2 ? '1px solid' : 'none',
                  md: 'none',
                },
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, color: tokens[s.color] }}
              >
                {s.value}
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: '0.9rem', color: 'text.secondary' }}>
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
