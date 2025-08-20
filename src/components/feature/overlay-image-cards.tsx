"use client";

import {
  ArrowUpRight,
  Camera,
  Brain,
  MessageCircle,
  Heart,
} from "lucide-react";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const teamFeatures = [
  {
    id: 1,
    icon: Camera,
    title: "Real-Time Emotion Detection",
    description:
      "Advanced AI analyzes facial expressions to understand your emotional state during learning",
    href: "#",
  },
  {
    id: 2,
    icon: Brain,
    title: "Adaptive Content Delivery",
    description:
      "Content automatically adjusts complexity, style, and pace based on your emotions and comprehension",
    href: "#",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "AI Tutor Integration",
    description:
      "ChatGPT-powered tutor provides personalized explanations adapted to your emotional state",
    href: "#",
  },
  {
    id: 4,
    icon: Heart,
    title: "Mindfulness & Wellness",
    description: "Detects fatigue and stress, suggesting breathing exercises and micro-breaks",
    href: "#",
  },
];

const OverlayImageCards = () => {
  return (
    <section className="overflow-hidden bg-background py-32">
      <div className="container">
        <div className="relative">
          <header className="mb-15 max-w-2xl">
            <h1 className="mb-8 text-5xl font-bold tracking-tighter text-foreground lg:text-7xl">
              Comprehensive Learning Intelligence
            </h1>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
              Every aspect of EduPulse is designed to understand and adapt to your learning needs in real-time.
            </p>
          </header>
          <div className="absolute bottom-0 right-0 hidden transition-all ease-in-out group-hover:-rotate-0 lg:block">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop&crop=faces"
              className="w-[30rem] aspect-video "
              alt="EduPulse emotion detection interface preview"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {teamFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <a
                key={feature.id}
                href={feature.href}
                className="block transition-all duration-500 ease-in-out"
              >
                <Card className="group relative rounded-none! border border-border bg-background p-6 shadow-none transition-all duration-500 ease-in-out hover:bg-linear-to-l hover:from-transparent hover:to-muted">
                  <CardContent className="flex h-full flex-col justify-between p-0">
                    <div className="flex size-15 items-center justify-center border border-border bg-muted transition-colors duration-500 ease-in-out group-hover:border-transparent">
                      <Icon
                        size={30}
                        className="transition-all duration-500 ease-in-out"
                      />
                    </div>

                    <h3 className="mt-4 text-xl leading-tight font-semibold tracking-tight text-foreground transition-all duration-500 ease-in-out md:text-2xl lg:pr-30 lg:text-3xl">
                      {feature.title}
                    </h3>

                    <div className="absolute right-6 bottom-6 flex size-12 items-center justify-center border border-border bg-muted-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                      <ArrowUpRight className="h-[27px] w-[27px] text-foreground transition-all duration-500 ease-in-out group-hover:rotate-45" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { OverlayImageCards };