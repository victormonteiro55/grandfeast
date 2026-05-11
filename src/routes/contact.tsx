import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Noir" },
      { name: "description", content: "Reserve a table, ask about private events, or just say hello. We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center mb-20">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Reach Out</p>
        <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">Contact</h1>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Reservations, private events, or just a hello — we'd love to hear from you.
        </p>
      </div>

      {/* Big email */}
      <div className="text-center mb-24 p-12 rounded-2xl bg-card/40 border border-border">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Email us anytime</p>
        <a
          href="mailto:hello@maisonnoir.com"
          className="block font-display text-5xl md:text-7xl lg:text-8xl text-gradient-gold hover:scale-[1.02] transition-transform break-all"
        >
          hello@maisonnoir.com
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <a
          href="https://instagram.com/maisonnoir"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-xl bg-card/40 border border-border hover:border-gold transition-all text-center"
        >
          <Instagram className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-display text-2xl mb-2">Instagram</h3>
          <p className="text-muted-foreground">@maisonnoir</p>
        </a>

        <a
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-xl bg-card/40 border border-border hover:border-gold transition-all text-center"
        >
          <MessageCircle className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-display text-2xl mb-2">WhatsApp</h3>
          <p className="text-muted-foreground">+1 (555) 123-4567</p>
        </a>

        <a
          href="mailto:hello@maisonnoir.com"
          className="group p-8 rounded-xl bg-card/40 border border-border hover:border-gold transition-all text-center"
        >
          <Mail className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-display text-2xl mb-2">Email</h3>
          <p className="text-muted-foreground">hello@maisonnoir.com</p>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-xl bg-card/40 border border-border">
          <MapPin className="w-8 h-8 text-gold mb-4" />
          <h3 className="font-display text-2xl mb-3">Find us</h3>
          <p className="text-muted-foreground leading-relaxed">
            14 Rue des Lumières<br />
            Old Quarter, 75004<br />
            Paris, France
          </p>
        </div>

        <div className="p-8 rounded-xl bg-card/40 border border-border">
          <Clock className="w-8 h-8 text-gold mb-4" />
          <h3 className="font-display text-2xl mb-3">Hours</h3>
          <ul className="text-muted-foreground space-y-1">
            <li className="flex justify-between"><span>Tue – Thu</span><span>6 PM – 11 PM</span></li>
            <li className="flex justify-between"><span>Fri – Sat</span><span>6 PM – 12 AM</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>5 PM – 10 PM</span></li>
            <li className="flex justify-between"><span>Monday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
