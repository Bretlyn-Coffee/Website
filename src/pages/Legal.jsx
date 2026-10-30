import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PageHero, usePageMeta } from '../components/Blocks';
import { COMPANY } from '../data/site';
import { brand } from '../theme';

function H({ children }) {
  return <Typography variant="h3" component="h2" sx={{ color: brand.navy, fontSize: '1.9rem', mt: 5, mb: 1.2 }}>{children}</Typography>;
}
function P({ children }) {
  return <Typography sx={{ color: '#2a3a72', mb: 1.5 }}>{children}</Typography>;
}
function UL({ items }) {
  return <Box component="ul" sx={{ pl: 2.5, color: '#2a3a72', '& li': { mb: 1 } }}>{items.map((i) => <li key={i}>{i}</li>)}</Box>;
}
const Mail = () => <a href={`mailto:${COMPANY.email}`}><u>{COMPANY.email}</u></a>;

function LegalLayout({ title, children }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <Box component="section" sx={{ background: brand.cream, py: { xs: 7, md: 10 } }}>
        <Container><Box sx={{ maxWidth: 820 }}>
          <Typography sx={{ color: brand.royal, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', fontSize: '.9rem' }}>
            Last updated: October 2026
          </Typography>
          {children}
        </Box></Container>
      </Box>
    </>
  );
}

export function Privacy() {
  usePageMeta('Privacy Policy — Bretlyn Coffee', 'How Bretlyn Global Private Limited collects, uses and protects your information.');
  return (
    <LegalLayout title="Privacy Policy">
      <P>This Privacy Policy explains how {COMPANY.legalName} (&quot;Bretlyn&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses and protects information when you visit bretlyn.com or interact with us.</P>
      <H>Information we collect</H>
      <UL items={['Information you give us, such as your name, email address and message when you contact us.',
        'Basic technical information such as browser type, device and pages visited, collected through standard server logs.']} />
      <H>How we use it</H>
      <UL items={['To respond to your enquiries and provide our services.', 'To improve our website and customer experience.',
        'To comply with applicable laws, including the Digital Personal Data Protection Act, 2023.']} />
      <H>Sharing</H>
      <P>We do not sell your personal data. We may share it with service providers who help us run our website and business, under appropriate confidentiality obligations, or where required by law.</P>
      <H>Your rights</H>
      <P>You may request access to, correction of, or deletion of your personal data by writing to <Mail />.</P>
      <H>Contact</H>
      <P>{COMPANY.legalName}, {COMPANY.address.join(' ')}</P>
    </LegalLayout>
  );
}

export function Terms() {
  usePageMeta('Terms & Conditions — Bretlyn Coffee', 'Terms and conditions for using bretlyn.com.');
  return (
    <LegalLayout title={<>Terms &amp; Conditions</>}>
      <P>By using bretlyn.com you agree to these terms. If you do not agree, please do not use the website.</P>
      <H>Use of the website</H>
      <P>The content on this website is for general information about Bretlyn Coffee and our products. You agree not to misuse the website or attempt to interfere with its operation.</P>
      <H>Intellectual property</H>
      <P>The Bretlyn name, logo, images and content on this site belong to {COMPANY.legalName} and may not be used without our written permission.</P>
      <H>Menu and pricing</H>
      <P>Menu items, prices and availability shown on the website are indicative and may change without notice or vary by location.</P>
      <H>Limitation of liability</H>
      <P>We aim to keep information accurate and up to date but make no warranties about its completeness. To the extent permitted by law, Bretlyn is not liable for any loss arising from use of this website.</P>
      <H>Governing law</H>
      <P>These terms are governed by the laws of India, and the courts of Bengaluru, Karnataka shall have exclusive jurisdiction.</P>
      <H>Contact</H>
      <P>Questions? Write to <Mail />.</P>
    </LegalLayout>
  );
}

export function NotFound() {
  usePageMeta('Page not found — Bretlyn Coffee', 'This page could not be found.');
  return (
    <>
      <PageHero eyebrow="Error 404" title={<>Lost your<br />way?</>} text="This page has wandered off. Let our compass guide you back." />
      <Box sx={{ background: brand.paper, py: 8 }}>
        <Container>
          <Button component={RouterLink} to="/" variant="contained" endIcon={<ArrowForwardIcon />}>Back Home</Button>
        </Container>
      </Box>
    </>
  );
}
