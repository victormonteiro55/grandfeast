import { createFileRoute } from "@tanstack/react-router";
import pastaImg from "@/assets/dish-pasta.jpg";
import steakImg from "@/assets/dish-steak.jpg";
import dessertImg from "@/assets/dish-dessert.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Maison Noir" },
      { name: "description", content: "A seasonal menu of starters, mains, desserts and a curated drinks list. Each dish crafted with intention." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; img?: string };

const sections: { title: string; items: Item[] }[] = [
  {
    title: "Starters",
    items: [
      { name: "Heirloom Tomato Tartare", desc: "Basil oil, smoked sea salt, sourdough crisp", price: "$18" },
      { name: "Burrata della Casa", desc: "Fig confit, aged balsamic, toasted hazelnut", price: "$22" },
      { name: "Tuna Crudo", desc: "Yuzu kosho, avocado, micro shiso", price: "$26" },
      { name: "Truffle Risotto Croquettes", desc: "Aged parmesan, black truffle aioli", price: "$19" },
    ],
  },
  {
    title: "Mains",
    items: [
      { name: "Black Truffle Tagliolini", desc: "Hand-rolled pasta, brown butter, Parmigiano 36-month", price: "$38", img: pastaImg },
      { name: "Wagyu Tenderloin", desc: "Bone marrow butter, charred shallot, red wine jus", price: "$72", img: steakImg },
      { name: "Atlantic Sea Bass", desc: "Saffron beurre blanc, fennel, Castelvetrano olives", price: "$44" },
      { name: "Confit Duck Leg", desc: "Cherry gastrique, parsnip purée, crispy sage", price: "$42" },
      { name: "Wild Mushroom Wellington", desc: "Spinach, chestnut, madeira reduction", price: "$36" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Molten Chocolate Sphere", desc: "Tahitian vanilla cream, gold leaf, raspberry coulis", price: "$16", img: dessertImg },
      { name: "Crème Brûlée", desc: "Madagascar vanilla, cracked sugar shell", price: "$14" },
      { name: "Tarte au Citron", desc: "Meyer lemon curd, torched Italian meringue", price: "$15" },
    ],
  },
  {
    title: "Drinks & Wines",
    items: [
      { name: "Maison Negroni", desc: "House-infused gin, rosso vermouth, orange bitters", price: "$18" },
      { name: "Smoked Old Fashioned", desc: "Bourbon, demerara, applewood smoke", price: "$20" },
      { name: "Champagne Rosé · Glass", desc: "Laurent-Perrier Cuvée, France", price: "$28" },
      { name: "Barolo DOCG · Bottle", desc: "Nebbiolo, Piedmont, Italy 2019", price: "$140" },
      { name: "Sparkling Water · 750ml", desc: "Acqua Panna or San Pellegrino", price: "$8" },
      { name: "Espresso", desc: "Single-origin Ethiopian, hand-pulled", price: "$5" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center mb-20">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Seasonal Selection</p>
        <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">Menu</h1>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Crafted weekly from the season's finest. Prices in USD. Service charge included.
        </p>
      </div>

      <div className="space-y-24">
        {sections.map((section) => (
          <section key={section.title}>
            <div className="flex items-baseline gap-6 mb-10">
              <h2 className="font-display text-4xl md:text-5xl text-foreground">{section.title}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gold/60 to-transparent" />
            </div>
            <div className="space-y-2">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-start gap-6 p-5 -mx-5 rounded-lg hover:bg-card/60 transition-colors"
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="w-20 h-20 rounded-md object-cover shadow-card flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-4">
                      <h3 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex-1 border-b border-dashed border-border/60 translate-y-[-4px]" />
                      <span className="font-display text-2xl text-gold whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="mt-2 text-muted-foreground italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
