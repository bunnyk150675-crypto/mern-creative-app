"use client";

import NumberFlow from "@number-flow/react";
import { motion, useInView } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

const InteractiveGraphStats = () => {
  const [showMarketView, setShowMarketView] = useState(false);
  const [stats, setStats] = useState({
    outcomes: {
      GlobalMarket: 0,
      PersonalizedLearning: 0,
      PotentialUsers: 0,
      GrowthRate: 0,
      FocusTime: 0,
      LearningAnxiety: 0,
      TeacherSatisfaction: 0,
      RetentionRate: 0,
    },
    market: {
      GlobalMarket: 0,
      PersonalizedLearning: 0,
      PotentialUsers: 0,
      GrowthRate: 0,
      FocusTime: 0,
      LearningAnxiety: 0,
      TeacherSatisfaction: 0,
      RetentionRate: 0,
    },
  });

  const ref = useRef(null);
  const isInView = useInView(ref);

  const finalStats = useMemo(
    () => ({
      outcomes: {
        GlobalMarket: 350,
        PersonalizedLearning: 73,
        PotentialUsers: 2.3,
        GrowthRate: 9.5,
        FocusTime: 40,
        LearningAnxiety: 65,
        TeacherSatisfaction: 90,
        RetentionRate: 50,
      },
      market: {
        GlobalMarket: 350,
        PersonalizedLearning: 73,
        PotentialUsers: 2.3,
        GrowthRate: 9.5,
        FocusTime: 40,
        LearningAnxiety: 65,
        TeacherSatisfaction: 90,
        RetentionRate: 50,
      },
    }),
    []
  );

  useEffect(() => {
    if (isInView) {
      setStats(finalStats);
    }
  }, [isInView, finalStats]);

  return (
    <section className="py-32 bg-surface-white">
      <div className="container flex justify-center">
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h1 className="w-full font-[var(--font-display)] text-6xl font-medium text-foreground">
              Proven Results Across All Learning Environments
            </h1>
            <div className="mt-10 lg:w-[115%]">
              <Graph />
            </div>
          </div>
          <div ref={ref} className="flex w-full flex-col items-end lg:w-1/2">
            <h1 className="font-[var(--font-display)] text-8xl leading-0 lg:text-[10rem] text-primary">
              <NumberFlow
                value={85}
                suffix="%"
                className="font-[var(--font-display)]"
              />
            </h1>
            <div className="mb-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-17">
              <p className="text-muted-foreground">Average engagement rate across all learning environments</p>
              <Button
                variant="secondary"
                className="group text-md flex w-fit items-center justify-center gap-2 rounded-full px-6 py-1 tracking-tight shadow-none transition-all duration-300 ease-out active:scale-95"
                onClick={() => setShowMarketView(!showMarketView)}
              >
                <span>{showMarketView ? "Student Outcomes" : "Market Opportunity"}</span>
                <ArrowLeftRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </Button>
            </div>
            <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-14">
              <div className="text-left">
                <h2 className="text-4xl font-medium lg:text-6xl text-foreground">
                  <NumberFlow
                    value={
                      showMarketView
                        ? stats.market.GlobalMarket
                        : stats.outcomes.GlobalMarket
                    }
                    suffix="B+"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Global EdTech Market </p>
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-medium lg:text-6xl text-foreground">
                  <NumberFlow
                    value={
                      showMarketView
                        ? stats.market.PersonalizedLearning
                        : stats.outcomes.PersonalizedLearning
                    }
                    suffix="%"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Students Want Personalized Learning </p>
              </div>
              <div className="text-left">
                <h2 className="text-4xl font-medium lg:text-6xl text-foreground">
                  <NumberFlow
                    value={
                      showMarketView
                        ? stats.market.PotentialUsers
                        : stats.outcomes.PotentialUsers
                    }
                    suffix="B"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Potential Users Worldwide </p>
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-medium lg:text-6xl text-foreground">
                  <NumberFlow
                    value={
                      showMarketView
                        ? stats.market.GrowthRate
                        : stats.outcomes.GrowthRate
                    }
                    suffix="%"
                  />
                </h2>
                <p className="text-muted-foreground/70"> Annual Growth Rate </p>
              </div>
            </div>
            
            {/* 2x2 Grid for Student Outcomes */}
            <div className="w-full grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div className="text-left">
                <h3 className="text-2xl font-medium lg:text-3xl text-accent">
                  <NumberFlow
                    value={
                      showMarketView
                        ? stats.market.FocusTime
                        : stats.outcomes.FocusTime
                    }
                    suffix="%"
                  />
                </h3>
                <p className="text-sm text-muted-foreground/70"> Improved Focus Time </p>
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-medium lg:text-3xl text-accent">
                  <NumberFlow
                    value={
                      showMarketView
                        ? stats.market.LearningAnxiety
                        : stats.outcomes.LearningAnxiety
                    }
                    suffix="%"
                  />
                </h3>
                <p className="text-sm text-muted-foreground/70"> Reduced Learning Anxiety </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-medium lg:text-3xl text-success">
                  <NumberFlow
                    value={
                      showMarketView
                        ? stats.market.TeacherSatisfaction
                        : stats.outcomes.TeacherSatisfaction
                    }
                    suffix="%"
                  />
                </h3>
                <p className="text-sm text-muted-foreground/70"> Teacher Satisfaction </p>
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-medium lg:text-3xl text-success">
                  <NumberFlow
                    value={
                      showMarketView
                        ? stats.market.RetentionRate
                        : stats.outcomes.RetentionRate
                    }
                    suffix="%"
                  />
                </h3>
                <p className="text-sm text-muted-foreground/70"> Better Retention Rates </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { InteractiveGraphStats };

function Graph() {
  return (
    <div className="wrapper">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 644 388"
        initial={{
          clipPath: "inset(0px 100% 0px 0px)",
        }}
        animate={{
          clipPath: "inset(0px 0% 0px 0px)",
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 18,
        }}
      >
        <g clipPath="url(#grad)">
          <path
            d="M1 350C1 350 83.308 320 114.735 280C146.162 240 189.504 200 235.952 160C273.548 120 294.469 100 329.733 80C409.879 50 452.946 40 483.874 30C514.802 25 635.97 15 644 10"
            stroke="#2563eb"
            strokeWidth="2"
          />
          <path
            d="M113.912 280C82.437 320 1 350 1 350V388H644V10C635.957 15 514.601 25 483.625 30C452.649 40 409.515 50 329.245 80C293.926 100 272.973 120 235.318 160C188.798 200 145.388 240 113.912 280Z"
            fill="url(#grad)"
          />
        </g>
        <defs>
          <linearGradient
            id="grad"
            x1="321.5"
            y1="0.476773"
            x2="321.5"
            y2="387.477"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="1" stopColor="#1d4ed8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}