"use client";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Zap, Feather, Wind, Music, Lightbulb } from 'lucide-react';

export default function ClassesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="noiseDiagonalGradient"
      cardStyle="shadow-colored"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="I-balnik"
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Classes", id: "classes" },
            { name: "Team", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
        />
      </div>

      <div id="classes" data-section="classes">
        <FeatureCardFive
          title="Our Dance Classes"
          description="Explore our diverse range of dance styles designed for every age and experience level. Each class is crafted to challenge, inspire, and celebrate the dancer within you."
          tag="Classes"
          tagIcon={Zap}
          features={[
            { title: "Ballet", icon: Feather },
            { title: "Contemporary", icon: Wind },
            { title: "Hip-Hop", icon: Music },
            { title: "Jazz", icon: Lightbulb }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          showIconBoxBackground={true}
        />
      </div>

      <FooterBaseReveal
        copyrightText="© 2025 I-balnik Dance School. All rights reserved."
        columns={[
          {
            title: "Studio",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Our Classes", href: "classes" },
              { label: "Meet Our Team", href: "/about" }
            ]
          },
          {
            title: "Resources",
            items: [
              { label: "Schedule", href: "#" },
              { label: "Testimonials", href: "/" },
              { label: "FAQ", href: "/contact" }
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