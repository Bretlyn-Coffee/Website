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
import { REGIONS } from '../data/site';
import { brand, ease } from '../theme';

const BEANS = [
  { l: '6%', t: '18%', s: 1, o: 0.55, d: -2 }, { l: '42%', t: '12%', s: 0.7, o: 0.35, d: -6 },
  { l: '52%', b: '14%', s: 0.85, o: 0.5, d: -4 }, { r: '4%', t: '14%', s: 0.78, o: 0.45, d: -9 },
  { l: '30%', b: '8%', s: 0.62, o: 0.3, d: -1 }, { r: '42%', t: '42%', s: 0.55, o: 0.25, d: -7 },
  { l: '2%', b: '22%', s: 0.78, o: 0.4, d: -11 },
];

function Compass() {
  return (
    <svg viewBox="0 0 400 400" fill="none" stroke="#fff" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
      <circle cx="200" cy="200" r="196" strokeOpacity=".35" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="182" strokeOpacity=".2" strokeDasharray="2 8" strokeWidth="2" />
      <g fill="#fff" stroke="none">
        <path d="M200 0l7 22h-14z" /><path d="M200 400l-7-22h14z" /><path d="M0 200l22-7v14z" /><path d="M400 200l-22 7v-14z" />
        <g opacity=".7"><path d="M58.6 58.6l17 9-8 8z" /><path d="M341.4 58.6l-9 17-8-8z" /><path d="M58.6 341.4l9-17 8 8z" /><path d="M341.4 341.4l-17-9 8-8z" /></g>
      </g>
    </svg>
  );
}

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
      background: 'radial-gradient(120% 90% at 85% 40%, #4f8bff 0%, #2563ff 35%, #1240d6 65%, #0a2378 100%)',
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
            <Eyebrow color="#fff">Specialty Coffee · Bengaluru</Eyebrow>
            <Typography variant="h1" sx={{ my: 3, fontSize: { xs: 'clamp(2.6rem, 13vw, 3.6rem)', sm: '4.8rem', md: '6rem', lg: '7.2rem' } }}>
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
            <Box sx={{ position: 'absolute', inset: '-2%', animation: 'spin 60s linear infinite', opacity: 0.9 }}><Compass /></Box>
            <Box sx={{ position: 'absolute', inset: '6%', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 40px 80px -30px rgba(0,0,0,.55)',
              animation: 'float 7s ease-in-out infinite',
              '&::after': { content: '""', position: 'absolute', inset: 0, borderRadius: '50%', boxShadow: 'inset 0 0 0 6px rgba(255,255,255,.18)' } }}>
              <Photo name="hero-cups" priority w={960} h={914} ratio="auto"
                alt="Bretlyn hot latte, iced americano, iced latte and caramel frappé" sx={{ transform: 'scale(1.08)' }} />
            </Box>
            <Card elevation={0} sx={{ position: 'absolute', left: { xs: 0, md: '-4%' }, bottom: '10%', display: 'flex', alignItems: 'center', gap: 1.5,
              px: { xs: 1.6, md: 2.2 }, py: { xs: 1.2, md: 1.6 }, borderRadius: '18px', color: brand.navy,
              boxShadow: '0 20px 40px -15px rgba(0,0,0,.4)', animation: 'float 6s ease-in-out infinite reverse' }}>
              <BrandMark size={{ xs: 34, md: 44 }} color={brand.navy} />
              <Box>
                <Typography variant="h3" component="strong" sx={{ display: 'block', fontSize: { xs: '1.5rem', md: '2rem' } }}>100%</Typography>
                <Typography sx={{ fontSize: '.72rem', letterSpacing: '.12em', textTransform: 'uppercase', opacity: 0.7, lineHeight: 1.3 }}>
                  Indian specialty<br />arabica
                </Typography>
              </Box>
            </Card>
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
        <Split media={<MediaCard tag="Farm to cup"><Photo name="beans" w={960} h={598} alt="Roasted coffee beans spilling from a woven basket beside ripe coffee cherries" ratio={{ xs: '16/10', md: '4/3' }} /></MediaCard>}>
          <Eyebrow>Our Beans</Eyebrow>
          <Typography variant="h2" sx={{ color: brand.navy, my: 2.5, fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.8rem' } }}>
            Single origin<br />specialty coffee
          </Typography>
          <Typography sx={{ color: '#2a3a72', fontSize: { xs: '1.02rem', md: '1.12rem' }, maxWidth: 520 }}>
            Sourced from India&apos;s finest coffee-growing regions. Every lot is traceable to the estates that grow it — shade-grown,
            hand-picked and roasted to bring out its own character.
          </Typography>
          <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 1, mt: 4 }}>
            {REGIONS.map((r) => (
              <Chip key={r} label={r} variant="outlined" sx={{ borderColor: brand.navy, color: brand.navy, transition: '.3s',
                '&:hover': { background: brand.navy, color: '#fff' } }} />
            ))}
          </Stack>
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

      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', color: '#fff', py: { xs: 7, md: 9 },
        background: `linear-gradient(135deg, ${brand.royal}, ${brand.navy})` }}>
        <BrandMark color="#fff" size={420} sx={{ position: 'absolute', right: -120, top: -120, opacity: 0.06, animation: 'spin 80s linear infinite' }} />
        <Container sx={{ position: 'relative' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: { xs: 4, md: 3 } }}>
            {[[100, '%', 'Indian arabica'], [6, '', 'Growing regions'], [20, '+', 'Handcrafted drinks'], [1, '', 'Promise: great coffee']].map(([n, s, l], i) => (
              <Reveal key={l} delay={i * 0.1}>
                <Typography variant="h2" component="strong" sx={{ display: 'block', fontSize: { xs: '2.8rem', md: '4.6rem' } }}>
                  <CountUp end={n} suffix={s} />
                </Typography>
                <Typography sx={{ fontSize: '.82rem', letterSpacing: '.16em', textTransform: 'uppercase', opacity: 0.8 }}>{l}</Typography>
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>

      <Section bg={brand.paper}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ justifyContent: 'space-between', alignItems: { sm: 'flex-end' }, mb: 6 }}>
          <Box>
            <Eyebrow>Signatures</Eyebrow>
            <Typography variant="h2" sx={{ color: brand.navy, mt: 2, fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.4rem' } }}>
              Pick your<br />everyday ritual
            </Typography>
          </Box>
          <Button component={RouterLink} to="/menu" variant="outlined" color="secondary" endIcon={<ArrowForwardIcon />}
            sx={{ alignSelf: { xs: 'flex-start', sm: 'auto' }, '&:hover': { background: brand.navy, color: '#fff' } }}>
            Full Menu
          </Button>
        </Stack>
        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' } }}>
          {DRINKS.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <Card variant="outlined" sx={{ position: 'relative', p: 3, height: '100%', borderColor: 'rgba(10,35,120,.08)',
                transition: `transform .5s ${ease}, box-shadow .5s ${ease}`,
                '@media (hover:hover)': { '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 30px 50px -30px rgba(10,35,120,.5)' },
                  '&:hover svg': { transform: 'translateY(-6px) rotate(-4deg)' } } }}>
                {d.tag && (
                  <Chip label={d.tag} size="small" sx={{ position: 'absolute', top: 16, right: 16, zIndex: 2, background: brand.navy, color: '#fff',
                    fontSize: '.66rem', letterSpacing: '.14em', textTransform: 'uppercase', height: 24 }} />
                )}
                <Box sx={{ height: 180, display: 'grid', placeItems: 'center', mb: 2.5, borderRadius: '16px', background: brand.ice,
                  '& svg': { height: 148, width: 'auto', transition: `transform .6s ${ease}` } }}>
                  <CupArt type={d.type} />
                </Box>
                <Typography variant="h3" sx={{ color: brand.navy }}>{d.name}</Typography>
                <Typography sx={{ color: brand.muted, fontSize: '.93rem', mt: 1 }}>{d.text}</Typography>
              </Card>
            </Reveal>
          ))}
        </Box>
      </Section>

      <CTA title={<>Your daily cup<br />is waiting.</>}
        text="Great specialty coffee shouldn't be a once-in-a-while treat. Come make it part of your day."
        secondary={{ href: 'mailto:contact@bretlyn.com', label: 'Contact Us' }} />
    </>
  );
}
