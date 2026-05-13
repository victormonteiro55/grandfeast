import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import pastaImg from "@/assets/dish-pasta.jpg";
import steakImg from "@/assets/dish-steak.jpg";
import dessertImg from "@/assets/dish-dessert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grand Feast — Fine Dining Restaurant" },
      { name: "description", content: "Where cuisine meets craft. Discover signature dishes, timeless atmosphere, and an unforgettable dining experience." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Elegant restaurant interior"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Established 2014 · A Culinary Sanctuary
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl">
            <span className="block text-foreground">Where flavor</span>
            <span className="block text-gradient-gold italic">becomes art.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            An intimate fine-dining experience crafted by Chef Antoine Laurent, blending
            seasonal ingredients with timeless technique.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wider uppercase text-sm hover:opacity-90 transition-opacity shadow-elegant"
            >
              View the Menu
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-gold text-gold font-medium tracking-wider uppercase text-sm hover:bg-gold hover:text-primary-foreground transition-all"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Our Story</p>
            <h2 className="font-display text-5xl md:text-6xl mb-8 leading-tight">
              A decade of <em className="text-gradient-gold">devotion</em> to the craft.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Tucked into a quiet corner of the old quarter, Grand Feast was born from a
                simple conviction: that a meal should feel like a moment suspended in time.
              </p>
              <p>
                Our kitchen draws from the markets of Provence, the coast of Brittany, and the
                farms just beyond the city — translating each into something unmistakably ours.
              </p>
              <p>
                Every plate is a quiet conversation between fire, salt, season, and memory.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={pastaImg} alt="Truffle pasta" width={1024} height={1024} loading="lazy" className="rounded-lg shadow-card aspect-square object-cover translate-y-8" />
            <img src={steakImg} alt="Wagyu steak" width={1024} height={1024} loading="lazy" className="rounded-lg shadow-card aspect-square object-cover" />
            <img src={dessertImg} alt="Chocolate dessert" width={1024} height={1024} loading="lazy" className="rounded-lg shadow-card aspect-square object-cover col-span-2" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-card/40 border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            { n: "10", label: "Years of craft" },
            { n: "1★", label: "Michelin recognized" },
            { n: "32", label: "Seasonal dishes monthly" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-6xl md:text-7xl text-gradient-gold mb-3">{s.n}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="font-display text-5xl md:text-6xl mb-6">
          Discover what's <em className="text-gradient-gold">on the table.</em>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Browse our seasonal menu, or peek behind the curtain with our chef's recipes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/menu" className="px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wider uppercase text-sm hover:opacity-90 transition-opacity shadow-elegant">
            Explore Menu
          </Link>
          <Link to="/recipes" className="px-8 py-4 border border-border hover:border-gold transition-colors font-medium tracking-wider uppercase text-sm">
            Read Recipes
          </Link>
        </div>
      </section>
    </div>
  );
}
