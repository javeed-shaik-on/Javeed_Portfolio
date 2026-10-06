import { Box, Container, Typography } from '@mui/material'
import { tokens } from '../theme'

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'start' }}>
          <Box>
            <Typography sx={{ fontWeight: 600, color: tokens.amber, fontSize: '0.9rem', mb: 1.5 }}>
              Why legal-tech
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' } }}>
              Precision isn't optional here
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'text.secondary' }}>
              Legal documents don't forgive sloppy UI — a comparison tool that
              drops a clause or mis-renders a redline costs a law firm real
              money. That constraint is what pulled me toward performance and
              correctness: lazy loading and memoization aren't résumé
              keywords here, they're why a 100-page contract still compares
              instantly.
            </Typography>
            <Typography sx={{ mt: 2.5, fontSize: '1.05rem', lineHeight: 1.75, color: 'text.secondary' }}>
              The other half of the job is consistency at scale — building the
              design system that four product teams share, so a button looks
              and behaves the same whether you're in the comparison tool or
              the admin panel. I like that work because the payoff compounds:
              every component I add well, I only have to get right once.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
