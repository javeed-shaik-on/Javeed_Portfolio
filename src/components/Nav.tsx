import { AppBar, Toolbar, Container, Box, Typography, Button, Stack } from '@mui/material'
import { profile } from '../data'
import { tokens } from '../theme'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(250,250,253,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, justifyContent: 'space-between' }}>
          <Stack component="a" href="#top" direction="row" spacing={1.5} alignItems="center" sx={{ textDecoration: 'none' }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: '10px',
                background: `linear-gradient(135deg, ${tokens.violet}, ${tokens.raspberry})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
              }}
            >
              JS
            </Box>
            <Typography variant="h3" sx={{ fontSize: '1.05rem', color: 'text.primary' }}>
              {profile.name}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {links.map((l) => (
              <Box
                key={l.href}
                component="a"
                href={l.href}
                sx={{
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                {l.label}
              </Box>
            ))}
          </Stack>

          <Button
            href={profile.resumeFile}
            download
            variant="contained"
            disableElevation
            size="small"
            sx={{
              bgcolor: 'text.primary',
              '&:hover': { bgcolor: tokens.violet },
            }}
          >
            Résumé
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
