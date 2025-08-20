"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Heart, Coffee, Target } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const items = [
  {
    title: (
      <>
        Engaged State
        <br />
        Interface
      </>
    ),
    description: (
      <>
        <p>
          When EduPulse detects high engagement, the interface adapts to provide advanced challenges:
        </p>
        <ul className="my-4 ml-6 list-disc">
          <li>Complex problem sets and deeper explanations</li>
          <li>Interactive simulations and advanced concepts</li>
          <li>Accelerated pacing with bonus materials</li>
        </ul>
        <p>The AI recognizes enthusiasm and pushes learning boundaries.</p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Engaged State",
    icon: <Target className="w-5 h-5" />,
    emotionColor: "bg-green-500",
  },
  {
    title: (
      <>
        Confused State
        <br />
        Interface
      </>
    ),
    description: (
      <>
        <p>
          When confusion is detected, EduPulse immediately simplifies and clarifies:
        </p>
        <ul className="my-4 ml-6 list-disc">
          <li>Step-by-step breakdowns with visual aids</li>
          <li>Alternative explanations and examples</li>
          <li>Interactive hints and guided practice</li>
        </ul>
        <p>Smart scaffolding ensures no learner gets left behind.</p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Confused State",
    icon: <Brain className="w-5 h-5" />,
    emotionColor: "bg-yellow-500",
  },
  {
    title: (
      <>
        Tired State
        <br />
        Interface
      </>
    ),
    description: (
      <>
        <p>
          When fatigue is detected, EduPulse prioritizes wellbeing and recovery:
        </p>
        <ul className="my-4 ml-6 list-disc">
          <li>Mindfulness breaks with breathing exercises</li>
          <li>Calming color schemes and reduced cognitive load</li>
          <li>Light review activities and positive reinforcement</li>
        </ul>
        <p>Supporting mental health for sustainable learning habits.</p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Tired State",
    icon: <Coffee className="w-5 h-5" />,
    emotionColor: "bg-blue-400",
  },
  {
    title: (
      <>
        Focused State
        <br />
        Interface
      </>
    ),
    description: (
      <>
        <p>
          When deep focus is detected, EduPulse creates optimal learning conditions:
        </p>
        <ul className="my-4 ml-6 list-disc">
          <li>Distraction-free interface with minimal UI elements</li>
          <li>Deep dive content with comprehensive explanations</li>
          <li>Extended learning sessions with flow state support</li>
        </ul>
        <p>Maximizing learning potential during peak concentration moments.</p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Focused State",
    icon: <Heart className="w-5 h-5" />,
    emotionColor: "bg-purple-500",
  },
];

const TabControlledGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(items[0].category);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const currentIndex = items.findIndex((item) => item.category === current);
    const activeTab = tabRefs.current[currentIndex];

    if (activeTab) {
      const { offsetWidth, offsetLeft } = activeTab;
      setIndicatorStyle({
        width: offsetWidth,
        left: offsetLeft,
      });
    }
  }, [current]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const currentIndex = items.findIndex((item) => item.category === current);
    api.scrollTo(currentIndex);

    const onSelect = () => {
      const idx = api.selectedScrollSnap();
      setCurrent(items[idx].category);
    };
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, current]);

  return (
    <section className="overflow-hidden py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Adaptive Learning Interface
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how EduPulse's AI detects emotional states and instantly adapts the learning experience for optimal engagement and comprehension.
          </p>
        </div>
        
        <Carousel
          setApi={setApi}
          className="[&>div[data-slot=carousel-content]]:overflow-visible"
        >
          <div className="flex items-center justify-between">
            <Tabs
              value={current}
              onValueChange={setCurrent}
              className="mb-8 flex justify-center"
            >
              <TabsList className="relative h-auto gap-6 bg-background">
                {items.map((item, idx) => (
                  <TabsTrigger
                    key={idx}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    value={item.category}
                    className="text-base transition-all duration-700 ease-out [&[data-state=active]]:shadow-none flex items-center gap-2"
                  >
                    {item.icon}
                    {item.category}
                  </TabsTrigger>
                ))}
                <div
                  className="absolute bottom-0 h-0.5 bg-primary transition-all duration-700 ease-out"
                  style={{
                    width: `${indicatorStyle.width}px`,
                    left: `${indicatorStyle.left}px`,
                  }}
                />
              </TabsList>
            </Tabs>
            <div className="hidden items-center gap-4 sm:flex">
              <CarouselPrevious className="static size-10 translate-0" />
              <CarouselNext className="static size-10 translate-0" />
            </div>
          </div>
          <CarouselContent className="max-w-4xl">
            {items.map((item, idx) => (
              <CarouselItem key={idx} className="w-fit max-w-4xl">
                <div className="relative grid h-full max-w-4xl gap-0 rounded-xl border border-border shadow-sm select-none md:max-h-[450px] md:grid-cols-2 overflow-hidden">
                  <div className="flex flex-col justify-between gap-4 p-6 sm:p-10">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-3 h-3 rounded-full ${item.emotionColor} animate-pulse`}></div>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          Emotion Detected
                        </span>
                      </div>
                      <h2 className="text-2xl font-medium sm:text-4xl">
                        {item.title}
                      </h2>
                      <div className="mt-4 text-sm text-muted-foreground sm:mt-6">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full min-h-[300px] md:min-h-[450px]">
                    <img
                      src={item.image}
                      alt={`EduPulse interface adapting to ${item.category.toLowerCase()}`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Emotion detection overlay */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${item.emotionColor}`}></div>
                        <span className="text-xs font-medium text-gray-700">
                          {item.category} Detected
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Adapting interface...
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { TabControlledGallery };