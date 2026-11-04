import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import Reveal from '../components/Reveal';
import { CupArt, PageHero, usePageMeta } from '../components/Blocks';
import { MENU } from '../data/site';
import { asset } from '../base';
import { brand, ease } from '../theme';

const SIDEBAR_BG = '#e8f2ff';
const PHOTO_BG = 'radial-gradient(70% 60% at 50% 40%, #a9cfff 0%, #3d8bff 45%, #0a6cff 100%)';

function DrinkImage({ item }) {
  const usePhoto = Boolean(item.photo);
  return (
    <Box sx={{ position: 'relative', aspectRatio: '405 / 362', overflow: 'hidden', background: PHOTO_BG }}>
      {usePhoto ? (
        <Box component="picture" sx={{ display: 'contents' }}>
          <source type="image/webp" srcSet={`${asset(`assets/img/menu/${item.photo}-800.webp`)} 800w, ${asset(`assets/img/menu/${item.photo}-1400.webp`)} 1400w`}
            sizes="(max-width:600px) 92vw, (max-width:1240px) 45vw, 400px" />
          <Box component="img" loading="lazy" alt={item.name} width={1400} height={1251}
            src={asset(`assets/img/menu/${item.photo}-800.jpg`)}
            srcSet={`${asset(`assets/img/menu/${item.photo}-800.jpg`)} 800w, ${asset(`assets/img/menu/${item.photo}-1400.jpg`)} 1400w`}
            sizes="(max-width:600px) 92vw, (max-width:1240px) 45vw, 400px"
            sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom', transition: `transform 1s ${ease}` }} />
        </Box>
      ) : (
        <Box sx={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
          '&::after': { content: '""', position: 'absolute', left: 0, right: 0, bottom: 0, height: '12%', background: 'linear-gradient(#f4f7ff, #fff)' },
          '& svg': { height: '62%', width: 'auto', position: 'relative', zIndex: 1, mt: '6%', transition: `transform .6s ${ease}` } }}>
          <CupArt type={item.art || 'hot'} />
        </Box>
      )}
    </Box>
  );
}

function DrinkCard({ item: base, temp }) {
  const item = temp === 'iced' && base.iced ? base.iced : base;
  return (
    <Card variant="outlined" sx={{ height: '100%', borderRadius: '6px', borderColor: '#d9dff0', overflow: 'hidden',
      transition: `transform .45s ${ease}, box-shadow .45s ${ease}`,
      '@media (hover:hover)': { '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 24px 40px -24px rgba(10,35,120,.45)' },
        '&:hover img': { transform: 'scale(1.04)' }, '&:hover svg': { transform: 'translateY(-4px) rotate(-3deg)' } } }}>
      <DrinkImage item={item} />
      <Box sx={{ px: 2, pt: 2, pb: 2.5 }}>
        <Typography component="h3" sx={{ fontWeight: 700, color: brand.navy, fontSize: { xs: '1.25rem', md: '1.35rem' }, mb: 1.2 }}>
          {item.name}
        </Typography>
        {item.lines.map((l) => (
          <Typography key={l} sx={{ color: '#3a4366', fontSize: '.92rem', lineHeight: 1.75 }}>{l}</Typography>
        ))}
      </Box>
    </Card>
  );
}

