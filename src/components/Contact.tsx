import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { profile } from '../data'
import { tokens } from '../theme'

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 5,
            p: { xs: 4, md: 8 },
            background: `linear-gradient(120deg, ${tokens.ink}, #23264A)`,
            color: '#fff',
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              background: `
                radial-gradient(40% 60% at 90% 0%, ${tokens.violet}55 0%, transparent 70%),
                radial-gradient(35% 50% at 100% 100%, ${tokens.raspberry}40 0%, transparent 70%)
              `,
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, maxWidth: '20ch', color: '#fff' }}
            >
              Open to remote, hybrid or onsite roles — available immediately.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 5, flexWrap: 'wrap', rowGap: 2 }}>
              <Button
                href={`mailto:${profile.email}`}
                variant="contained"
                disableElevation
                sx={{ bgcolor: '#fff', color: tokens.ink, '&:hover': { bgcolor: '#EDEDF5' } }}
              >
                {profile.email}
              </Button>
              <Button
                href={`tel:${profile.phone}`}
                variant="outlined"
                sx={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', '&:hover': { borderColor: '#fff' } }}
              >
                {profile.phone}
              </Button>
              <Button
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                sx={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', '&:hover': { borderColor: '#fff' } }}
              >
                LinkedIn
              </Button>
              <Button
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                sx={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', '&:hover': { borderColor: '#fff' } }}
              >
                GitHub
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          mt: 5,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 1,
          fontSize: '0.8rem',
          color: 'text.secondary',
        }}
      >
        <Typography variant="inherit">
          {profile.name} — {profile.location}
        </Typography>
        <Typography variant="inherit">Built with React, TypeScript and Material UI.</Typography>
      </Container>
    </Box>
  )
}
