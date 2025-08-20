"use client";

import { type SVGProps, useId } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FAQ_ITEMS = [
  {
    category: "PRIVACY & SECURITY",
    items: [
      {
        question: "How is facial data stored and protected?",
        answer:
          "EduPulse processes facial expressions in real-time without storing biometric data. All emotion detection happens locally on-device, and only aggregated learning insights are securely transmitted using end-to-end encryption.",
      },
      {
        question: "Is EduPulse compliant with COPPA for younger students?",
        answer:
          "Yes, EduPulse is fully COPPA-compliant. We have specific privacy controls for students under 13, including parental consent mechanisms and enhanced data protection measures designed for educational environments.",
      },
      {
        question: "What encryption methods protect student data?",
        answer:
          "We use industry-standard AES-256 encryption for all data transmission and storage. Our platform meets SOC 2 Type II and FERPA compliance standards with regular security audits and penetration testing.",
      },
      {
        question: "How long is student data retained?",
        answer:
          "Learning analytics are retained for the duration of the academic program plus one additional year for progress tracking. Raw facial data is never stored, and all identifiable information can be deleted upon request.",
      },
    ],
  },
  {
    category: "EMOTION DETECTION",
    items: [
      {
        question: "How accurate is the emotion detection technology?",
        answer:
          "Our AI achieves 94% accuracy in detecting core learning emotions like confusion, engagement, and frustration. The system continuously improves through machine learning and adapts to individual student patterns over time.",
      },
      {
        question: "What emotions can EduPulse detect and respond to?",
        answer:
          "EduPulse identifies key learning states including engagement, confusion, frustration, boredom, curiosity, and confidence. The system recognizes over 15 distinct emotional indicators that impact learning effectiveness.",
      },
      {
        question: "Does emotion detection work in different lighting conditions?",
        answer:
          "Yes, our advanced computer vision works in various lighting conditions from dim classrooms to bright outdoor settings. The system automatically adjusts sensitivity and uses infrared technology when needed.",
      },
      {
        question: "Is there a calibration process for new students?",
        answer:
          "EduPulse includes a brief 2-minute calibration session that learns each student's unique facial expressions. This personalized baseline ensures maximum accuracy for individual emotion detection.",
      },
    ],
  },
  {
    category: "TECHNICAL SETUP",
    items: [
      {
        question: "What are the minimum system requirements?",
        answer:
          "EduPulse requires a device with a webcam, modern browser (Chrome, Firefox, Safari), and internet connection. Minimum specs: 4GB RAM, dual-core processor, and 720p camera resolution.",
      },
      {
        question: "What camera specifications are needed?",
        answer:
          "A standard 720p webcam is sufficient, though 1080p provides optimal results. Most laptop cameras, external USB cameras, and tablet front-facing cameras work seamlessly with EduPulse.",
      },
      {
        question: "Can EduPulse integrate with our existing LMS?",
        answer:
          "Yes, EduPulse integrates with popular learning management systems including Canvas, Blackboard, Google Classroom, and Moodle through our comprehensive API and single sign-on capabilities.",
      },
      {
        question: "Does EduPulse work offline?",
        answer:
          "EduPulse offers limited offline functionality for downloaded content and locally cached lessons. Full emotion detection and adaptive features require internet connectivity for optimal performance.",
      },
    ],
  },
  {
    category: "EDUCATIONAL IMPACT",
    items: [
      {
        question: "What age groups can benefit from EduPulse?",
        answer:
          "EduPulse is designed for students ages 6-18, with specialized interfaces for elementary (6-11), middle school (12-14), and high school (15-18) learners. Each age group has tailored emotion detection algorithms.",
      },
      {
        question: "Is EduPulse compatible with all subjects?",
        answer:
          "EduPulse works across all subjects including STEM, language arts, social studies, and creative arts. The adaptive learning algorithms adjust content difficulty and presentation style regardless of subject matter.",
      },
      {
        question: "How does EduPulse support students with special needs?",
        answer:
          "Our platform includes accessibility features like adjustable sensitivity settings, alternative input methods, and specialized emotion recognition for students with autism, ADHD, and other learning differences.",
      },
      {
        question: "What training do teachers need to use EduPulse effectively?",
        answer:
          "Teachers receive comprehensive onboarding including a 2-hour initial training session, ongoing webinars, and access to our teacher resource center. Most educators become proficient within their first week of use.",
      },
    ],
  },
];

export function CategoryCardFaqs() {
  return (
    <section className="relative py-32 bg-background">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl font-[var(--font-display)]">
            Everything You Need to Know About EduPulse
          </h1>
          <p className="mt-4 text-2xl text-muted-foreground md:text-3xl">
            Get answers to your most common questions
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl space-y-12 md:mt-12 lg:mt-20">
          {FAQ_ITEMS.map((category) => (
            <Card key={category.category} className="border-hidden bg-muted">
              <CardHeader className="pb-0">
                <h3 className="border-b pb-4 font-mono text-sm font-medium tracking-widest text-accent-foreground uppercase">
                  {category.category}
                </h3>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${category.category}-${i}`}
                      className="border-b border-muted last:border-0"
                    >
                      <AccordionTrigger className="text-start text-base font-medium hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-medium text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}