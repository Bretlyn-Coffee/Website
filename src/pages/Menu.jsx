import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import Reveal from '../components/Reveal';
import { PageHero, usePageMeta } from '../components/Blocks';
import { MENU } from '../data/site';
import { brand, display } from '../theme';

export default function Menu() {
  usePageMeta('Menu — Bretlyn Coffee', 'Explore the Bretlyn Coffee menu: hot espresso drinks, iced coffee, frappés and single origin manual brews.');
  const [active, setActive] = useState(MENU[0].id);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    MENU.forEach((c) => { const el = document.getElementById(c.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const go = (_, id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageHero eyebrow="Our Menu" title={<>Pick your<br />perfect cup.</>}
        text="Every drink is made with freshly ground single origin Indian specialty coffee. Ask about oat or almond milk." />
      <Box component="section" sx={{ background: brand.paper, pt: 2, pb: { xs: 9, md: 12 } }}>
        <Box sx={{ position: 'sticky', top: { xs: 56, md: 72 }, zIndex: 10, background: 'rgba(255,253,247,.96)', backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(10,35,120,.08)' }}>
          <Container>
            <Tabs value={active} onChange={go} variant="scrollable" scrollButtons={false} aria-label="Menu categories"
              sx={{ py: 1, '& .MuiTabs-indicator': { display: 'none' }, '& .MuiTabs-flexContainer': { gap: 1 } }}>
              {MENU.map((c) => (
                <Tab key={c.id} value={c.id} label={c.name} disableRipple sx={{
                  border: `1.5px solid ${brand.navy}`, borderRadius: 999, color: brand.navy, px: 2.5, minHeight: 40, fontSize: '.8rem',
                  '&.Mui-selected': { background: brand.navy, color: '#fff' } }} />
              ))}
            </Tabs>
          </Container>
        </Box>
        <Container sx={{ pt: 6 }}>
          {MENU.map((c) => (
            <Reveal key={c.id} component="section" id={c.id} sx={{ mb: 7, scrollMarginTop: { xs: 130, md: 150 } }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { sm: 'flex-end' },
                gap: 0.5, borderBottom: `2px solid ${brand.navy}`, pb: 1.2, mb: 2 }}>
                <Typography variant="h2" component="h2" sx={{ color: brand.navy, fontSize: { xs: '2.2rem', md: '3.2rem' } }}>{c.name}</Typography>
                <Typography sx={{ color: brand.royal, fontSize: '.82rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 500 }}>{c.sub}</Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, columnGap: 6 }}>
                {c.items.map(([name, desc, price]) => (
                  <Box key={name} sx={{ display: 'grid', gridTemplateColumns: '1fr auto', columnGap: 2, rowGap: 0.4, py: 2,
                    borderBottom: '1px dashed rgba(10,35,120,.2)' }}>
                    <Typography component="h3" sx={{ fontWeight: 600, color: brand.navy, fontSize: '1.06rem' }}>{name}</Typography>
                    <Typography sx={{ fontFamily: display, fontWeight: 700, fontSize: '1.3rem', color: brand.royal, lineHeight: 1.2 }}>₹{price}</Typography>
                    <Typography sx={{ gridColumn: '1 / -1', color: '#5a6697', fontSize: '.92rem' }}>{desc}</Typography>
                  </Box>
                ))}
              </Box>
            </Reveal>
          ))}
          <Typography sx={{ color: '#5a6697', fontSize: '.88rem' }}>
            Prices are inclusive of applicable taxes. Menu and prices may vary by location.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
