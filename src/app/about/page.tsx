"use client";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Users, Music, Star, Heart } from 'lucide-react';

export default function AboutPage() {
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
            { name: "About", id: "about" },
            { name: "Classes", id: "/classes" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "/contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We believe in the transformative power of dance. Our mission is to nurture creativity, build confidence, and create a supportive community where every dancer can flourish and express their unique artistry."
          features={[
            {
              icon: Music,
              title: "Expert Instruction",
              description: "Learn from experienced choreographers and professional dancers who bring years of expertise and passion to every class."
            },
            {
              icon: Users,
              title: "Welcoming Community",
              description: "Join a supportive environment where dancers of all backgrounds and abilities feel valued and encouraged to grow together."
            },
            {
              icon: Star,
              title: "Diverse Styles",
              description: "Choose from ballet, contemporary, hip-hop, jazz, and more. We offer something for every dancer's interests and goals."
            },
            {
              icon: Heart,
              title: "Artistic Growth",
              description: "Develop not just technique, but also creativity and self-expression through our comprehensive dance programs."
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Instructors"
          description="Our team of passionate dance professionals brings expertise, creativity, and dedication to every class. Get to know the artists guiding your dance journey."
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marina Volkov",
              role: "Ballet Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937055206-44na6etv.jpg",
              imageAlt: "Marina Volkov, Ballet Director"
            },
            {
              id: "2",
              name: "Alex Chen",
              role: "Contemporary Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937056793-msl2yqi2.jpg",
              imageAlt: "Alex Chen, Contemporary Lead"
            },
            {
              id: "3",
              name: "James Rodriguez",
              role: "Hip-Hop Choreographer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937057857-abry10k3.jpg",
              imageAlt: "James Rodriguez, Hip-Hop Choreographer"
            },
            {
              id: "4",
              name: "Sofia Mendez",
              role: "Jazz Instructor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937058673-f9bf9bmd.jpg",
              imageAlt: "Sofia Mendez, Jazz Instructor"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <FooterBaseReveal
        copyrightText="© 2025 I-balnik Dance School. All rights reserved."
        columns={[
          {
            title: "Studio",
            items: [
              { label: "About Us", href: "about" },
              { label: "Our Classes", href: "/classes" },
              { label: "Meet Our Team", href: "team" }
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