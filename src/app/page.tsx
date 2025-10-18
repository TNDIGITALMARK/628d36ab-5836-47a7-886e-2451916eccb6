import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation - Minimal Design */}
      <header className="border-b border-border">
        <div className="container mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <span className="text-xl font-medium text-foreground tracking-tight">HolisticAI</span>
            <div className="flex items-center gap-8 text-sm">
              <Link href="/" className="text-foreground font-medium">Home</Link>
              <Link href="/assessment" className="text-muted-foreground hover:text-foreground transition-colors">Assessment</Link>
              <Link href="/guidance" className="text-muted-foreground hover:text-foreground transition-colors">Guidance</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Minimal Design */}
      <section className="container mx-auto px-8 py-24 md:py-32">
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

      {/* Footer - Minimal */}
      <footer className="border-t border-border mt-24">
        <div className="container mx-auto px-8 py-12">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">© 2025 HolisticAI</span>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
