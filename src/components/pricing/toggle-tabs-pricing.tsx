"use client";

import { Check, Zap } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ToggleTabsPricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="bg-muted/50 py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline">Choose Your Learning Journey</Badge>
          <h1 className="text-center text-4xl font-semibold text-balance sm:text-5xl lg:text-7xl">
            Flexible Plans for Every Learner
          </h1>
          <Tabs
            value={isMonthly ? "monthly" : "yearly"}
            onValueChange={(value) => setIsMonthly(value === "monthly")}
            className="w-80"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Annual
                <span className="ml-2 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                  Save 20%
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="mx-auto mt-4 grid w-full max-w-5xl gap-6 lg:grid-cols-3">
            <div className="w-full rounded-lg border bg-background p-8 shadow-sm lg:max-w-96">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Free Tier</h3>
                <p className="text-sm text-muted-foreground">Perfect for getting started</p>
              </div>
              <Separator className="my-6" />
              <div className="flex items-start font-semibold">
                <p className="text-xl">$</p>
                <p className="text-5xl leading-none">0</p>
              </div>
              <p className="text-sm text-muted-foreground">
                forever free
              </p>
              <Button variant="outline" className="mt-4 mb-6 w-full">
                Get started free
              </Button>
              <Separator className="my-6" />
              <div>
                <p className="mb-3 text-sm font-semibold">What's included: </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Basic emotion detection</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Limited content adaptation</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Standard learning paths</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Basic progress tracking</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full rounded-lg border bg-background p-8 shadow-sm lg:max-w-96 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  <Zap className="h-3 w-3 mr-1" />
                  POPULAR
                </Badge>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">Premium Individual</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  For dedicated learners
                </p>
              </div>
              <Separator className="my-6" />
              <div className="flex items-center gap-2">
                <div className="flex items-start font-semibold">
                  <p className="text-xl">$</p>
                  <p className="text-5xl leading-none">
                    {isMonthly ? "9.99" : "7.99"}
                  </p>
                </div>
                {!isMonthly && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-md bg-green-100 px-2 py-1 font-medium text-green-700">
                      20% off
                    </span>
                    <span className="text-muted-foreground line-through">$9.99</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                per month, billed {isMonthly ? "monthly" : "annually"}
              </p>
              <Button className="mt-4 mb-6 w-full">Start learning now</Button>
              <Separator className="my-6" />
              <div>
                <p className="mb-3 text-sm font-semibold">Everything in Free Tier, plus: </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Advanced emotion analytics</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Full content adaptation</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>AI tutor integration</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Detailed progress reports</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Mindfulness features</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full rounded-lg border bg-background p-8 shadow-sm lg:max-w-96">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Institutional</h3>
                <p className="text-sm text-muted-foreground">
                  For schools and organizations
                </p>
              </div>
              <Separator className="my-6" />
              <div className="flex items-center gap-2">
                <div className="flex items-start font-semibold">
                  <p className="text-2xl">Custom</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                pricing based on your needs
              </p>
              <Button variant="outline" className="mt-4 mb-6 w-full">
                Contact sales
              </Button>
              <Separator className="my-6" />
              <div>
                <p className="mb-3 text-sm font-semibold">Everything in Premium, plus: </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Multi-user dashboards</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Advanced analytics</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Integration support</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Dedicated support</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p>Custom features</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ToggleTabsPricing };