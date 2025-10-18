import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/generated/holisticai-logo.png"
              alt="HolisticAI"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-8 text-sm">
            <Link href="/" className="text-foreground font-medium hover:text-foreground/80 transition-colors">Home</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            <Link href="/assessment" className="text-muted-foreground hover:text-foreground transition-colors">Assessment</Link>
            <Link href="/guidance" className="text-muted-foreground hover:text-foreground transition-colors">Guidance</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
