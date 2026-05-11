import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export function Header() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="w-full bg-background/90 border-b border-border/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-end gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold">🌐 Language</span>
          <div id="google_translate_element" className="min-w-[160px]" />
        </div>
      </div>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl tracking-wider text-gradient-gold">
              MAISON
            </span>
            <span className="font-display text-2xl tracking-wider text-foreground">
              NOIR
            </span>
          </Link>

          <nav className="flex items-center gap-6 md:gap-10 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/" activeProps={{ className: "text-gold" }} activeOptions={{ exact: true }} className="hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/menu" activeProps={{ className: "text-gold" }} className="hover:text-gold transition-colors">
              Menu
            </Link>
            <Link to="/recipes" activeProps={{ className: "text-gold" }} className="hover:text-gold transition-colors">
              Recipes
            </Link>
            <Link to="/contact" activeProps={{ className: "text-gold" }} className="hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
