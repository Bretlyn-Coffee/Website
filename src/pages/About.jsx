import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Reveal from '../components/Reveal';
import { Eyebrow, Section, usePageMeta } from '../components/Blocks';
import { brand, display } from '../theme';

const body = { color: '#2a3a72', fontSize: { xs: '1.02rem', md: '1.12rem' }, lineHeight: 1.75 };
const h2 = { color: brand.navy, mt: 2, mb: 2.5, fontSize: { xs: '2.4rem', sm: '3rem', md: '3.6rem' } };

export default function About() {
  usePageMeta('About Us — Bretlyn Coffee',
    'Bretlyn Coffee is a new-age specialty coffee experience, made for every day — quality-crafted specialty coffee, signature beverages and approachable prices.');
  return (
    <>
      {/* Intro */}
      <Section bg={brand.paper} sx={{ pt: { xs: 14, md: 20 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 900 }}>
          <Eyebrow>About Us</Eyebrow>
          <Typography sx={{ fontFamily: display, fontWeight: 800, letterSpacing: '.08em', color: brand.royal, fontSize: { xs: '1.6rem', md: '2rem' }, mt: 3 }}>
            BRETLYN 💙
          </Typography>
          <Typography variant="h1" component="h1" sx={{ color: brand.navy, mt: 1, mb: 2, fontSize: { xs: '2.9rem', sm: '4rem', md: '5.4rem' } }}>
            Happiness lies in every sip.
          </Typography>
          <Typography sx={{ ...body, fontSize: { xs: '1.15rem', md: '1.35rem' }, color: brand.navy }}>
            A new-age specialty coffee experience, made for every day.
          </Typography>
        </Box>
      </Section>

      {/* Our Story */}
      <Section bg={brand.cream} sx={{ py: { xs: 7, md: 10 } }}>
        <Reveal>
          <Box sx={{ maxWidth: 820 }}>
            <Typography variant="h2" sx={h2}>Our Story</Typography>
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
              <Typography sx={{ ...body, color: brand.navy, fontWeight: 600 }}>
                Because happiness isn&apos;t always about the big moments. Sometimes, it&apos;s about slowing down, savouring every sip,
                and finding joy in the little things.
              </Typography>
            </Stack>
          </Box>
        </Reveal>
      </Section>

      {/* Mission & Vision */}
      <Section bg={brand.paper} sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
          {[
            ['Mission', 'To serve expertly brewed, consistently delicious specialty coffee at approachable prices.'],
            ['Vision', 'To be a leading new-age coffee brand, making specialty coffee an everyday habit.'],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <Card variant="outlined" sx={{ p: { xs: 3.5, md: 5 }, height: '100%', borderColor: 'rgba(10,35,120,.1)', borderTop: `4px solid ${brand.royal}` }}>
                <Typography variant="h3" sx={{ color: brand.navy, mb: 1.5, fontSize: { xs: '2rem', md: '2.6rem' } }}>{t}</Typography>
                <Typography sx={{ ...body, fontSize: { xs: '1.08rem', md: '1.25rem' } }}>{d}</Typography>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Section>

      {/* What We Bring to Your Cup */}
      <Section bg={brand.cream} sx={{ py: { xs: 7, md: 10 } }}>
        <Reveal>
          <Box sx={{ maxWidth: 820 }}>
            <Typography variant="h2" sx={h2}>What We Bring to Your Cup</Typography>
            <Typography sx={body}>
              Our carefully developed menu brings together espresso-based beverages, signature coffee creations, iced coffees,
              Matcha series and other refreshing drinks, offering something enjoyable for every coffee moment. With a focus on
              thoughtful preparation, delicious flavours and consistent quality, we make specialty coffee an uncomplicated and
              enjoyable part of your everyday routine.
            </Typography>
          </Box>
        </Reveal>
      </Section>

      {/* Closing line */}
      <Section bg={brand.paper} sx={{ py: { xs: 7, md: 10 } }}>
        <Reveal>
          <Typography component="p" sx={{ fontFamily: display, fontWeight: 700, textTransform: 'uppercase',
            fontSize: { xs: '2rem', md: '3.4rem' }, lineHeight: 1.05, color: brand.navy, maxWidth: 960 }}>
            Because quality coffee should be an <Box component="span" sx={{ color: brand.royal }}>everyday pleasure</Box>, not an occasional treat.
          </Typography>
        </Reveal>
      </Section>
    </>
  );
}
