import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Button,
  Section,
  Img,
  Row,
  Column,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface ShareBroadcastEmailProps {
  websiteUrl: string
  logoUrl: string
}

export const ShareBroadcastEmail = ({
  websiteUrl,
  logoUrl,
}: ShareBroadcastEmailProps) => (
  <Html>
    <Head />
    <Preview>Help us spread the word about Theta - The future of digital content is here! 🚀</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header with Logo */}
        <Section style={header}>
          <Img
            src={logoUrl}
            width="120"
            height="40"
            alt="Theta Logo"
            style={logo}
          />
        </Section>

        {/* Hero Section */}
        <Section style={heroSection}>
          <div style={gradientBox}>
            <Heading style={mainHeading}>
              🌟 Help Us Build the Future of Content! 🌟
            </Heading>
            <Text style={heroText}>
              Theta is revolutionizing how we consume digital content - from ebooks to audiobooks, podcasts to multimedia libraries. 
            </Text>
          </div>
        </Section>

        {/* Main Content */}
        <Section style={contentSection}>
          <Text style={bodyText}>
            We're building something amazing, and we need <strong>your help</strong> to spread the word! 🎯
          </Text>

          <div style={featureBox}>
            <Text style={featureTitle}>🚀 What makes Theta special?</Text>
            <Text style={featureText}>
              • Seamless switching between reading and listening<br/>
              • AI-powered content discovery<br/>
              • Synchronized progress across all formats<br/>
              • Revolutionary multimedia library experience
            </Text>
          </div>

          <Text style={bodyText}>
            <strong>Here's how you can help us grow:</strong>
          </Text>

          <div style={actionBox}>
            <Text style={actionText}>
              📱 Share with your friends, family, and social networks<br/>
              💬 Post in your Discord servers and Telegram groups<br/>
              🔄 Repost on Twitter, Instagram, and LinkedIn<br/>
              📧 Forward this email to anyone who loves digital content
            </Text>
          </div>

          {/* CTA Buttons */}
          <Row style={buttonRow}>
            <Column align="center">
              <Button
                href={`https://twitter.com/intent/tweet?text=Just discovered Theta - the future of digital content consumption! 🚀 Seamless reading/listening experience with AI-powered discovery. Join the waitlist: ${websiteUrl}`}
                style={twitterButton}
              >
                🐦 Share on Twitter
              </Button>
            </Column>
          </Row>

          <Row style={buttonRow}>
            <Column align="center">
              <Button
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${websiteUrl}`}
                style={linkedinButton}
              >
                💼 Share on LinkedIn
              </Button>
            </Column>
          </Row>

          <Row style={buttonRow}>
            <Column align="center">
              <Button
                href={websiteUrl}
                style={primaryButton}
              >
                🌟 Visit Theta Universe
              </Button>
            </Column>
          </Row>

          {/* Share Link */}
          <div style={shareLinkBox}>
            <Text style={shareLinkTitle}>📎 Direct Link to Share:</Text>
            <Link href={websiteUrl} style={shareLink}>
              {websiteUrl}
            </Link>
            <Text style={copyText}>
              Copy and paste this link anywhere! 🔗
            </Text>
          </div>

          {/* Call to Action */}
          <div style={ctaBox}>
            <Text style={ctaText}>
              Every share helps us reach more content lovers like you. Together, we're building the next generation of digital content consumption! 💜
            </Text>
            <Text style={thanksText}>
              Thank you for being part of our journey! 🙏
            </Text>
          </div>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            With love from the{' '}
            <Link href={websiteUrl} style={footerLink}>
              Theta Universe Team
            </Link>{' '}
            💜✨
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default ShareBroadcastEmail

// Styles matching the Theta website theme
const main = {
  backgroundColor: '#191919', // --background
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  color: '#ffffff', // --foreground
}

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
}

const header = {
  textAlign: 'center' as const,
  marginBottom: '30px',
}

const logo = {
  margin: '0 auto',
}

const heroSection = {
  marginBottom: '30px',
}

const gradientBox = {
  background: 'linear-gradient(135deg, #bc46ea, #bc46ea, #f3ae1a)', // --gradient-primary
  borderRadius: '20px',
  padding: '30px',
  textAlign: 'center' as const,
}

const mainHeading = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 15px 0',
  textAlign: 'center' as const,
}

const heroText = {
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0',
  textAlign: 'center' as const,
}

const contentSection = {
  marginBottom: '30px',
}

const bodyText = {
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 20px 0',
}

const featureBox = {
  background: 'rgba(188, 70, 234, 0.1)', // primary with opacity
  borderRadius: '12px',
  padding: '20px',
  margin: '20px 0',
  border: '1px solid rgba(188, 70, 234, 0.3)',
}

const featureTitle = {
  color: '#bc46ea', // --primary
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
}

const featureText = {
  color: '#ffffff',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0',
}

const actionBox = {
  background: 'rgba(243, 174, 26, 0.1)', // accent-create with opacity
  borderRadius: '12px',
  padding: '20px',
  margin: '20px 0',
  border: '1px solid rgba(243, 174, 26, 0.3)',
}

const actionText = {
  color: '#ffffff',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0',
}

const buttonRow = {
  margin: '15px 0',
}

const primaryButton = {
  background: 'linear-gradient(135deg, #bc46ea, #f3ae1a)', // --gradient-cta
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '25px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  border: 'none',
  display: 'inline-block',
}

const twitterButton = {
  background: '#1DA1F2',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '20px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '14px',
  border: 'none',
  display: 'inline-block',
}

const linkedinButton = {
  background: '#0077B5',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '20px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '14px',
  border: 'none',
  display: 'inline-block',
}

const shareLinkBox = {
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '12px',
  padding: '20px',
  margin: '25px 0',
  textAlign: 'center' as const,
}

const shareLinkTitle = {
  color: '#bc46ea',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
}

const shareLink = {
  color: '#f3ae1a',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'underline',
  wordBreak: 'break-all' as const,
}

const copyText = {
  color: '#ffffff',
  fontSize: '12px',
  margin: '10px 0 0 0',
  opacity: 0.7,
}

const ctaBox = {
  textAlign: 'center' as const,
  margin: '30px 0',
  padding: '20px',
  background: 'rgba(188, 70, 234, 0.05)',
  borderRadius: '15px',
}

const ctaText = {
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 15px 0',
}

const thanksText = {
  color: '#bc46ea',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
}

const footer = {
  textAlign: 'center' as const,
  marginTop: '40px',
  paddingTop: '20px',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}

const footerText = {
  color: '#ffffff',
  fontSize: '14px',
  opacity: 0.7,
  margin: '0',
}

const footerLink = {
  color: '#bc46ea',
  textDecoration: 'underline',
}