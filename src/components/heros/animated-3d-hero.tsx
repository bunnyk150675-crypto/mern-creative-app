"use client";

import { motion } from "motion/react";
import React from "react";
import { Brain, Heart, Zap, Eye, Target, TrendingUp } from "lucide-react";

const Animated3DHero = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
        <p className="text-muted-foreground">
          EduPulse: AI-Powered Emotion Detection for Personalized Learning
        </p>
        <h1 className="realtive z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
          <span
            className="overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "600px",
            }}
          >
            {"Transform Learning with AI-Powered Emotion Detection"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word === "EduPulse" ? (
                    <span className="font-[var(--font-display)] italic text-primary">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
          </span>
        </h1>

        <motion.p 
          className="max-w-2xl text-center text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          EduPulse adapts to your emotional state in real-time, delivering personalized education that understands when you're confused, engaged, or need a break.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors">
            Watch Demo
          </button>
        </motion.div>

        <div className="h-92 -translate-y-15 relative w-full overflow-hidden">
          <div className="h-92 bg-background absolute z-10 w-full blur-xl" />
          <div className="z-13 h-92 -translate-y-62 bg-background absolute w-full blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="z-12 absolute w-full overflow-hidden"
          >
            {/* Floating Emotion Detection Interface Mockups */}
            <motion.div
              className="absolute top-8 left-1/4 bg-card rounded-xl p-4 shadow-lg border border-border"
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium text-success">Engaged</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Focus: 92%</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-16 right-1/4 bg-card rounded-xl p-4 shadow-lg border border-border"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span className="text-sm font-medium text-warning">Confused</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Suggesting: Review previous concept
              </div>
            </motion.div>

            <motion.div
              className="absolute top-32 left-1/3 bg-card rounded-xl p-4 shadow-lg border border-border"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-primary">Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Difficulty: Optimal</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-24 right-1/3 bg-card rounded-xl p-4 shadow-lg border border-border"
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">AI Adapting</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Adjusting content pace...
              </div>
            </motion.div>

            <motion.div
              className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-card rounded-xl p-4 shadow-lg border border-border"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">Progress</span>
              </div>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-success rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "78%" }}
                  transition={{ delay: 2, duration: 1 }}
                />
              </div>
            </motion.div>

            <div
              className="h-215 -translate-y-90 w-full blur-sm"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(37, 99, 235, 0.3) 0%, 
                  rgba(13, 148, 136, 0.4) 25%, 
                  rgba(22, 163, 74, 0.3) 50%, 
                  rgba(234, 88, 12, 0.2) 75%,
                  rgba(234, 179, 8, 0.2) 100%)`,
                clipPath: 'polygon(40% 0%, 60% 0%, 95% 100%, 5% 100%)',
                transform: 'skewY(-1deg)',
              }}
            />
            <div
              className="h-215 -translate-y-90 w-full blur-md opacity-60 absolute"
              style={{
                background: `linear-gradient(45deg, 
                  rgba(37, 99, 235, 0.2) 0%, 
                  rgba(13, 148, 136, 0.3) 30%, 
                  rgba(22, 163, 74, 0.2) 70%, 
                  rgba(234, 88, 12, 0.1) 100%)`,
                clipPath: 'polygon(42% 0%, 58% 0%, 92% 100%, 8% 100%)',
                transform: 'skewY(1deg)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Animated3DHero };