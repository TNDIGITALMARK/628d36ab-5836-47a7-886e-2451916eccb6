import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight leading-tight">
              About HolisticAI
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empowering individuals to achieve optimal wellness through the harmony of mind, body, and spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section with Green Visual */}
      <section className="container mx-auto px-8 py-16 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Visual */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <Image
              src="/generated/about-mission.png"
              alt="Holistic wellness concept"
              fill
              className="object-contain p-8"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Our Mission
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At HolisticAI, we believe that true wellness comes from the integration of mind, body, and spirit.
                Our mission is to provide personalized, AI-powered guidance that helps you achieve balance and vitality in all areas of your life.
              </p>
              <p>
                We combine cutting-edge artificial intelligence with time-tested holistic health principles to create
                a unique wellness experience tailored specifically to your needs, goals, and lifestyle.
              </p>
              <p>
                Whether you're seeking better sleep, improved nutrition, enhanced mindfulness, or a more active lifestyle,
                HolisticAI is your trusted companion on the journey to optimal wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="container mx-auto px-8 py-16 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 tracking-tight text-center">
            Our Holistic Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mind */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">Mind</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cultivate mental clarity, emotional balance, and cognitive wellness through mindfulness and stress management techniques.
              </p>
            </div>

            {/* Body */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">Body</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Optimize physical health through personalized nutrition, exercise, and lifestyle recommendations tailored to your body's needs.
              </p>
            </div>

            {/* Spirit */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">Spirit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nurture inner peace, purpose, and connection through practices that align with your values and spiritual goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Green Environment */}
      <section className="container mx-auto px-8 py-16 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Our Team
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HolisticAI was founded by a team of healthcare professionals, wellness experts, and AI researchers
                who share a passion for holistic health and cutting-edge technology.
              </p>
              <p>
                Our multidisciplinary team brings together expertise in nutrition, fitness, mental health,
                meditation, and artificial intelligence to create a comprehensive wellness platform that truly understands your unique needs.
              </p>
              <p>
                We're committed to continuous learning and improvement, staying at the forefront of both wellness science
                and AI technology to provide you with the most effective, personalized guidance possible.
              </p>
            </div>
          </div>

          {/* Right Column - Team Image */}
          <div className="relative aspect-[16/9] overflow-hidden order-1 md:order-2 rounded-sm">
            <Image
              src="/generated/about-team.png"
              alt="HolisticAI wellness team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-8 py-16 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 tracking-tight text-center">
            Our Core Values
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 border border-border rounded-sm hover:border-green-500 transition-colors">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Personalization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe every individual is unique. Our AI-powered platform creates truly personalized recommendations
                  based on your specific health profile, goals, and preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-border rounded-sm hover:border-green-500 transition-colors">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Evidence-Based</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All our recommendations are grounded in scientific research and proven holistic health practices,
                  ensuring you receive reliable, effective guidance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-border rounded-sm hover:border-green-500 transition-colors">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Accessibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wellness guidance should be accessible to everyone. We're committed to making holistic health
                  achievable and sustainable, regardless of your starting point.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-border rounded-sm hover:border-green-500 transition-colors">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  True wellness requires addressing mind, body, and spirit together. Our holistic approach ensures
                  all aspects of your health work in harmony.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-border rounded-sm hover:border-green-500 transition-colors">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Privacy & Trust</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your health information is sacred. We maintain the highest standards of data privacy and security,
                  ensuring your personal wellness journey remains confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            Begin your wellness journey today
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Take the first step towards holistic health with our comprehensive wellness assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Start Assessment
            </Link>
            <Link
              href="/guidance"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground text-sm font-medium hover:bg-accent transition-colors"
            >
              Explore Guidance
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
