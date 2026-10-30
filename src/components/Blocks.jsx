import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BrandMark from '../brand/BrandMark';
import { MARK_PATH, MARK_VIEWBOX } from '../brand/markPath';
import Reveal from './Reveal';
import { brand, display, ease } from '../theme';

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const m = document.querySelector('meta[name="description"]');
    if (m && description) m.setAttribute('content', description);
    const c = document.querySelector('link[rel="canonical"]');
    if (c) c.setAttribute('href', `https://bretlyn.com${window.location.pathname}`);
  }, [title, description]);
}

export function Eyebrow({ children, color = brand.royal, sx }) {
  return (
    <Typography
      variant="overline"
      component="span"
      sx={{ color, display: 'inline-flex', alignItems: 'center', gap: 1.4,
        '&::before': { content: '""', width: 28, height: 2, background: 'currentColor' }, ...sx }}
    >
      {children}
    </Typography>
  );
}

export function Section({ children, bg = brand.paper, sx, ...rest }) {
  return (
    <Box component="section" sx={{ py: { xs: 9, md: 14 }, background: bg, position: 'relative', ...sx }} {...rest}>
      <Container>{children}</Container>
    </Box>
  );
}

/** Responsive photo: WebP + JPG, two sizes each. */
export function Photo({ name, alt, w = 960, h, ratio = '4/3', priority = false, sx }) {
  const sizes = '(max-width:980px) 92vw, 46vw';
  return (
    <Box component="picture" sx={{ display: 'contents' }}>
      <source type="image/webp" srcSet={`/assets/img/${name}-960.webp 960w, /assets/img/${name}-1600.webp 1600w`} sizes={sizes} />
      <Box
        component="img"
        src={`/assets/img/${name}-960.jpg`}
        srcSet={`/assets/img/${name}-960.jpg 960w, /assets/img/${name}-1600.jpg 1600w`}
        sizes={sizes}
        alt={alt}
        width={w}
        height={h}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        sx={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: ratio, filter: 'saturate(1.06) contrast(1.03)', ...sx }}
      />
    </Box>
  );
}

export function MediaCard({ tag, children }) {
  return (
    <Box sx={{ position: 'relative', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 30px 60px -30px rgba(10,35,120,.45)',
      '& img': { transition: `transform 1.2s ${ease}` }, '&:hover img': { transform: 'scale(1.05)' } }}>
      {children}
      {tag && (
        <Box sx={{ position: 'absolute', top: 18, left: 18, background: 'rgba(255,255,255,.92)', color: brand.navy, px: 1.8, py: 0.6,
          borderRadius: 999, fontSize: '.72rem', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase' }}>
          {tag}
        </Box>
      )}
    </Box>
  );
}

export function Split({ media, children, reverse = false }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'center' }}>
      <Reveal sx={{ order: { xs: 0, md: reverse ? 2 : 0 } }}>{media}</Reveal>
      <Reveal delay={0.1}>{children}</Reveal>
    </Box>
  );
}

export function PageHero({ eyebrow, title, text }) {
  return (
    <Box component="section" sx={{ position: 'relative', overflow: 'hidden', color: '#fff',
      background: 'radial-gradient(120% 120% at 80% 0%, #2f6bff 0%, #1240d6 45%, #0a2378 100%)',
      pt: { xs: 16, md: 22 }, pb: { xs: 8, md: 12 } }}>
      <BrandMark color="#fff" size="min(46vw, 520px)"
        sx={{ position: 'absolute', right: '-6%', top: '50%', mt: 'calc(min(46vw, 520px) / -2)', opacity: 0.08, animation: 'spin 90s linear infinite' }} />
      <Container sx={{ position: 'relative' }}>
        <Eyebrow color="#fff">{eyebrow}</Eyebrow>
        <Typography variant="h1" sx={{ my: 2, fontSize: { xs: '3rem', sm: '4.4rem', md: '6.2rem' } }}>{title}</Typography>
        {text && <Typography sx={{ maxWidth: 580, fontSize: { xs: '1.05rem', md: '1.15rem' }, opacity: 0.9 }}>{text}</Typography>}
      </Container>
    </Box>
  );
}

