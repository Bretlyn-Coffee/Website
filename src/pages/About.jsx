import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Eyebrow, Section, usePageMeta } from '../components/Blocks';
import { brand } from '../theme';

const body = { color: '#2a3a72', fontSize: { xs: '1.02rem', md: '1.12rem' }, maxWidth: 760 };

export default function About() {
  usePageMeta('About Us — Bretlyn Coffee',
    'Bretlyn Coffee is a new-age specialty coffee experience, made for every day — quality-crafted specialty coffee, signature beverages and approachable prices.');
  return (
    <>
      <Section bg={brand.paper} sx={{ pt: { xs: 14, md: 20 } }}>
        <Box sx={{ maxWidth: 820 }}>
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
        </Box>
      </Section>

    </>
  );
}
