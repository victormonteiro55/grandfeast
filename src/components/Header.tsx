import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const LANGUAGES: { code: string; name: string }[] = [
  { code: "en", name: "English" },
  { code: "af", name: "Afrikaans" },
  { code: "sq", name: "Albanian" },
  { code: "am", name: "Amharic" },
  { code: "ar", name: "Arabic" },
  { code: "hy", name: "Armenian" },
  { code: "az", name: "Azerbaijani" },
  { code: "eu", name: "Basque" },
  { code: "be", name: "Belarusian" },
  { code: "bn", name: "Bengali" },
  { code: "bs", name: "Bosnian" },
  { code: "bg", name: "Bulgarian" },
  { code: "ca", name: "Catalan" },
  { code: "ceb", name: "Cebuano" },
  { code: "ny", name: "Chichewa" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "zh-TW", name: "Chinese (Traditional)" },
  { code: "co", name: "Corsican" },
  { code: "hr", name: "Croatian" },
  { code: "cs", name: "Czech" },
  { code: "da", name: "Danish" },
  { code: "nl", name: "Dutch" },
  { code: "eo", name: "Esperanto" },
  { code: "et", name: "Estonian" },
  { code: "tl", name: "Filipino" },
  { code: "fi", name: "Finnish" },
  { code: "fr", name: "French" },
  { code: "fy", name: "Frisian" },
  { code: "gl", name: "Galician" },
  { code: "ka", name: "Georgian" },
  { code: "de", name: "German" },
  { code: "el", name: "Greek" },
  { code: "gu", name: "Gujarati" },
  { code: "ht", name: "Haitian Creole" },
  { code: "ha", name: "Hausa" },
  { code: "haw", name: "Hawaiian" },
  { code: "iw", name: "Hebrew" },
  { code: "hi", name: "Hindi" },
  { code: "hmn", name: "Hmong" },
  { code: "hu", name: "Hungarian" },
  { code: "is", name: "Icelandic" },
  { code: "ig", name: "Igbo" },
  { code: "id", name: "Indonesian" },
  { code: "ga", name: "Irish" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japanese" },
  { code: "jw", name: "Javanese" },
  { code: "kn", name: "Kannada" },
  { code: "kk", name: "Kazakh" },
  { code: "km", name: "Khmer" },
  { code: "rw", name: "Kinyarwanda" },
  { code: "ko", name: "Korean" },
  { code: "ku", name: "Kurdish" },
  { code: "ky", name: "Kyrgyz" },
  { code: "lo", name: "Lao" },
  { code: "la", name: "Latin" },
  { code: "lv", name: "Latvian" },
  { code: "lt", name: "Lithuanian" },
  { code: "lb", name: "Luxembourgish" },
  { code: "mk", name: "Macedonian" },
  { code: "mg", name: "Malagasy" },
  { code: "ms", name: "Malay" },
  { code: "ml", name: "Malayalam" },
  { code: "mt", name: "Maltese" },
  { code: "mi", name: "Maori" },
  { code: "mr", name: "Marathi" },
  { code: "mn", name: "Mongolian" },
  { code: "my", name: "Myanmar (Burmese)" },
  { code: "ne", name: "Nepali" },
  { code: "no", name: "Norwegian" },
  { code: "or", name: "Odia" },
  { code: "ps", name: "Pashto" },
  { code: "fa", name: "Persian" },
  { code: "pl", name: "Polish" },
  { code: "pt", name: "Portuguese" },
  { code: "pa", name: "Punjabi" },
  { code: "ro", name: "Romanian" },
  { code: "ru", name: "Russian" },
  { code: "sm", name: "Samoan" },
  { code: "gd", name: "Scots Gaelic" },
  { code: "sr", name: "Serbian" },
  { code: "st", name: "Sesotho" },
  { code: "sn", name: "Shona" },
  { code: "sd", name: "Sindhi" },
  { code: "si", name: "Sinhala" },
  { code: "sk", name: "Slovak" },
  { code: "sl", name: "Slovenian" },
  { code: "so", name: "Somali" },
  { code: "es", name: "Spanish" },
  { code: "su", name: "Sundanese" },
  { code: "sw", name: "Swahili" },
  { code: "sv", name: "Swedish" },
  { code: "tg", name: "Tajik" },
  { code: "ta", name: "Tamil" },
  { code: "tt", name: "Tatar" },
  { code: "te", name: "Telugu" },
  { code: "th", name: "Thai" },
  { code: "tr", name: "Turkish" },
  { code: "tk", name: "Turkmen" },
  { code: "uk", name: "Ukrainian" },
  { code: "ur", name: "Urdu" },
  { code: "ug", name: "Uyghur" },
  { code: "uz", name: "Uzbek" },
  { code: "vi", name: "Vietnamese" },
  { code: "cy", name: "Welsh" },
  { code: "xh", name: "Xhosa" },
  { code: "yi", name: "Yiddish" },
  { code: "yo", name: "Yoruba" },
  { code: "zu", name: "Zulu" },
];

function setTranslateCookie(lang: string) {
  const value = lang === "en" ? "/en/en" : `/en/${lang}`;
  const domain = window.location.hostname;
  // Set on current host and parent domain so the widget picks it up
  document.cookie = `googtrans=${value};path=/`;
  document.cookie = `googtrans=${value};path=/;domain=${domain}`;
  const parts = domain.split(".");
  if (parts.length > 1) {
    const parent = "." + parts.slice(-2).join(".");
    document.cookie = `googtrans=${value};path=/;domain=${parent}`;
  }
}

function getCurrentLang(): string {
  const m = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
  return m ? m[1] : "en";
}

export function Header() {
  const initialized = useRef(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(getCurrentLang());
    if (initialized.current) return;
    initialized.current = true;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: LANGUAGES.map((l) => l.code).join(","),
        },
        "google_translate_hidden"
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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value;
    setLang(next);
    setTranslateCookie(next);
    // Trigger Google Translate combo immediately (no reload, so cookie isn't lost)
    const tryApply = (attempt = 0) => {
      const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (combo) {
        combo.value = next;
        combo.dispatchEvent(new Event("change"));
        return;
      }
      if (attempt < 20) setTimeout(() => tryApply(attempt + 1), 150);
    };
    tryApply();
  };

  return (
    <>
      <div className="w-full bg-background/90 border-b border-border/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-11 flex items-center justify-end gap-3">
          <Globe className="w-4 h-4 text-gold" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold hidden sm:inline">
            Language
          </span>
          <select
            value={lang}
            onChange={handleChange}
            className="notranslate bg-card border border-border text-foreground text-sm rounded-md px-3 py-1.5 hover:border-gold focus:border-gold focus:outline-none cursor-pointer min-w-[170px]"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code} className="bg-background text-foreground">
                {l.name}
              </option>
            ))}
          </select>
          <div id="google_translate_hidden" style={{ display: "none" }} />
        </div>
      </div>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group notranslate">
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
            <Link to="/virtual-menu" activeProps={{ className: "text-gold" }} className="hover:text-gold transition-colors">
              Cardapio
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