export default function Menu() {
  usePageMeta('Menu — Bretlyn Coffee', 'Explore the Bretlyn Coffee menu: signature lattes, hot and cold beverages, matcha & ube series, frappes and Bretlyn treats.');
  const initial = MENU.find((c) => `#${c.id}` === window.location.hash)?.id || MENU[0].id;
  const [active, setActive] = useState(initial);
  const [temp, setTemp] = useState('hot');
  const cat = MENU.find((c) => c.id === active) || MENU[0];

  useEffect(() => {
    window.history.replaceState(null, '', `#${active}`);
    setTemp('hot');
  }, [active]);

  return (
    <>
      <PageHero eyebrow="Bretlyn Coffee" title="Our Menu" text="Specialty coffee and signature drinks, crafted for every day." />
      <Box component="section" sx={{ background: '#fff' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: '274px minmax(0, 1fr)' }, minHeight: { md: '80vh' } }}>
          {/* Sidebar (desktop) / scrolling chips (mobile) */}
          <Box component="nav" aria-label="Menu categories" sx={{ background: SIDEBAR_BG, minWidth: 0,
            position: { xs: 'sticky', md: 'static' }, top: { xs: 56, md: 'auto' }, zIndex: 5 }}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 80 }, px: { xs: 0, md: 2 }, py: { xs: 1.2, md: 4 } }}>
              <Typography sx={{ display: { xs: 'none', md: 'block' }, fontWeight: 800, fontSize: '2.1rem', color: brand.navy,
                letterSpacing: '.02em', px: 1, mb: 3 }}>MENU</Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: { xs: 1, md: 1.2 },
                overflowX: { xs: 'auto', md: 'visible' }, px: { xs: 2, md: 0 }, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
                {MENU.map((c) => {
                  const on = c.id === active;
                  return (
                    <ButtonBase key={c.id} onClick={() => setActive(c.id)} aria-current={on ? 'true' : undefined}
                      sx={{ justifyContent: 'flex-start', textAlign: 'left', flex: 'none', borderRadius: { xs: 999, md: '6px' },
                        px: { xs: 2, md: 1.5 }, py: { xs: 1, md: 1.6 }, fontWeight: 700, fontSize: { xs: '.88rem', md: '1.02rem' },
                        letterSpacing: '.01em', color: on ? '#fff' : brand.navy, whiteSpace: 'nowrap',
                        background: on ? 'linear-gradient(135deg, #0a3fd1, #0a2378)' : { xs: '#fff', md: 'transparent' },
                        border: { xs: `1.5px solid ${on ? 'transparent' : '#c9d6f2'}`, md: 'none' },
                        boxShadow: on ? '0 10px 20px -12px rgba(10,35,120,.7)' : 'none',
                        transition: 'background .25s, color .25s', '&:hover': { background: on ? undefined : 'rgba(10,35,120,.07)' } }}>
                      {c.name}
                    </ButtonBase>
                  );
                })}
              </Box>
            </Box>
          </Box>

          {/* Category content */}
          <Container maxWidth={false} sx={{ py: { xs: 4, md: 4 }, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 1340 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'flex-start' }, gap: 2, mb: 4 }}>
              <Box>
                {cat.eyebrow && (
                  <Typography sx={{ fontWeight: 800, color: brand.navy, letterSpacing: '.12em', textTransform: 'uppercase', fontSize: { xs: '.9rem', md: '1.05rem' }, mb: 0.5 }}>
                    {cat.eyebrow}
                  </Typography>
                )}
                <Typography component="h2" sx={{ fontWeight: 800, color: brand.navy, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.15 }}>
                  {cat.name}
                </Typography>
                {cat.sub && <Typography sx={{ color: '#5a6280', fontSize: { xs: '1.05rem', md: '1.25rem' }, mt: 0.5 }}>{cat.sub}</Typography>}
              </Box>
              {cat.hotIced && (
                <ToggleButtonGroup exclusive value={temp} onChange={(_, v) => v && setTemp(v)} aria-label="Hot or iced"
                  sx={{ border: '1.5px solid #d5dbea', borderRadius: '8px', p: '2px', background: '#fff',
                    '& .MuiToggleButton-root': { border: 0, borderRadius: '6px !important', px: { xs: 3, md: 4.5 }, py: 1.1,
                      fontWeight: 800, letterSpacing: '.06em', fontSize: '1rem', color: brand.navy },
                    '& .Mui-selected': { background: 'linear-gradient(135deg, #0a3fd1, #0a2378) !important', color: '#fff !important' } }}>
                  <ToggleButton value="hot">HOT</ToggleButton>
                  <ToggleButton value="iced">ICED</ToggleButton>
                </ToggleButtonGroup>
              )}
            </Box>

            {cat.items.length ? (
              <Box key={`${cat.id}-${temp}`} sx={{ display: 'grid', gap: { xs: 2.5, md: 2.5 },
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' } }}>
                {cat.items.map((it, i) => (
                  <Reveal key={`${it.name}-${temp}`} delay={i * 0.06}><DrinkCard item={it} temp={temp} /></Reveal>
                ))}
              </Box>
            ) : (
              <Box sx={{ border: '1.5px dashed #c9d6f2', borderRadius: '10px', p: { xs: 4, md: 6 }, textAlign: 'center', color: '#5a6280' }}>
                <Typography sx={{ fontWeight: 700, color: brand.navy, fontSize: '1.3rem', mb: 1 }}>Coming soon</Typography>
                <Typography>New {cat.name.toLowerCase()} are on their way. Ask in store for today&apos;s selection.</Typography>
              </Box>
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
}