export function Marquee({ words }) {
  const items = [...words, ...words, ...words, ...words];
  return (
    <Box aria-hidden sx={{ background: brand.navy, color: '#fff', overflow: 'hidden', py: 2, borderBlock: '1px solid rgba(255,255,255,.08)' }}>
      <Box sx={{ display: 'flex', width: 'max-content', animation: 'marquee 28s linear infinite' }}>
        {items.map((w, i) => (
          <Box key={i} component="span" sx={{ fontFamily: display, fontWeight: 700, fontSize: { xs: '1.3rem', md: '1.6rem' }, letterSpacing: '.06em',
            textTransform: 'uppercase', px: 2.8, display: 'flex', alignItems: 'center', gap: 5.5, whiteSpace: 'nowrap',
            '&::after': { content: '"✦"', color: brand.sky, fontSize: '1rem' } }}>
            {w}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function CTA({ title, text, primary = { to: '/menu', label: 'See the Menu' }, secondary }) {
  return (
    <Box component="section" sx={{ background: brand.paper, pb: { xs: 9, md: 12 } }}>
      <Container>
        <Reveal>
          <Box sx={{ position: 'relative', overflow: 'hidden', background: brand.royal, color: '#fff', borderRadius: { xs: '24px', md: '32px' },
            p: { xs: 4, sm: 6, md: 8 }, display: 'grid', gap: 4, alignItems: 'center', gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' } }}>
            <BrandMark color="#fff" size={340} sx={{ position: 'absolute', right: -60, bottom: -80, opacity: 0.12 }} />
            <Box sx={{ position: 'relative' }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.4rem', md: '4rem' } }}>{title}</Typography>
              {text && <Typography sx={{ mt: 2, opacity: 0.9, maxWidth: 480 }}>{text}</Typography>}
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: { md: 'flex-end' }, position: 'relative' }}>
              <Button component={RouterLink} to={primary.to} variant="contained" endIcon={<ArrowForwardIcon />}
                sx={{ background: '#fff', color: brand.royal, '&:hover': { background: brand.navy, color: '#fff' } }}>
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} variant="outlined"
                  sx={{ color: '#fff', borderColor: '#fff', '&:hover': { background: '#fff', color: brand.royal, borderColor: '#fff' } }}>
                  {secondary.label}
                </Button>
              )}
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

/* ---------- Illustrated drinks, branded with the Bretlyn mark ---------- */
function MarkOnCup({ y }) {
  // nested svg reuses the vector mark at cup scale
  return <BrandMarkSvg x={38} y={y} size={44} />;
}
function BrandMarkSvg({ x, y, size }) {
  return <use href="#bmark" x={x} y={y} width={size} height={size} fill="#fff" />;
}

export function CupArt({ type }) {
  const shadow = <ellipse cx="60" cy="144" rx="38" ry="5" fill="#0a2378" opacity=".12" />;
  if (type === 'hot') return (
    <svg viewBox="0 -30 120 180" aria-hidden="true">
      <g className="steam" fill="none" stroke="#8fb5ff" strokeWidth="3" strokeLinecap="round">
        <path d="M45 10c-6-8 6-14 0-24" /><path d="M60 8c-6-8 6-14 0-24" /><path d="M75 10c-6-8 6-14 0-24" />
      </g>
      {shadow}
      <path d="M18 30h84l-10 110H28z" fill="#1240d6" /><rect x="14" y="22" width="92" height="12" rx="4" fill="#0a2378" />
      <ellipse cx="60" cy="24" rx="44" ry="7" fill="#c98b52" /><path d="M48 23c6-6 18-6 24 0-6 3-18 3-24 0z" fill="#f3dcc0" />
      <MarkOnCup y={64} />
    </svg>
  );
  if (type === 'frappe') return (
    <svg viewBox="0 0 120 150" aria-hidden="true">
      {shadow}
      <path d="M18 46h84l-10 94H28z" fill="#e2a874" stroke="#d29361" strokeWidth="2" />
      <path d="M18 46c0-14 12-22 20-20 2-12 16-18 24-12 8-8 24-2 24 10 10 0 18 10 16 22z" fill="#fffaf2" />
      <path d="M30 36c10 6 20-8 30 0s20-6 30 2" fill="none" stroke="#c46f22" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 26c8 4 14-4 22 0s14-2 18 2" fill="none" stroke="#c46f22" strokeWidth="3" strokeLinecap="round" />
      <MarkOnCup y={72} />
    </svg>
  );
  const dark = type === 'americano';
  return (
    <svg viewBox="0 0 120 150" aria-hidden="true">
      {shadow}
      <path d="M16 24h88l-12 116H28z" fill="#e9f1ff" stroke="#b9ccf5" strokeWidth="2" />
      <path d="M20 40h80l-9 100H29z" fill={dark ? '#2b140a' : '#c99a6b'} />
      {!dark && <path d="M25 104h70l-4 36H29z" fill="#fbf4ea" />}
      <g fill="#fff" opacity=".55">
        <rect x="30" y="34" width="20" height="18" rx="4" transform="rotate(-12 40 43)" />
        <rect x="58" y="30" width="22" height="20" rx="4" transform="rotate(10 69 40)" />
        <rect x="44" y="52" width="18" height="16" rx="4" transform="rotate(20 53 60)" />
      </g>
      <rect x="12" y="18" width="96" height="8" rx="3" fill="#c7d6f7" />
      <MarkOnCup y={70} />
    </svg>
  );
}

export function MarkSprite() {
  // Defines #bmark once so SVG illustrations can <use> the vector logo.
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="bmark" viewBox={MARK_VIEWBOX}><path fillRule="evenodd" d={MARK_PATH} /></symbol>
    </svg>
  );
}
