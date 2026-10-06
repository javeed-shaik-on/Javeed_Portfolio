import { motion } from 'framer-motion'
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import { profile, summary } from '../data'
import { tokens } from '../theme'

export default function Hero() {
  return (
    <Box id="top" component="section" sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 10, md: 14 }, pb: { xs: 10, md: 14 } }}>
      {/* Gradient mesh — the one bold visual moment on the page */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `
            radial-gradient(45% 55% at 85% 8%, ${tokens.violet}33 0%, transparent 70%),
            radial-gradient(40% 50% at 100% 45%, ${tokens.raspberry}2e 0%, transparent 70%),
            radial-gradient(35% 45% at 75% 85%, ${tokens.teal}29 0%, transparent 70%),
            radial-gradient(30% 35% at 15% 20%, ${tokens.amber}24 0%, transparent 70%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Chip
          label={`${profile.role} · ${profile.focus}`}
          sx={{
            bgcolor: 'rgba(108,92,231,0.1)',
            color: tokens.violet,
            fontWeight: 600,
            mb: 4,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4.2rem' },
              lineHeight: 1.08,
              maxWidth: '16ch',
              letterSpacing: '-0.02em',
            }}
          >
            I build interfaces{' '}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(90deg, ${tokens.violet}, ${tokens.raspberry})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              law firms trust
            </Box>{' '}
            with documents worth getting right.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <Typography sx={{ mt: 4, maxWidth: '58ch', color: 'text.secondary', fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.65 }}>
            {summary}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <Stack direction="row" spacing={2} sx={{ mt: 5, flexWrap: 'wrap', alignItems: 'center', rowGap: 2 }}>
            <Button
              href={`mailto:${profile.email}`}
              variant="contained"
              disableElevation
              sx={{
                background: `linear-gradient(90deg, ${tokens.violet}, ${tokens.raspberry})`,
                '&:hover': { background: `linear-gradient(90deg, ${tokens.violet}, ${tokens.raspberry})`, opacity: 0.92 },
              }}
            >
              Email me
            </Button>
            <Button
              href={profile.resumeFile}
              download
              variant="outlined"
              sx={{
                borderColor: 'rgba(20,22,43,0.15)',
                borderWidth: 1.5,
                color: 'text.primary',
                '&:hover': { borderColor: tokens.violet, borderWidth: 1.5, color: tokens.violet },
              }}
            >
              Download résumé
            </Button>
          </Stack>
          <Typography sx={{ mt: 3, fontSize: '0.9rem', color: 'text.secondary' }}>
            {profile.availability}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  )
}
