import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import pastaImg from "@/assets/dish-pasta.jpg";
import steakImg from "@/assets/dish-steak.jpg";
import dessertImg from "@/assets/dish-dessert.jpg";
import seabassImg from "@/assets/dish-seabass.jpg";
import duckImg from "@/assets/dish-duck.jpg";
import burrataImg from "@/assets/dish-burrata.jpg";
import wellingtonImg from "@/assets/dish-wellington.jpg";
import negroniImg from "@/assets/drink-negroni.jpg";
import oldFashionedImg from "@/assets/drink-oldfashioned.jpg";
import champagneImg from "@/assets/drink-champagne.jpg";
import baroloImg from "@/assets/drink-barolo.jpg";
import waterImg from "@/assets/drink-water.jpg";
import espressoImg from "@/assets/drink-espresso.jpg";

export const Route = createFileRoute("/virtual-menu")({
  head: () => ({
    meta: [
      { title: "Cardapio — Grand Feast" },
      {
        name: "description",
        content:
          "Browse our interactive menu with foods, drinks and prices.",
      },
    ],
  }),
  component: VirtualMenuPage,
});

type Item = {
  name: string;
  desc: string;
  price: number;
  img: string;
  category: "Food" | "Drink";
  tag?: string;
};

const ITEMS: Item[] = [
  {
    name: "Black Truffle Tagliolini",
    desc: "Hand-rolled pasta, brown butter, Parmigiano 36-month",
    price: 38,
    img: pastaImg,
    category: "Food",
    tag: "Signature",
  },
  {
    name: "Wagyu Tenderloin",
    desc: "Bone marrow butter, charred shallot, red wine jus",
    price: 72,
    img: steakImg,
    category: "Food",
    tag: "Chef's Pick",
  },
  {
    name: "Atlantic Sea Bass",
    desc: "Saffron beurre blanc, fennel, Castelvetrano olives",
    price: 44,
    img: seabassImg,
    category: "Food",
  },
  {
    name: "Confit Duck Leg",
    desc: "Cherry gastrique, parsnip purée, crispy sage",
    price: 42,
    img: duckImg,
    category: "Food",
  },
  {
    name: "Burrata della Casa",
    desc: "Fig confit, aged balsamic, toasted hazelnut",
    price: 22,
    img: burrataImg,
    category: "Food",
  },
  {
    name: "Wild Mushroom Wellington",
    desc: "Spinach, chestnut, madeira reduction",
    price: 36,
    img: wellingtonImg,
    category: "Food",
    tag: "Vegetarian",
  },
  {
    name: "Molten Chocolate Sphere",
    desc: "Tahitian vanilla cream, gold leaf, raspberry coulis",
    price: 16,
    img: dessertImg,
    category: "Food",
    tag: "Dessert",
  },
  {
    name: "Crème Brûlée",
    desc: "Madagascar vanilla, cracked sugar shell",
    price: 14,
    img: dessertImg,
    category: "Food",
    tag: "Dessert",
  },
  {
    name: "Maison Negroni",
    desc: "House-infused gin, rosso vermouth, orange bitters",
    price: 18,
    img: negroniImg,
    category: "Drink",
    tag: "Cocktail",
  },
  {
    name: "Smoked Old Fashioned",
    desc: "Bourbon, demerara, applewood smoke",
    price: 20,
    img: oldFashionedImg,
    category: "Drink",
    tag: "Cocktail",
  },
  {
    name: "Champagne Rosé · Glass",
    desc: "Laurent-Perrier Cuvée, France",
    price: 28,
    img: champagneImg,
    category: "Drink",
    tag: "Wine",
  },
  {
    name: "Barolo DOCG · Bottle",
    desc: "Nebbiolo, Piedmont, Italy 2019",
    price: 140,
    img: baroloImg,
    category: "Drink",
    tag: "Wine",
  },
  {
    name: "Sparkling Water · 750ml",
    desc: "Acqua Panna or San Pellegrino",
    price: 8,
    img: waterImg,
    category: "Drink",
  },
  {
    name: "Espresso",
    desc: "Single-origin Ethiopian, hand-pulled",
    price: 5,
    img: espressoImg,
    category: "Drink",
  },
];

const FILTERS = ["All", "Food", "Drink"] as const;
type Filter = (typeof FILTERS)[number];

function VirtualMenuPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = ITEMS.filter((i) => filter === "All" || i.category === filter);

  // Re-trigger Google Translate after every re-render so newly mounted
  // text nodes (filter changes, item swaps) get translated to the active language.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const m = document.cookie.match(/googtrans=\/[a-z-]+\/([a-z-]+)/i);
    const lang = m?.[1];
    if (!lang || lang === "en") return;
    const trigger = () => {
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }
    };
    const t = setTimeout(trigger, 80);
    return () => clearTimeout(t);
  }, [filter]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">
          Interactive Experience
        </p>
        <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">
          Cardapio
        </h1>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Browse our foods and drinks with real-time pricing.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-14">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 text-xs uppercase tracking-[0.3em] rounded-full border transition-all ${
              filter === f
                ? "bg-gold text-background border-gold"
                : "border-border text-muted-foreground hover:border-gold hover:text-gold"
            }`}
          >
            <span translate="yes">{f}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <article
            key={item.name}
            className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card hover:shadow-elegant transition-all duration-500"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              {item.tag && (
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.25em] bg-background/80 backdrop-blur-md text-gold border border-gold/40 rounded-full">
                  {item.tag}
                </span>
              )}
              <span className="absolute bottom-4 left-4 right-4 font-display text-2xl text-white drop-shadow-lg">
                {item.name}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <span className="font-display text-2xl text-gold whitespace-nowrap notranslate">
                  ${item.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span translate="yes">{item.category}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mt-16">
        Service charge included
      </p>
    </div>
  );
}
