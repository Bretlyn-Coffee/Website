import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Reveal from '../components/Reveal';
import { CTA, Eyebrow, MediaCard, PageHero, Photo, Section, Split, usePageMeta } from '../components/Blocks';
import { Logo } from '../brand/BrandMark';
import { brand, display } from '../theme';

const body = { color: '#2a3a72', fontSize: { xs: '1.02rem', md: '1.12rem' }, maxWidth: 560 };

const PURPOSE = [
  [FlagOutlinedIcon, 'Mission', 'To serve expertly brewed, consistently delicious specialty coffee at approachable prices.'],
  [VisibilityOutlinedIcon, 'Vision', 'To be a leading new-age coffee brand, making specialty coffee an everyday habit.'],
];

const CUP = ['Espresso-based beverages', 'Signature coffee creations', 'Iced coffees', 'Matcha series', 'Refreshing drinks'];

export default function About() {
  usePageMeta('About Us — Bretlyn Coffee',
    'Bretlyn Coffee is a new-age specialty coffee experience, made for every day — quality-crafted specialty coffee, signature beverages and approachable prices.');
  return (
    <>
      <PageHero eyebrow="About Us" title={<>Happiness lies<br />in every sip.</>}
        text="A new-age specialty coffee experience, made for every day." />

      <Section bg={brand.paper}>
        <Split reverse media={<MediaCard tag="Our Story"><Photo name="espresso" w={960} h={939} ratio={{ xs: '16/10', md: '4/5' }} alt="Espresso pouring into a blue Bretlyn cup" /></MediaCard>}>
          <Eyebrow>Our Story</Eyebrow>
          <Typography variant="h2" sx={{ color: brand.navy, my: 2.5, fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.4rem' } }}>
            Great coffee,<br />every day
          </Typography>
          <Stack spacing={2}>
            <Typography sx={body}>
              At Bretlyn Coffee, we believe that great coffee should be a part of everyday life. The name Bretlyn represents the
              richness of coffee&apos;s origins and natural flavours that inspire us to create a new coffee experience.
            </Typography>
            <Typography sx={body}>
              We believe good coffee shouldn&apos;t feel complicated, exclusive or expensive. We bring together quality-crafted
              specialty coffee, delicious signature beverages and approachable prices to make every cup an enjoyable experience.
            </Typography>
            <Typography sx={body}>
              Designed around today&apos;s fast-paced lifestyles, our modern grab-and-go concept makes it easier to enjoy great
              coffee on the go, wherever life takes you.
            </Typography>
            <Typography sx={{ ...body, color: brand.navy, fontWeight: 500 }}>
              Because happiness isn&apos;t always about the big moments. Sometimes, it&apos;s about slowing down, savouring every sip,
              and finding joy in the little things.
            </Typography>
          </Stack>
        </Split>
      </Section>

      <Box sx={{ background: brand.paper, py: { xs: 5, md: 7 }, borderBlock: '1px solid rgba(10,35,120,.08)' }}>
        <Container><Reveal><Logo variant="navy" height={{ xs: 90, sm: 130, md: 170 }} sx={{ mx: 'auto', maxWidth: '86vw' }} /></Reveal></Container>
      </Box>

      <Section bg={brand.cream}>
        <Eyebrow>Why we exist</Eyebrow>
        <Typography variant="h2" sx={{ color: brand.navy, mt: 2, mb: 6, fontSize: { xs: '2.6rem', md: '4.4rem' } }}>Mission &amp; Vision</Typography>
        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
          {PURPOSE.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <Card variant="outlined" sx={{ p: { xs: 3, md: 5 }, height: '100%', borderColor: 'rgba(10,35,120,.08)', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ width: 56, height: 56, borderRadius: '16px', background: brand.ice, display: 'grid', placeItems: 'center', mb: 3 }}>
                  <Icon sx={{ color: brand.royal }} />
                </Box>
                <Typography variant="h3" sx={{ color: brand.navy, mb: 1.5, fontSize: { xs: '2rem', md: '2.4rem' } }}>{t}</Typography>
                <Typography sx={{ color: brand.muted, fontSize: { xs: '1.05rem', md: '1.2rem' } }}>{d}</Typography>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Section>

      <Section bg={brand.paper}>
        <Split media={<MediaCard tag="Our menu"><Photo name="hero-cups" w={960} h={914} ratio={{ xs: '16/10', md: '1/1' }} alt="Bretlyn latte, iced americano, iced latte and caramel frappé" /></MediaCard>}>
          <Eyebrow>What we bring to your cup</Eyebrow>
          <Typography variant="h2" sx={{ color: brand.navy, my: 2.5, fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.2rem' } }}>
            Something for every<br />coffee moment
          </Typography>
          <Typography sx={body}>
            Our carefully developed menu brings together espresso-based beverages, signature coffee creations, iced coffees,
            Matcha series and other refreshing drinks, offering something enjoyable for every coffee moment. With a focus on
            thoughtful preparation, delicious flavours and consistent quality, we make specialty coffee an uncomplicated and
            enjoyable part of your everyday routine.
          </Typography>
          <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 1, mt: 4 }}>
            {CUP.map((c) => (
              <Chip key={c} label={c} variant="outlined" sx={{ borderColor: brand.navy, color: brand.navy }} />
            ))}
          </Stack>
        </Split>
      </Section>

      <Section bg={brand.cream}>
        <Reveal>
          <Typography component="p" sx={{ fontFamily: display, fontWeight: 700, textTransform: 'uppercase',
            fontSize: { xs: '2rem', md: '3.6rem' }, lineHeight: 1, color: brand.navy, maxWidth: 960 }}>
            “Because quality coffee should be an <Box component="em" sx={{ fontStyle: 'normal', color: brand.royal }}>everyday pleasure</Box>, not an occasional treat.”
          </Typography>
        </Reveal>
      </Section>

      <CTA title="Come say hello." text="Find us in Indiranagar, Bengaluru — or drop us a line at contact@bretlyn.com."
        primary={{ to: '/menu', label: 'Explore Menu' }} />
    </>
  );
}
