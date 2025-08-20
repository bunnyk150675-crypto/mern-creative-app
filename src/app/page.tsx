import { Animated3DHero } from "@/components/heros/animated-3d-hero"
import EmotionDetectionShowcase from "@/components/features/emotion-detection-showcase"
import { OverlayImageCards } from "@/components/feature/overlay-image-cards"
import LearningAnalyticsDashboard from "@/components/analytics/learning-analytics-dashboard"
import { TabControlledGallery } from "@/components/gallery/tab-controlled-gallery"
import { CompanyLogoTestimonials } from "@/components/testimonials/company-logo-testimonials"
import { ToggleTabsPricing } from "@/components/pricing/toggle-tabs-pricing"
import { InteractiveGraphStats } from "@/components/stats/interactive-graph-stats"
import { TestimonialMetricsCasestudies } from "@/components/casestudies/testimonial-metrics-casestudies"
import { CategoryCardFaqs } from "@/components/faqs/category-card-faqs"
import { ComprehensiveContactForm } from "@/components/contact/comprehensive-contact-form"
import { GradientOverlayCta } from "@/components/cta/gradient-overlay-cta"
import { FloatingNavbar } from "@/components/navbars/floating-navbar"
import { NewsletterFooter } from "@/components/footers/newsletter-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <FloatingNavbar />
      
      <Animated3DHero />
      
      <EmotionDetectionShowcase />
      
      <OverlayImageCards />
      
      <LearningAnalyticsDashboard />
      
      <TabControlledGallery />
      
      <CompanyLogoTestimonials />
      
      <ToggleTabsPricing />
      
      <InteractiveGraphStats />
      
      <TestimonialMetricsCasestudies />
      
      <CategoryCardFaqs />
      
      <ComprehensiveContactForm />
      
      <GradientOverlayCta />
      
      <NewsletterFooter />
    </main>
  )
}