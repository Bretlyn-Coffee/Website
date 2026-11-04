import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PageHero, usePageMeta } from '../components/Blocks';
import { brand } from '../theme';

const LEGAL_EMAIL = 'support@bretlyn.com';
const LEGAL_ADDRESS = 'No.235, 2nd Floor, 13th Cross, 2nd Stage, Indiranagar, Bengaluru, Karnataka -560038';

function H({ children }) {
  return <Typography variant="h3" component="h2" sx={{ color: brand.navy, fontSize: { xs: '1.6rem', md: '1.9rem' }, mt: 5, mb: 1.2 }}>{children}</Typography>;
}
function H3({ children }) {
  return <Typography component="h3" sx={{ color: brand.navy, fontWeight: 600, fontSize: '1.1rem', mt: 2.5, mb: 0.8 }}>{children}</Typography>;
}
function P({ children }) {
  return <Typography sx={{ color: '#2a3a72', mb: 1.5 }}>{children}</Typography>;
}
function UL({ items }) {
  return (
    <Box component="ul" sx={{ pl: 2.5, color: '#2a3a72', mt: 0, '& li': { mb: 1 } }}>
      {items.map((i) => <li key={typeof i === 'string' ? i : i[0]}>{typeof i === 'string' ? i : <><strong>{i[0]}:</strong> {i[1]}</>}</li>)}
    </Box>
  );
}
function Contact() {
  return (
    <>
      <H>Contact Us</H>
      <Box sx={{ background: '#fff', border: '1px solid rgba(10,35,120,.1)', borderRadius: '14px', p: { xs: 2.5, md: 3 }, color: '#2a3a72', lineHeight: 1.9 }}>
        <Typography sx={{ fontWeight: 600, color: brand.navy }}>Bretlyn Global Private Limited</Typography>
        <Typography>Brand: Bretlyn Coffee</Typography>
        <Typography>Email: <a href={`mailto:${LEGAL_EMAIL}`}><u>{LEGAL_EMAIL}</u></a></Typography>
        <Typography>Address: {LEGAL_ADDRESS}</Typography>
      </Box>
    </>
  );
}

