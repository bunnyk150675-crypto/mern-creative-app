"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ComprehensiveContactForm = () => {
  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-gray-50 via-background to-background py-32 lg:mx-4 dark:from-gray-950">
      <div className="container max-w-2xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
          Ready to Transform Education?
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          Connect with our team to explore how EduPulse can revolutionize learning in your institution.
        </p>
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div>
            <h2 className="font-semibold">Partnership Inquiries</h2>
            <a
              href="mailto:partnerships@edupulse.ai"
              className="mt-3 text-muted-foreground hover:text-foreground"
            >
              partnerships@edupulse.ai
            </a>
          </div>
          <div>
            <h2 className="font-semibold">Technical Support</h2>
            <a
              href="mailto:support@edupulse.ai"
              className="mt-3 text-muted-foreground hover:text-foreground"
            >
              support@edupulse.ai
            </a>
          </div>
          <div>
            <h2 className="font-semibold">Media & Press</h2>
            <a
              href="mailto:press@edupulse.ai"
              className="mt-3 text-muted-foreground hover:text-foreground"
            >
              press@edupulse.ai
            </a>
          </div>
        </div>
        <DashedLine className="my-12" />
        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="text-lg font-semibold">Inquiries</h2>
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label>Institution Name</Label>
              <Input placeholder="Your institution name" />
            </div>
            <div className="space-y-2">
              <Label>Email address</Label>
              <Input placeholder="you@institution.edu" type="email" />
            </div>
            <div className="space-y-2">
              <Label>Contact Role</Label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                <option value="">Select your role</option>
                <option value="administrator">Administrator</option>
                <option value="teacher">Teacher</option>
                <option value="it-director">IT Director</option>
                <option value="researcher">Researcher</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Number of Students</Label>
              <Input placeholder="e.g. 500" />
            </div>
            <div className="space-y-2">
              <Label>Primary Interest</Label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                <option value="">Select primary interest</option>
                <option value="k12-implementation">K-12 Implementation</option>
                <option value="higher-education">Higher Education</option>
                <option value="special-needs">Special Needs</option>
                <option value="research-partnership">Research Partnership</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Your message</Label>
              <Textarea
                placeholder="Tell us about your educational goals and how EduPulse can help transform learning at your institution."
                className="min-h-[120px] resize-none"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="demo"
                  className="h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
                <Label htmlFor="demo" className="text-sm font-normal">
                  Request a personalized demo
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="updates"
                  className="h-4 w-4 rounded border border-input bg-background text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
                <Label htmlFor="updates" className="text-sm font-normal">
                  Subscribe to education innovation updates
                </Label>
              </div>
            </div>
            <div className="flex justify-end">
              <Button size="lg" type="submit" className="">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ]
        )}
      />
    </div>
  );
};

export { ComprehensiveContactForm };