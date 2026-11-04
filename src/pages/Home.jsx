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
import { asset } from '../base';

const BEANS = [
  { l: '6%', t: '18%', s: 1, o: 0.55, d: -2 }, { l: '42%', t: '12%', s: 0.7, o: 0.35, d: -6 },
  { l: '52%', b: '14%', s: 0.85, o: 0.5, d: -4 }, { r: '4%', t: '14%', s: 0.78, o: 0.45, d: -9 },
  { l: '30%', b: '8%', s: 0.62, o: 0.3, d: -1 }, { r: '42%', t: '42%', s: 0.55, o: 0.25, d: -7 },
  { l: '2%', b: '22%', s: 0.78, o: 0.4, d: -11 },
];

function Hero() {
  const banner = (w, ext) => asset(`assets/img/hero-banner-${w}.${ext}`);
  const bg = `image-set(url("${banner(1600, 'webp')}") type("image/webp") 1x, url("${banner(2560, 'webp')}") type("image/webp") 2x, url("${banner(1600, 'jpg')}") type("image/jpeg") 1x)`;
  return (
    <Box component="section" sx={{
      position: 'relative', overflow: 'hidden', color: '#fff',
      minHeight: { lg: 'max(calc(100vw / 2.098), 640px)' }, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      // Mobile: plain brand gradient behind the text; desktop: the full banner photo
      background: { xs: 'linear-gradient(180deg, #0231bd 0%, #0a4fe0 55%, #2a83f5 100%)',
        lg: `url("${banner(1600, 'jpg')}") right center / cover no-repeat, #0231bd` },
      backgroundImage: { lg: bg },
      backgroundSize: { lg: 'cover' }, backgroundPosition: { lg: 'right center' }, backgroundRepeat: { lg: 'no-repeat' },
    }}>
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ maxWidth: { lg: '44%' }, pt: { xs: 15, md: 17, lg: 12 }, pb: { xs: 4, lg: 8 } }}>
          <Typography variant="h1" sx={{ mt: 0, mb: 3, fontSize: { xs: 'clamp(2.6rem, 13vw, 3.6rem)', sm: '4.8rem', md: '5.6rem', lg: '5.8rem', xl: '7rem' } }}>
            <span className="line"><span>Happiness</span></span>
            <span className="line"><span>lies in</span></span>
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
      </Container>
      {/* Mobile: show the cups from the banner below the text */}
      <Box component="picture" sx={{ display: { xs: 'block', lg: 'none' }, maxWidth: 900, mx: 'auto', width: '100%' }}>
        <source type="image/webp" srcSet={asset('assets/img/hero-banner-mobile.webp')} />
        <Box component="img" src={asset('assets/img/hero-banner-mobile.jpg')} alt="Bretlyn hot latte, iced americano, iced latte and caramel frappé"
          width={900} height={732} fetchPriority="high"
          sx={{ width: '100%', height: 'auto', display: 'block',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%)', maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%)' }} />
      </Box>
      <Box sx={{ position: 'absolute', left: '50%', bottom: 28, transform: 'translateX(-50%)', zIndex: 3, display: 'none',
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
