"use client";

import { Separator } from "@/components/ui/separator";

const TestimonialMetricsCasestudies = () => {
  return (
    <section className="py-32 bg-surface-white">
      <div className="container">
        <div className="flex flex-col gap-6 text-center">
          <p className="font-medium text-muted-foreground">Success Stories from Educational Institutions</p>
          <h2 className="text-4xl font-medium md:text-5xl text-foreground">
            Real Impact, Real Results
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Classroom at Lincoln Elementary"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Lincoln Elementary</h3>
                  <p className="sm:text-lg text-muted-foreground mb-6">
                    Implemented EduPulse across 200 students to enhance personalized learning and emotional awareness in K-5 classrooms.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">40% increase in student engagement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">25% improvement in test scores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">60% reduction in behavioral issues</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  40%
                </p>
                <p className="font-semibold text-primary">
                  Engagement Increase
                </p>
                <p className="text-muted-foreground">Student participation</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  25%
                </p>
                <p className="font-semibold text-primary">Test Score Improvement</p>
                <p className="text-muted-foreground">Academic performance</p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24 mt-16">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="UC Berkeley Engineering online learning setup"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">UC Berkeley Engineering</h3>
                  <p className="sm:text-lg text-muted-foreground mb-6">
                    Deployed EduPulse for 1,500 engineering students to optimize remote learning experiences and improve course outcomes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">50% better course completion rates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">35% improved student satisfaction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">90% would recommend to other programs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  50%
                </p>
                <p className="font-semibold text-primary">Course Completion</p>
                <p className="text-muted-foreground">
                  Improvement rate
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  90%
                </p>
                <p className="font-semibold text-primary">Would Recommend</p>
                <p className="text-muted-foreground">Student feedback</p>
              </div>
            </div>
          </div>

          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24 mt-16">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src="https://images.unsplash.com/photo-1609720019439-86bf5f047fcf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Specialized learning environment at Autism Learning Academy"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Autism Learning Academy</h3>
                  <p className="sm:text-lg text-muted-foreground mb-6">
                    Supporting 50 special needs students with personalized emotion-aware learning experiences and adaptive curriculum delivery.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">80% improved focus time duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">70% reduced anxiety episodes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">95% parent satisfaction rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  80%
                </p>
                <p className="font-semibold text-primary">Improved Focus</p>
                <p className="text-muted-foreground">Time duration</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  95%
                </p>
                <p className="font-semibold text-primary">Parent Satisfaction</p>
                <p className="text-muted-foreground">Feedback rating</p>
              </div>
            </div>
          </div>

          <Separator className="my-20" />
          
          <div className="text-center mb-12">
            <h3 className="text-3xl font-medium text-foreground">International Impact</h3>
            <p className="text-muted-foreground mt-2">EduPulse transforming education globally</p>
          </div>

          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="International classroom with diverse students"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Singapore International School</h3>
                  <p className="sm:text-lg text-muted-foreground mb-6">
                    Deployed across 800 international students from 40+ countries, adapting to diverse cultural learning preferences and emotional expressions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">55% increase in cross-cultural collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">45% improvement in language learning outcomes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">92% teacher adoption rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  800
                </p>
                <p className="font-semibold text-primary">Students Served</p>
                <p className="text-muted-foreground">Across 40+ countries</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  92%
                </p>
                <p className="font-semibold text-primary">Teacher Adoption</p>
                <p className="text-muted-foreground">Platform usage rate</p>
              </div>
            </div>
          </div>

          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24 mt-16">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="University of Melbourne campus learning environment"
                className="aspect-29/35 h-full w-full max-w-60 rounded-2xl object-cover"
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">University of Melbourne</h3>
                  <p className="sm:text-lg text-muted-foreground mb-6">
                    Integrated EduPulse into psychology and education programs for 2,200 students, focusing on emotional intelligence development and research applications.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">65% increase in emotional awareness skills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">38% improvement in research methodology understanding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">87% of graduates report improved empathy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  65%
                </p>
                <p className="font-semibold text-primary">Emotional Awareness</p>
                <p className="text-muted-foreground">Skills development</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  87%
                </p>
                <p className="font-semibold text-primary">Improved Empathy</p>
                <p className="text-muted-foreground">Graduate reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialMetricsCasestudies };