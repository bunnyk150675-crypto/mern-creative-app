"use client";

import { Button } from "@/components/ui/button";

const GradientOverlayCta = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        <div className="flex h-[620px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
          <div className="flex flex-col gap-8 p-4 text-center max-w-4xl">
            <h2 className="text-white text-5xl font-bold font-[var(--font-display)]">
              Start Your Emotion-Aware Learning Journey Today
            </h2>
            <p className="text-white text-lg opacity-90">
              Join thousands of educators and students already experiencing the future of personalized education. Try EduPulse free for 30 days.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                Schedule Demo
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No credit card required • COPPA compliant • 30-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GradientOverlayCta };