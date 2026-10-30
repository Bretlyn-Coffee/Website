import { useEffect, useState } from 'react';
import { NavLink, Link as RouterLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Logo } from '../brand/BrandMark';
import BrandMark from '../brand/BrandMark';
import { brand, display, ease } from '../theme';

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/menu', label: 'Menu' },
];

const linkSx = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 500,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  fontSize: '0.92rem',
  position: 'relative',
  py: 0.5,
  '&::after': {
    content: '""', position: 'absolute', left: 0, bottom: -2, width: '100%', height: 2,
    background: '#fff', transform: 'scaleX(0)', transformOrigin: 'right', transition: `transform .4s ${ease}`,
  },
  '&:hover::after, &.active::after': { transform: 'scaleX(1)', transformOrigin: 'left' },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(10,35,120,.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 10px 30px -15px rgba(0,0,0,.4)' : 'none',
          transition: `all .4s ${ease}`,
          py: { xs: scrolled ? 0.25 : 0.75, md: scrolled ? 0.5 : 1.5 },
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 56, md: 64 } }}>
            <Box component={RouterLink} to="/" aria-label="Bretlyn Coffee home" sx={{ display: 'block' }}>
              <Logo height={scrolled ? { xs: 36, md: 42 } : { xs: 40, md: 50 }} sx={{ transition: `height .4s ${ease}` }} />
            </Box>
            <Stack component="nav" aria-label="Main" direction="row" spacing={5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {NAV.map((n) => (
                <Box key={n.to} component={NavLink} to={n.to} end sx={linkSx}>{n.label}</Box>
              ))}
            </Stack>
            <IconButton
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{ display: { md: 'none' }, color: '#fff' }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { height: '100dvh', background: brand.navy, color: '#fff' } }}
      >
        <Container sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 64, py: 0.75 }}>
            <Logo height={40} />
            <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>
          <Stack component="nav" spacing={3} sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {NAV.map((n) => (
              <Box
                key={n.to}
                component={NavLink}
                to={n.to}
                end
                sx={{ ...linkSx, fontFamily: display, fontWeight: 700, fontSize: { xs: '2.6rem', sm: '3.2rem' } }}
              >
                {n.label}
              </Box>
            ))}
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center', pb: 5, opacity: 0.25 }}>
            <BrandMark size={72} color="#fff" sx={{ animation: 'spin 40s linear infinite' }} />
          </Box>
        </Container>
      </Drawer>
    </>
  );
}
