"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from 'next/link';
import { Sparkles, Music, Users, Star, Heart, Zap, Feather, Wind, Lightbulb, Mail } from 'lucide-react';

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Dance with Passion, Move with Purpose"
          description="Join I-balnik dance school and discover your inner artist. Professional instruction in ballet, contemporary, hip-hop, and more for all ages and skill levels."
          tag="Start Your Journey Today"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937049543-7bdoou7r.jpg"
          imageAlt="Professional dancers performing"
          frameStyle="card"
          buttons={[
            { text: "Explore Classes", href: "/classes" },
            { text: "Contact Us", href: "/contact" }
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

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Students Say"
          description="Hear from dancers who have discovered their passion and grown with I-balnik. Their stories inspire us to continue creating transformative dance experiences."
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Emma Sullivan",
              role: "Student",
              company: "Ballet Program",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937060074-18rq9zef.jpg",
              imageAlt: "Emma Sullivan"
            },
            {
              id: "2",
              name: "Lucas Torres",
              role: "Student",
              company: "Contemporary Class",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937061093-ox5vz53m.jpg",
              imageAlt: "Lucas Torres"
            },
            {
              id: "3",
              name: "Priya Kapoor",
              role: "Student",
              company: "Hip-Hop Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937062048-6322477t.jpg",
              imageAlt: "Priya Kapoor"
            },
            {
              id: "4",
              name: "Marcus Williams",
              role: "Student",
              company: "Jazz Class",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764937062920-li3lbq2n.jpg",
              imageAlt: "Marcus Williams"
            }
          ]}
          textboxLayout="default"
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