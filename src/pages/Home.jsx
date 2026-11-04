import { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BrandMark from '../brand/BrandMark';
import Reveal, { CountUp } from '../components/Reveal';
import { CTA, CupArt, Eyebrow, Marquee, MediaCard, Photo, Section, Split, usePageMeta } from '../components/Blocks';
import { brand, ease } from '../theme';

const BEANS = [
  { l: '6%', t: '18%', s: 1, o: 0.55, d: -2 }, { l: '42%', t: '12%', s: 0.7, o: 0.35, d: -6 },
  { l: '52%', b: '14%', s: 0.85, o: 0.5, d: -4 }, { r: '4%', t: '14%', s: 0.78, o: 0.45, d: -9 },
  { l: '30%', b: '8%', s: 0.62, o: 0.3, d: -1 }, { r: '42%', t: '42%', s: 0.55, o: 0.25, d: -7 },
  { l: '2%', b: '22%', s: 0.78, o: 0.4, d: -11 },
];

function Hero() {
  const visual = useRef(null);
  const onMove = (e) => {
    if (!visual.current || !window.matchMedia('(pointer:fine)').matches) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 18;
    visual.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  return (
    <Box component="section" onMouseMove={onMove} sx={{
      position: 'relative', overflow: 'hidden', color: '#fff', display: 'flex', alignItems: 'center',
      minHeight: { md: '100svh' },
      background: 'radial-gradient(90% 80% at 74% 48%, #004ca2 0%, #00408c 38%, #00316f 70%, #062258 100%)',
    }}>
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {BEANS.map((b, i) => (
          <span key={i} className="bean" style={{ left: b.l, right: b.r, top: b.t, bottom: b.b, opacity: b.o,
            width: 26 * b.s, height: 36 * b.s, animationDelay: `${b.d}s` }} />
        ))}
      </Box>
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr 1fr' }, gap: { xs: 5, md: 6 }, alignItems: 'center',
          pt: { xs: 15, md: 12 }, pb: { xs: 10, md: 8 } }}>
          <Box>
            <Typography variant="h1" sx={{ mt: 0, mb: 3, fontSize: { xs: 'clamp(2.6rem, 13vw, 3.6rem)', sm: '4.8rem', md: '6rem', lg: '7.2rem' } }}>
              <span className="line"><span>Happiness lies in</span></span>
              <span className="line"><span>every <span className="outline-text">sip.</span></span></span>
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, maxWidth: 480, opacity: 0.92, mb: 4 }}>
              Bretlyn started to transform specialty coffee from an occasional treat into an everyday habit — delivering
              high-quality specialty coffee, affordable and accessible to everyone.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button component={RouterLink} to="/menu" variant="contained" endIcon={<ArrowForwardIcon />}
                sx={{ background: '#fff', color: brand.royal, '&:hover': { background: brand.navy, color: '#fff' } }}>
                Explore Menu
              </Button>
              <Button component={RouterLink} to="/about" variant="outlined"
                sx={{ color: '#fff', borderColor: '#fff', '&:hover': { background: '#fff', color: brand.royal, borderColor: '#fff' } }}>
                Our Story
              </Button>
            </Stack>
          </Box>

          <Box ref={visual} sx={{ position: 'relative', aspectRatio: '1 / 1', width: '100%', maxWidth: { xs: 'min(440px, 86vw)', md: 'none' },
            mx: 'auto', transition: `transform .3s ${ease}` }}>
            <Box sx={{ position: 'absolute', inset: '-4%', animation: 'float 7s ease-in-out infinite',
              // Feather every edge so the photo melts into the hero background instead of looking like a separate card
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 72%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
              maskImage: 'linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 72%, transparent 100%)',
              maskComposite: 'intersect' }}>
              <Photo name="hero-cups" priority w={1280} h={1279} ratio="1 / 1"
                alt="Bretlyn hot latte, iced americano, iced latte and caramel frappé" sx={{ filter: 'none' }} />
            </Box>
          </Box>
        </Box>
      </Container>
      <Box sx={{ position: 'absolute', left: '50%', bottom: 28, transform: 'translateX(-50%)', zIndex: 3, display: { xs: 'none', md: 'flex' },
        flexDirection: 'column', alignItems: 'center', gap: 1, fontSize: '.7rem', letterSpacing: '.3em', textTransform: 'uppercase', opacity: 0.8 }}>
        <Box component="i" sx={{ width: '1px', height: 42, background: 'linear-gradient(#fff, transparent)', animation: 'drip 2s ease-in-out infinite' }} />
        Scroll
      </Box>
    </Box>
  );
}