function LegalLayout({ title, children }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <Box component="section" sx={{ background: brand.cream, py: { xs: 7, md: 10 } }}>
        <Container><Box sx={{ maxWidth: 820 }}>
          <Typography sx={{ color: brand.royal, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', fontSize: '.9rem', mb: 2 }}>
            Last updated: November 2026
          </Typography>
          {children}
        </Box></Container>
      </Box>
    </>
  );
}

export function Privacy() {
  usePageMeta('Privacy Policy — Bretlyn Coffee', 'How Bretlyn Global Private Limited collects, uses, processes, stores, shares and safeguards your personal information.');
  return (
    <LegalLayout title="Privacy Policy">
      <P>Welcome to the Privacy Policy of Bretlyn Coffee, owned, managed, and operated by Bretlyn Global Private Limited (“Bretlyn Coffee”, “we”, “our”, or “us”).</P>
      <P>This Privacy Policy outlines how Bretlyn Global Private Limited collects, uses, processes, stores, shares, and safeguards your personal information when you visit our website, https://bretlyn.com, or access and use any of our associated products, features, and services (collectively referred to as the “Services”).</P>
      <P>We are committed to protecting your privacy and ensuring the responsible handling of your personal data. Accordingly, we process personal data in compliance with applicable Indian data protection and privacy laws, including the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023, along with the rules and regulations applicable thereunder, as in force from time to time.</P>

      <H>Information we collect</H>
      <H3>Information you provide</H3>
      <UL items={[
        ['Contact details', 'name, email address, and phone number.'],
        ['Order details', 'items ordered, transaction details, and information required to process your orders.'],
        ['Communications', 'enquiries, feedback, reviews, and customer support requests.'],
      ]} />
      <H3>Information collected automatically</H3>
      <UL items={[
        ['Device & usage data', 'IP address, browser type, device information, and pages visited.'],
        ['Cookies', 'to remember preferences, support essential website functions, and understand website usage.'],
      ]} />
      <H3>Payment information</H3>
      <P>Payments may be processed through third-party payment providers. We may retain limited transaction details for order management, accounting, and legal purposes.</P>

      <H>How we use your information</H>
      <P>We use your information to:</P>
      <UL items={[
        'Process and manage orders and payments.',
        'Respond to enquiries and provide customer support.',
        'Improve our website, products, and services.',
        'Maintain business and transaction records.',
        'Prevent fraud, protect our services, and meet legal obligations.',
        'Send promotional updates and offers where permitted by law and, where required, with your consent.',
      ]} />

      <H>Cookies and marketing</H>
      <P>We use cookies and similar technologies to support website functionality, remember preferences, and analyse website performance. You can manage cookies through your browser settings.</P>
      <P>You can opt out of promotional communications at any time by following the unsubscribe instructions or contacting us.</P>

      <H>How we share your information</H>
      <P>We do not sell your personal information. We may share relevant information with:</P>
      <UL items={[
        ['Service providers', 'payment processors, website hosting providers, analytics providers, and customer support partners.'],
        ['Legal authorities', 'where required by law or to protect our legal rights.'],
        ['Business transfers', 'in connection with a merger, acquisition, or business reorganisation.'],
      ]} />

      <H>Data retention and security</H>
      <P>We retain personal information only as long as necessary to provide our services, maintain business records, comply with legal obligations, and resolve disputes.</P>
      <P>We use reasonable technical and organisational measures to protect your information against unauthorised access, disclosure, alteration, or loss. However, no electronic transmission or storage method is completely secure.</P>

      <H>Your privacy rights</H>
      <P>Subject to applicable law, you may:</P>
      <UL items={[
        'Request access to your personal information.',
        'Request correction or deletion of your information.',
        'Withdraw consent where processing is based on consent.',
        'Opt out of promotional communications.',
        'Exercise other rights available under applicable data protection laws.',
      ]} />

      <H>Third-party websites</H>
      <P>Our website may contain links to third-party websites or services. We are not responsible for their privacy practices and encourage you to review their respective privacy policies.</P>

      <H>Children&apos;s privacy</H>
      <P>Our Services are not intended to knowingly collect personal information from children in circumstances prohibited by applicable law. We handle children&apos;s personal data in accordance with applicable legal requirements.</P>

      <H>Changes to this Policy</H>
      <P>We may update this Privacy Policy from time to time to reflect changes in our business practices, services, or legal requirements. Updated versions will be published on our website with a revised effective date.</P>

      <Contact />
    </LegalLayout>
  );
}

export function Terms() {
  usePageMeta('Terms & Conditions — Bretlyn Coffee', 'Terms and conditions governing your use of the Bretlyn Coffee website, stores and related services.');
  return (
    <LegalLayout title={<>Terms &amp; Conditions</>}>
      <P>Welcome to Bretlyn Coffee. These Terms &amp; Conditions (“Terms”) govern your access to and use of our website, stores, and related services (“Services”), operated by Bretlyn Global Private Limited (“Company”, “Bretlyn Coffee”, “we”, “us”, or “our”).</P>
      <P>By accessing our website, visiting our stores, or placing an order through our authorised platforms, you agree to these Terms and applicable laws. We reserve the right to update these Terms from time to time. Continued use of our Services constitutes acceptance of the revised Terms.</P>

      <H>Use of Our Services</H>
      <P>You agree to use our website and Services only for lawful purposes. You must not attempt unauthorised access, introduce malicious software, misuse website information, or engage in activities that may disrupt our Services or infringe the rights of others.</P>

      <H>Products, Pricing &amp; Availability</H>
      <P>Bretlyn Coffee offers specialty coffee, beverages, and related food items through our stores and authorised third-party platforms. Product availability, ingredients, menu items, presentation, and prices may vary by location and time. Prices and applicable taxes will be displayed at our stores or on the relevant ordering platform. We reserve the right to update prices, products, and availability, subject to applicable law and confirmed orders.</P>

      <H>Orders &amp; Payments</H>
      <P>Orders can be placed directly at our stores or through authorised third-party platforms. All orders are subject to product availability and confirmation. In-store payments must be made using accepted payment methods, while platform orders are processed by the respective platform. We reserve the right to refuse or cancel orders for valid reasons, including product unavailability, pricing errors, or suspected fraud.</P>

      <H>Cancellations &amp; Refunds</H>
      <P>Our beverages and food items are freshly prepared to order, so cancellations are generally not accepted once preparation has started. If you receive an incorrect order or experience a quality issue, please inform our store team immediately for a suitable resolution. Approved refunds will generally be processed through the original payment method. Orders placed through third-party platforms are subject to their respective cancellation and refund policies. You may also contact us at <a href={`mailto:${LEGAL_EMAIL}`}><u>{LEGAL_EMAIL}</u></a> for assistance.</P>

      <H>Website Information &amp; Accuracy</H>
      <P>We make reasonable efforts to ensure that the information on our website is accurate and up to date. However, product descriptions, images, menu details, prices, and promotional information may occasionally contain errors or omissions. We reserve the right to correct inaccuracies and update website content as necessary.</P>

      <H>Intellectual Property</H>
      <P>All content on our website, including the Bretlyn Coffee name, logos, text and related images are owned by or licensed to Bretlyn Global Private Limited and protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or commercially use our content without prior written permission.</P>

      <H>Third-Party Services</H>
      <P>Our Services may include links or integrations with third-party platforms, including delivery and payment providers. These services operate independently and are governed by their own terms and privacy policies. We are not responsible for their content or practices, subject to our obligations under applicable law.</P>

      <H>Limitation of Liability</H>
      <P>We make reasonable efforts to keep our website accessible and secure but do not guarantee uninterrupted or error-free access. To the extent permitted by applicable law, Bretlyn Global Private Limited shall not be liable for indirect or consequential losses arising from the use of, or inability to access, our website or Services. Nothing in these Terms limits any rights or liabilities that cannot legally be excluded.</P>

      <H>Privacy</H>
      <P>Your use of our Services is also governed by our <RouterLink to="/privacy-policy"><u>Privacy Policy</u></RouterLink>, which explains how we collect, use, and protect your personal information. By using our Services, you acknowledge the practices described in that policy.</P>

      <H>Governing Law</H>
      <P>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or our Services shall be resolved by the competent courts or authorities in accordance with applicable laws.</P>

      <Contact />
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
