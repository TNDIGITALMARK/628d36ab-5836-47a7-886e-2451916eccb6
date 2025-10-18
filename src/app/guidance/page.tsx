'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock user data based on assessment
const mockUserData = {
  name: 'Sarah Chen',
  wellnessScore: 6.0,
  weeklyTarget: 7.5,
  completedActivities: 3,
};

// Mock recommendations based on assessment
const recommendations = {
  mindfulness: {
    title: 'Mindfulness & Meditation',
    image: '/generated/mindfulness-space.png',
    mainRecommendation: '10-Minute Morning Meditation',
    description: 'Start your day with a grounding meditation practice to reduce stress and improve focus.',
    benefits: [
      'Reduces anxiety and stress hormones',
      'Improves emotional regulation',
      'Enhances mental clarity and focus',
      'Promotes better sleep quality',
    ],
    actionSteps: [
      'Find a quiet, comfortable space in your home',
      'Set a timer for 10 minutes',
      'Focus on your breath, counting inhales and exhales',
      'When your mind wanders, gently return focus to breathing',
      'End with 3 deep breaths and set an intention for the day',
    ],
    integration: 'Practice immediately after waking, before checking your phone. Pair with a warm glass of lemon water to create a calming morning ritual.',
  },
  nutrition: {
    title: 'Nutritional Balance',
    image: '/generated/nutrition-healthy.png',
    mainRecommendation: 'Anti-Inflammatory Nutrition Plan',
    description: 'Incorporate anti-inflammatory foods to reduce digestive issues and boost energy levels.',
    benefits: [
      'Reduces inflammation throughout the body',
      'Improves digestive health',
      'Increases sustained energy levels',
      'Supports immune system function',
    ],
    actionSteps: [
      'Add turmeric and ginger to morning smoothies or tea',
      'Include 3-4 servings of leafy greens daily (kale, spinach, chard)',
      'Choose whole grains over refined carbohydrates',
      'Incorporate omega-3 rich foods (walnuts, flaxseeds, chia seeds)',
      'Stay hydrated with at least 8 glasses of water daily',
    ],
    integration: 'Meal prep on Sundays to ensure you have anti-inflammatory ingredients ready. Start each meal with vegetables to naturally reduce portion sizes of other foods.',
  },
  lifestyle: {
    title: 'Active Lifestyle',
    image: '/generated/active-lifestyle.png',
    mainRecommendation: 'Nature-Based Movement Practice',
    description: 'Combine physical activity with nature exposure for maximum wellness benefits.',
    benefits: [
      'Improves cardiovascular health',
      'Reduces stress and anxiety',
      'Boosts vitamin D levels',
      'Enhances mood and energy',
    ],
    actionSteps: [
      'Schedule 20-minute nature walks during lunch breaks',
      'Practice gentle yoga or stretching outdoors when possible',
      'Try forest bathing (mindful walking in natural settings)',
      'Incorporate grounding exercises (walking barefoot on grass)',
      'Build up to 30 minutes of moderate activity, 5 days per week',
    ],
    integration: 'Block time on your calendar for movement breaks. Invite a friend or family member to join for accountability and social connection.',
  },
  sleep: {
    title: 'Restful Sleep',
    image: '/generated/restful-sleep.png',
    mainRecommendation: 'Sleep Optimization Protocol',
    description: 'Establish healthy sleep habits to improve rest quality and duration.',
    benefits: [
      'Improves memory and cognitive function',
      'Supports immune system',
      'Regulates mood and emotional balance',
      'Aids in physical recovery and healing',
    ],
    actionSteps: [
      'Set a consistent bedtime (aim for 10:30 PM)',
      'Reduce blue light exposure 2 hours before bed',
      'Keep bedroom temperature cool (65-68°F)',
      'Drink chamomile or passionflower tea 1 hour before sleep',
      'Practice 10-minute guided relaxation before bed',
    ],
    integration: 'Create a wind-down routine starting at 9 PM. Dim lights, put away devices, and engage in relaxing activities like reading or gentle stretching.',
  },
  exercise: {
    title: 'Connect with Experts',
    image: '/generated/active-lifestyle.png',
    mainRecommendation: 'Holistic Health Coaching',
    description: 'Work with certified wellness practitioners for personalized guidance and support.',
    benefits: [
      'Personalized approach to your unique needs',
      'Professional accountability and support',
      'Evidence-based wellness strategies',
      'Faster progress toward health goals',
    ],
    actionSteps: [
      'Schedule a consultation with a holistic health coach',
      'Consider working with a nutritionist for meal planning',
      'Explore acupuncture or massage therapy for stress relief',
      'Join group wellness workshops or classes',
      'Book regular check-ins to track progress',
    ],
    integration: 'Start with one 30-minute consultation to assess which practitioners align with your wellness goals. Many offer virtual sessions for convenience.',
  },
};

function GuidanceContent() {
  const searchParams = useSearchParams();
  const category = searchParams?.get('category') || 'mindfulness';

  const guidance = recommendations[category as keyof typeof recommendations] || recommendations.mindfulness;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with User Info */}
      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, {mockUserData.name}
              </h1>
              <p className="text-muted-foreground">
                Here are your personalized wellness recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{mockUserData.wellnessScore}</div>
              <div className="text-sm text-muted-foreground">Wellness Score</div>
              <div className="text-xs text-muted-foreground mt-1">Target: {mockUserData.weeklyTarget}</div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Weekly Progress</span>
              <span className="text-sm text-muted-foreground">{mockUserData.completedActivities} activities completed</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all"
                style={{ width: `${(mockUserData.wellnessScore / mockUserData.weeklyTarget) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Recommendation */}
          <div className="md:col-span-2 space-y-8">
            {/* Category Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
                <span className="text-sm font-medium text-primary">{guidance.title}</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">{guidance.mainRecommendation}</h2>
              <p className="text-lg text-muted-foreground">{guidance.description}</p>
            </div>

            {/* Hero Image */}
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src={guidance.image}
                alt={guidance.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Benefits Section */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {guidance.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Steps */}
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Action Steps</h3>
              <div className="space-y-4">
                {guidance.actionSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Tips */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-semibold text-foreground">Integration into Your Routine</h3>
              </div>
              <p className="text-foreground ml-9">{guidance.integration}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors">
                  Mark as Complete
                </button>
                <button className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                  Save for Later
                </button>
                <button className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                  Share with Coach
                </button>
              </div>
            </div>

            {/* Related Categories */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Explore More</h3>
              <div className="space-y-3">
                <Link
                  href="/guidance?category=mindfulness"
                  className="block p-3 bg-secondary rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-foreground">Mindfulness</span>
                  </div>
                </Link>
                <Link
                  href="/guidance?category=nutrition"
                  className="block p-3 bg-secondary rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm font-medium text-foreground">Nutrition</span>
                  </div>
                </Link>
                <Link
                  href="/guidance?category=lifestyle"
                  className="block p-3 bg-secondary rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm font-medium text-foreground">Active Lifestyle</span>
                  </div>
                </Link>
                <Link
                  href="/guidance?category=sleep"
                  className="block p-3 bg-secondary rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="text-sm font-medium text-foreground">Sleep</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-secondary rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our wellness coaches are here to support your journey.
                  </p>
                  <button className="text-sm font-medium text-primary hover:underline">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function GuidancePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GuidanceContent />
    </Suspense>
  );
}
