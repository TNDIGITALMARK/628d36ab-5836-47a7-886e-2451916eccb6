import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Minimal Design with Green Imagery */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight leading-tight">
              Your path to holistic wellness
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              AI-powered personalized health guidance for mind, body, and spirit.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Begin Assessment
            </Link>
          </div>
        </div>
        {/* Background Hero Image */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/generated/wellness-hero.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Features Section - Minimal Grid */}
      <section className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          <div className="bg-background p-12">
            <h3 className="text-sm font-medium text-foreground mb-3 tracking-wide uppercase">Personalized</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tailored wellness recommendations based on your unique health profile.
            </p>
          </div>
          <div className="bg-background p-12">
            <h3 className="text-sm font-medium text-foreground mb-3 tracking-wide uppercase">AI-Powered</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced algorithms analyze your data to provide intelligent guidance.
            </p>
          </div>
          <div className="bg-background p-12">
            <h3 className="text-sm font-medium text-foreground mb-3 tracking-wide uppercase">Holistic</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive approach addressing mind, body, and spirit together.
            </p>
          </div>
        </div>
      </section>

      {/* Green Imagery Section - Nature & Wellness */}
      <section className="container mx-auto px-8 py-16 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
            <Image
              src="/generated/wellness-nature.png"
              alt="Fresh green wellness"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Nourish your natural vitality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              Connect with the healing power of nature through our holistic wellness approach.
              Every aspect of our guidance is designed to help you thrive naturally and sustainably.
            </p>
            <Link
              href="/guidance"
              className="inline-flex items-center text-foreground text-sm font-medium group w-fit"
            >
              Explore Wellness Areas
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Meditation Space Section */}
      <section className="container mx-auto px-8 py-16 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center order-2 md:order-1 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Create your sanctuary
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              Transform your space into a peaceful haven for mindfulness and reflection.
              Our personalized guidance helps you build sustainable wellness practices that fit your life.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center text-foreground text-sm font-medium group w-fit"
            >
              Start Your Journey
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-[4/3] overflow-hidden order-1 md:order-2 rounded-sm">
            <Image
              src="/generated/wellness-space.png"
              alt="Meditation wellness space"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Wellness Areas - Minimal List */}
      <section className="container mx-auto px-8 py-16 border-t border-border">
        <h2 className="text-2xl font-light text-foreground mb-12 tracking-tight">Wellness Areas</h2>
        <div className="max-w-2xl space-y-8">
          <Link href="/guidance?category=mindfulness" className="block group">
            <div className="flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors">
              <span className="text-lg text-foreground">Mindfulness & Meditation</span>
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link href="/guidance?category=nutrition" className="block group">
            <div className="flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors">
              <span className="text-lg text-foreground">Nutritional Balance</span>
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link href="/guidance?category=lifestyle" className="block group">
            <div className="flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors">
              <span className="text-lg text-foreground">Active Lifestyle</span>
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link href="/guidance?category=sleep" className="block group">
            <div className="flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors">
              <span className="text-lg text-foreground">Restful Sleep</span>
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