const DRINKS = [
  { type: 'hot', name: 'Classic Latte', text: 'Velvety espresso and steamed milk, finished with latte art.' },
  { type: 'americano', name: 'Iced Americano', text: 'Bold double shot over ice. Clean, bright and refreshing.', tag: 'Bestseller' },
  { type: 'latte', name: 'Iced Latte', text: 'Chilled milk layered with espresso for the perfect pour.' },
  { type: 'frappe', name: 'Caramel Frappé', text: 'Blended coffee, whipped cream and a caramel drizzle.', tag: 'New' },
];

const STEPS = [
  ['Select', 'Only specialty-grade beans make the cut.'],
  ['Grind', 'Ground fresh, moments before every shot.'],
  ['Brew', 'Dialled-in recipes for the same great cup, every time.'],
];

export default function Home() {
  usePageMeta('Bretlyn Coffee — Happiness Lies in Every Sip',
    'Bretlyn Coffee brings high-quality, single origin Indian specialty coffee to everyone — freshly ground, freshly brewed, affordable and accessible.');
  return (
    <>
      <Hero />
      <Marquee words={['Single Origin', 'Freshly Ground', 'Freshly Brewed', 'Made in India', 'Specialty Grade', 'Everyday Habit']} />

      <Section bg={brand.paper}>
        <Split media={<MediaCard><Photo name="beans" w={960} h={598} alt="Roasted coffee beans spilling from a woven basket beside ripe coffee cherries" ratio={{ xs: '16/10', md: '4/3' }} /></MediaCard>}>
          <Eyebrow>Our Beans</Eyebrow>
          <Typography variant="h2" sx={{ color: brand.navy, my: 2.5, fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.8rem' } }}>
            Single origin<br />specialty coffee
          </Typography>
          <Typography sx={{ color: '#2a3a72', fontSize: { xs: '1.02rem', md: '1.12rem' }, maxWidth: 520 }}>
            Sourced from India&apos;s finest coffee-growing regions. Every lot is traceable to the estates that grow it — shade-grown,
            hand-picked and roasted to bring out its own character.
          </Typography>
        </Split>
      </Section>

      <Section bg={brand.cream}>
        <Split reverse media={<MediaCard tag="Pulled to order"><Photo name="espresso" w={960} h={939} ratio={{ xs: '16/10', md: '1/1' }} alt="Espresso pouring into a blue Bretlyn cup" /></MediaCard>}>
          <Eyebrow>Our Craft</Eyebrow>
          <Typography variant="h2" sx={{ color: brand.navy, my: 2.5, fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.8rem' } }}>
            Freshly ground.<br />Freshly brewed.
          </Typography>
          <Typography sx={{ color: '#2a3a72', fontSize: { xs: '1.02rem', md: '1.12rem' }, maxWidth: 520 }}>
            We carefully select specialty-grade coffee beans and grind and brew them with precision to deliver consistently great
            coffee, in every cup.
          </Typography>
          <Stack spacing={2} sx={{ mt: 4 }}>
            {STEPS.map(([t, d], i) => (
              <Stack key={t} direction="row" spacing={2.2}>
                <Typography variant="h3" sx={{ color: brand.royal, minWidth: 44 }}>0{i + 1}</Typography>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: brand.navy }}>{t}</Typography>
                  <Typography sx={{ color: '#2a3a72', fontSize: '.96rem' }}>{d}</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Split>
      </Section>

      <CTA title={<>Your daily cup<br />is waiting.</>}
        text="Great specialty coffee shouldn't be a once-in-a-while treat. Come make it part of your day."
        secondary={{ href: 'mailto:support@bretlyn.com', label: 'Contact Us' }} />
    </>
  );
}
