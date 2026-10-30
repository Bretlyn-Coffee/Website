import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Logo } from '../brand/BrandMark';
import { brand } from '../theme';
import { COMPANY, SOCIAL } from '../data/site';

const ICONS = { Instagram: InstagramIcon, LinkedIn: LinkedInIcon, Facebook: FacebookIcon, Youtube: YouTubeIcon };

const linkSx = {
  color: 'rgba(255,255,255,.88)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 1.2,
  transition: 'all .25s', '&:hover': { color: '#fff', transform: 'translateX(4px)' },
};

function Col({ title, children }) {
  return (
    <Box sx={{ borderLeft: { md: '1px solid rgba(255,255,255,.28)' }, pl: { md: 4 } }}>
      <Typography sx={{ fontSize: '.9rem', letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 600, mb: 2 }}>
        {title}
      </Typography>
      <Stack spacing={1.3} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>{children}</Stack>
    </Box>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ background: brand.navy, color: '#fff', pt: { xs: 7, md: 9 }, pb: 3 }}>
      <Container>
        <Box sx={{ display: 'grid', gap: { xs: 5, md: 4 }, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.6fr 1fr 1fr 1fr' } }}>
          <Box sx={{ gridColumn: { sm: '1 / -1', md: 'auto' } }}>
            <Logo height={60} sx={{ mb: 3 }} />
            <Stack direction="row" spacing={1.5} sx={{ mb: 2, opacity: 0.92 }}>
              <PlaceIcon sx={{ mt: 0.3 }} />
              <Typography component="address" sx={{ fontStyle: 'normal', fontSize: '.93rem' }}>
                {COMPANY.legalName}<br />{COMPANY.address.map((l) => <span key={l}>{l}<br /></span>)}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', opacity: 0.92 }}>
              <EmailIcon />
              <Link href={`mailto:${COMPANY.email}`} color="inherit" underline="hover" sx={{ fontSize: '.93rem' }}>{COMPANY.email}</Link>
            </Stack>
          </Box>
          <Col title="Quick Links">
            {[['/', 'Home'], ['/about', 'About Us'], ['/menu', 'Menu']].map(([to, l]) => (
              <li key={to}><Box component={RouterLink} to={to} sx={linkSx}>{l}</Box></li>
            ))}
          </Col>
          <Col title="Follow Us">
            {SOCIAL.map(({ name, url }) => {
              const Icon = ICONS[name];
              return (
                <li key={name}>
                  <Box component="a" href={url} target="_blank" rel="noopener" sx={linkSx}><Icon />{name}</Box>
                </li>
              );
            })}
          </Col>
          <Col title="Legal">
            <li><Box component={RouterLink} to="/privacy-policy" sx={linkSx}>Privacy Policy</Box></li>
            <li><Box component={RouterLink} to="/terms" sx={linkSx}>Terms &amp; Conditions</Box></li>
          </Col>
        </Box>
        <Typography sx={{ borderTop: '1px solid rgba(255,255,255,.28)', mt: 6, pt: 2.5, textAlign: 'center', fontSize: '.85rem', opacity: 0.8 }}>
          © {new Date().getFullYear()} {COMPANY.legalName}. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}
