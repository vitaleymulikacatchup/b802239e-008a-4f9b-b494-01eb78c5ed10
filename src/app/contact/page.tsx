"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="I-balnik"
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Classes", id: "/classes" },
            { name: "Contact", id: "/contact" }
          ]}
        />
        <div className="hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/classes">Classes</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Mail}
          title="Join I-balnik Today"
          description="Ready to begin your dance journey? Subscribe to our mailing list for updates on new classes, special events, and exclusive dance tips. We can't wait to meet you on the dance floor!"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937064183-p8dhsq2q.jpg"
          imageAlt="Dance studio with mirrors and lights"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Join Now"
          termsText="We respect your privacy and will never share your information. Unsubscribe anytime."
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Find answers to frequently asked questions about our classes, schedules, and enrollment process."
          faqs={[
            {
              id: "1",
              title: "What age groups do you teach?",
              content: "We offer classes for children ages 4 and up, teenagers, and adults. Each age group has specialized classes tailored to their development and interests."
            },
            {
              id: "2",
              title: "Do I need prior dance experience?",
              content: "No experience necessary! We have beginner-friendly classes for all skill levels. Our instructors welcome dancers at any stage of their journey."
            },
            {
              id: "3",
              title: "What are your class schedules?",
              content: "We offer classes throughout the week with various time slots including evenings and weekends. Check our schedule page for current offerings and enrollment."
            },
            {
              id: "4",
              title: "How do I enroll in a class?",
              content: "Visit our Contact page to inquire about availability and complete your enrollment. Our team will guide you through the process and answer any questions."
            }
          ]}
          textPosition="left"
          animationType="smooth"
          showCard={true}
        />
      </div>

      <FooterBaseReveal
        copyrightText="© 2025 I-balnik Dance School. All rights reserved."
        columns={[
          {
            title: "Studio",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Our Classes", href: "/classes" },
              { label: "Contact", href: "/contact" }
            ]
          },
          {
            title: "Resources",
            items: [
              { label: "Schedule", href: "#" },
              { label: "Testimonials", href: "/" },
              { label: "FAQ", href: "#" }
            ]
          },
          {
            title: "Connect",
            items: [
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" }
            ]
          }
        ]}
      />
    </ThemeProvider>
  );
}