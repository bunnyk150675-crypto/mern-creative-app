import { GraduationCap } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    logo: {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/university.svg",
      alt: "Lincoln Elementary School logo",
      width: 58,
      height: 22,
    },
    quote:
      "EduPulse helped us identify when students were struggling before they even raised their hands. Engagement increased by 40%.",
    author: {
      name: "Maria González",
      role: "Principal, Lincoln Elementary School",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Maria%20González",
    },
  },
  {
    logo: {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/graduation.svg",
      alt: "University of California logo",
      width: 54,
      height: 22,
    },
    quote:
      "The emotional intelligence insights transformed how we deliver online courses. Students report feeling more supported.",
    author: {
      name: "Dr. Robert Chen",
      role: "Professor of Education, University of California",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Robert%20Chen",
    },
  },
  {
    logo: {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/academic.svg",
      alt: "Special Needs Learning Center logo",
      width: 60,
      height: 22,
    },
    quote:
      "Finally, technology that understands our students' unique emotional needs. Game-changing for personalized education.",
    author: {
      name: "Sarah Williams",
      role: "Special Education Director, Special Needs Learning Center",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah%20Williams",
    },
  },
  {
    logo: {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/school.svg",
      alt: "Riverside High School logo",
      width: 66,
      height: 22,
    },
    quote:
      "EduPulse's real-time emotion detection has revolutionized classroom dynamics. Our teachers can now provide immediate support when students need it most.",
    author: {
      name: "Jennifer Martinez",
      role: "Vice Principal, Riverside High School",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jennifer%20Martinez",
    },
  },
  {
    logo: {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/library.svg",
      alt: "Metro Community College logo",
      width: 58,
      height: 22,
    },
    quote:
      "The analytics dashboard gives us unprecedented insights into student engagement patterns. We've improved course completion rates by 35%.",
    author: {
      name: "Dr. Michael Thompson",
      role: "Dean of Student Success, Metro Community College",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Michael%20Thompson",
    },
  },
  {
    logo: {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/academy.svg",
      alt: "Greenwood Academy logo",
      width: 58,
      height: 22,
    },
    quote:
      "Our students with learning differences have shown remarkable improvement with EduPulse's adaptive learning features. It's truly transformative.",
    author: {
      name: "Lisa Rodriguez",
      role: "Director of Academic Support, Greenwood Academy",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Lisa%20Rodriguez",
    },
  },
];

const CompanyLogoTestimonials = () => {
  return (
    <section className="py-32 bg-background">
      <div className="border-y">
        <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl font-[var(--font-display)]">
            What educators are saying
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Trusted by educational institutions who are transforming learning experiences with emotion-aware technology
          </p>
        </div>
      </div>

      <div className="container mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col gap-6 rounded-md bg-background p-6 shadow-sm border-border"
          >
            <img
              src={testimonial.logo.src}
              alt={testimonial.logo.alt}
              width={testimonial.logo.width}
              height={testimonial.logo.height}
              className="object-contain dark:invert"
            />

            <blockquote className="text-muted-foreground text-lg font-normal italic">{`"${testimonial.quote}"`}</blockquote>

            <div className="mt-auto flex items-center gap-4">
              <img
                src={testimonial.author.image}
                alt={`${testimonial.author.name}'s profile picture`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-lg tracking-[-0.36px] font-[var(--font-display)]">
                  {testimonial.author.name}
                </p>
                <p className="text-muted-foreground">
                  {testimonial.author.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { CompanyLogoTestimonials };