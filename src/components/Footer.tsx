import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">
            Get in touch
          </p>
          <a
            href="mailto:hello@maisonnoir.com"
            className="block font-display text-4xl md:text-6xl lg:text-7xl text-gradient-gold hover:scale-[1.02] transition-transform break-all"
          >
            hello@maisonnoir.com
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://instagram.com/maisonnoir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-gold hover:bg-card transition-all group"
          >
            <Instagram className="w-5 h-5 text-gold" />
            <span className="text-sm">@maisonnoir</span>
          </a>
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-gold hover:bg-card transition-all"
          >
            <MessageCircle className="w-5 h-5 text-gold" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </a>
          <a
            href="mailto:hello@maisonnoir.com"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-gold hover:bg-card transition-all"
          >
            <Mail className="w-5 h-5 text-gold" />
            <span className="text-sm">Email us</span>
          </a>
        </div>

        <div className="text-center text-xs text-muted-foreground tracking-widest uppercase">
          © {new Date().getFullYear()} Maison Noir · Crafted with passion
        </div>
      </div>
    </footer>
  );
}
