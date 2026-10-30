import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SpaIcon from '@mui/icons-material/Spa';
import Reveal from '../components/Reveal';
import { CTA, Eyebrow, MediaCard, PageHero, Photo, Section, Split, usePageMeta } from '../components/Blocks';
import { Logo } from '../brand/BrandMark';
import { brand } from '../theme';

const VALUES = [
  [AutoAwesomeIcon, 'Quality', 'Specialty-grade beans only, freshly ground and brewed with care and consistency.'],
  [VolunteerActivismIcon, 'Accessible', 'Honest prices so specialty coffee can be an everyday habit, not a luxury.'],
  [SpaIcon, 'Rooted in India', 'Proudly single origin, celebrating the estates and growers behind every cup.'],
];

export default function About() {
  usePageMeta('About Us — Bretlyn Coffee',
    'Bretlyn Coffee is on a mission to make specialty coffee an everyday habit — high quality, affordable and accessible to everyone.');
  return (
    <>
      <PageHero eyebrow="About Us" title={<>Specialty coffee,<br />every day.</>}
        text="Bretlyn started with a simple belief: great coffee shouldn't be an occasional treat. It should be part of everyone's day." />

      <Section bg={brand.paper}>
        <Split reverse media={<MediaCard><Photo name="beans" w={960} h={598} alt="Roasted coffee beans and ripe coffee cherries" ratio={{ xs: '16/10', md: '4/3' }} /></MediaCard>}>
          <Eyebrow>Our Story</Eyebrow>
          <Typography variant="h2" sx={{ color: brand.navy, my: 2.5, fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.6rem' } }}>
            From India&apos;s hills<br />to your hands
          </Typography>
          <Typography sx={{ color: '#2a3a72', fontSize: { xs: '1.02rem', md: '1.12rem' }, maxWidth: 520 }}>
            India grows some of the world&apos;s most distinctive coffee — shade-grown under forest canopies, alongside pepper and
            cardamom. Yet most of that specialty coffee has been hard to find and expensive to enjoy.
          </Typography>
          <Typography sx={{ color: '#2a3a72', fontSize: { xs: '1.02rem', md: '1.12rem' }, maxWidth: 520, mt: 2 }}>
            Bretlyn exists to change that. We work with India&apos;s finest growing regions, choose specialty-grade lots, and brew them
            with precision — so a genuinely great cup is something you can enjoy every single day.
          </Typography>
        </Split>
      </Section>

      <Box sx={{ background: brand.paper, py: { xs: 5, md: 7 }, borderBlock: '1px solid rgba(10,35,120,.08)' }}>
        <Container><Reveal><Logo variant="navy" height={{ xs: 90, sm: 130, md: 170 }} sx={{ mx: 'auto', maxWidth: '86vw' }} /></Reveal></Container>
      </Box>

      <Section bg={brand.cream}>
        <Eyebrow>What we stand for</Eyebrow>
        <Typography variant="h2" sx={{ color: brand.navy, mt: 2, mb: 6, fontSize: { xs: '2.6rem', md: '4.4rem' } }}>Our compass</Typography>
        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
          {VALUES.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <Card variant="outlined" sx={{ p: { xs: 3, md: 4 }, height: '100%', borderColor: 'rgba(10,35,120,.08)' }}>
                <Box sx={{ width: 56, height: 56, borderRadius: '16px', background: brand.ice, display: 'grid', placeItems: 'center', mb: 3 }}>
                  <Icon sx={{ color: brand.royal }} />
                </Box>
                <Typography variant="h3" sx={{ color: brand.navy, mb: 1 }}>{t}</Typography>
                <Typography sx={{ color: brand.muted }}>{d}</Typography>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Section>

      <Section bg={brand.paper}>
        <Reveal>
          <Typography component="p" sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700, textTransform: 'uppercase',
            fontSize: { xs: '2rem', md: '3.6rem' }, lineHeight: 1, color: brand.navy, maxWidth: 900 }}>
            “Happiness lies in <Box component="em" sx={{ fontStyle: 'normal', color: brand.royal }}>every sip</Box> — and every sip should be worth it.”
          </Typography>
        </Reveal>
      </Section>

      <CTA title="Come say hello." text="Find us in Indiranagar, Bengaluru — or drop us a line at contact@bretlyn.com."
        primary={{ to: '/menu', label: 'Explore Menu' }} />
    </>
  );
}
