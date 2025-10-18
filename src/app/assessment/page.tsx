'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

interface AssessmentData {
  energyLevels: string;
  stressTriggers: string;
  wellnessPractices: string;
  healthConcerns: string;
  lifestyleFactors: string;
  sleepHours: number;
  exerciseFrequency: string;
  dietaryPreferences: string;
}

export default function Assessment() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<AssessmentData>({
    energyLevels: '',
    stressTriggers: '',
    wellnessPractices: '',
    healthConcerns: '',
    lifestyleFactors: '',
    sleepHours: 7,
    exerciseFrequency: '',
    dietaryPreferences: '',
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Save assessment data and navigate to guidance
      localStorage.setItem('assessmentData', JSON.stringify(formData));
      router.push('/guidance');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Step Indicator */}
      <div className="border-b border-border bg-secondary/50">
        <div className="container mx-auto px-8 py-3">
          <div className="text-sm text-muted-foreground text-center">
            Step {step} of {totalSteps}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-secondary">
        <div className="container mx-auto px-6">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Assessment Content */}
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Wellness Assessment</h1>
          <p className="text-muted-foreground">
            Help us understand your wellness journey to provide personalized recommendations.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          {/* Step 1: Energy & Stress */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Energy & Stress Levels</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Understanding your energy patterns and stress triggers helps us create better recommendations.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How would you describe your energy levels throughout the day?
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  rows={4}
                  placeholder="e.g., Low in mornings, tired in afternoons..."
                  value={formData.energyLevels}
                  onChange={(e) => setFormData({ ...formData, energyLevels: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What are your primary stress triggers?
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  rows={4}
                  placeholder="e.g., Work deadlines, family responsibilities..."
                  value={formData.stressTriggers}
                  onChange={(e) => setFormData({ ...formData, stressTriggers: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Step 2: Current Wellness Practices */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Current Wellness Practices</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us about your existing wellness routine and health concerns.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What wellness practices do you currently follow?
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  rows={4}
                  placeholder="e.g., Occasional yoga, herbal tea, meditation..."
                  value={formData.wellnessPractices}
                  onChange={(e) => setFormData({ ...formData, wellnessPractices: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Do you have any specific health concerns we should know about?
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  rows={4}
                  placeholder="e.g., Digestive issues, anxiety, chronic pain..."
                  value={formData.healthConcerns}
                  onChange={(e) => setFormData({ ...formData, healthConcerns: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Step 3: Sleep Patterns */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Sleep & Rest</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Quality sleep is fundamental to holistic wellness.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How many hours of sleep do you typically get per night?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="3"
                    max="12"
                    step="0.5"
                    value={formData.sleepHours}
                    onChange={(e) => setFormData({ ...formData, sleepHours: parseFloat(e.target.value) })}
                    className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <span className="text-lg font-semibold text-foreground w-16 text-center">
                    {formData.sleepHours}h
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Describe your lifestyle factors affecting sleep
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  rows={4}
                  placeholder="e.g., Long work hours, limited sunlight exposure, screen time..."
                  value={formData.lifestyleFactors}
                  onChange={(e) => setFormData({ ...formData, lifestyleFactors: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Step 4: Exercise & Movement */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Movement & Exercise</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Physical activity is a cornerstone of holistic health.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How often do you exercise or engage in physical activity?
                </label>
                <select
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  value={formData.exerciseFrequency}
                  onChange={(e) => setFormData({ ...formData, exerciseFrequency: e.target.value })}
                >
                  <option value="">Select frequency...</option>
                  <option value="daily">Daily</option>
                  <option value="4-6-weekly">4-6 times per week</option>
                  <option value="2-3-weekly">2-3 times per week</option>
                  <option value="once-weekly">Once per week</option>
                  <option value="rarely">Rarely</option>
                  <option value="never">Never</option>
                </select>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="relative h-32 w-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src="/generated/active-lifestyle.png"
                      alt="Active lifestyle"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Movement Tips</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular movement improves energy, reduces stress, and enhances overall wellbeing.
                      Even gentle activities like walking or stretching can make a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Nutrition & Diet */}
          {step === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Nutrition & Diet</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Your dietary choices play a vital role in your overall wellness.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What are your dietary preferences and restrictions?
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  rows={4}
                  placeholder="e.g., Plant-based mostly, no gluten, vegetarian..."
                  value={formData.dietaryPreferences}
                  onChange={(e) => setFormData({ ...formData, dietaryPreferences: e.target.value })}
                />
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="relative h-32 w-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src="/generated/nutrition-healthy.png"
                      alt="Healthy nutrition"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Nutrition Matters</h3>
                    <p className="text-sm text-muted-foreground">
                      Whole foods, anti-inflammatory ingredients, and proper hydration support your body's
                      natural healing processes and boost energy levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-colors"
            >
              {step === totalSteps ? 'View My Recommendations' : 'Continue'}
            </button>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-secondary rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1">Your Privacy Matters</h3>
            <p className="text-sm text-muted-foreground">
              Your wellness data is private and secure. We use this information solely to provide
              personalized recommendations tailored to your unique health journey.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
