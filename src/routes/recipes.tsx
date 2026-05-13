import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import pastaImg from "@/assets/dish-pasta.jpg";
import steakImg from "@/assets/dish-steak.jpg";
import dessertImg from "@/assets/dish-dessert.jpg";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [
      { title: "Recipes — Grand Feast" },
      { name: "description", content: "Step into our kitchen. Recreate signature Grand Feast dishes at home with the chef's own recipes." },
    ],
  }),
  component: RecipesPage,
});

type Recipe = {
  title: string;
  subtitle: string;
  time: string;
  servings: string;
  difficulty: string;
  img: string;
  ingredients: string[];
  steps: string[];
};

const recipes: Recipe[] = [
  {
    title: "Black Truffle Tagliolini",
    subtitle: "Silky hand-rolled pasta in brown butter and aged Parmigiano",
    time: "45 min",
    servings: "4",
    difficulty: "Intermediate",
    img: pastaImg,
    ingredients: [
      "400g fresh tagliolini (or tagliatelle)",
      "120g unsalted butter",
      "30g fresh black truffle, shaved",
      "80g Parmigiano-Reggiano (36-month), grated",
      "Sea salt & cracked black pepper",
      "1 tbsp truffle oil (optional)",
    ],
    steps: [
      "Bring a large pot of generously salted water to a rolling boil.",
      "Melt butter in a wide pan over medium-low heat until it turns golden and nutty (~4 min).",
      "Cook the pasta until just al dente, reserving 1 cup of pasta water.",
      "Toss the pasta in the brown butter with a splash of pasta water until glossy.",
      "Off heat, fold in Parmigiano and most of the truffle. Plate and finish with remaining shavings, pepper and a drizzle of truffle oil.",
    ],
  },
  {
    title: "Pan-Seared Steak with Bone Marrow Butter",
    subtitle: "A perfect crust, a soft center, and the deepest umami finish",
    time: "30 min",
    servings: "2",
    difficulty: "Easy",
    img: steakImg,
    ingredients: [
      "2 ribeye steaks, 300g each, room temperature",
      "Sea salt flakes & coarse black pepper",
      "2 tbsp grapeseed oil",
      "60g bone marrow butter (or unsalted butter + 1 tsp roasted marrow)",
      "3 sprigs thyme, 2 garlic cloves crushed",
    ],
    steps: [
      "Pat steaks completely dry. Season heavily with salt 40 minutes before cooking.",
      "Heat a cast-iron pan until smoking. Add oil, then steaks. Do not move for 3 minutes.",
      "Flip, add butter, thyme and garlic. Baste continuously for 2–3 minutes.",
      "Rest steaks on a warm board for 8 minutes — this is non-negotiable.",
      "Slice against the grain, finish with marrow butter and flaky salt.",
    ],
  },
  {
    title: "Molten Chocolate Sphere",
    subtitle: "A dark chocolate dome that breaks open to a flowing center",
    time: "1 hr",
    servings: "6",
    difficulty: "Advanced",
    img: dessertImg,
    ingredients: [
      "200g 70% dark chocolate",
      "180g unsalted butter",
      "4 whole eggs + 4 yolks",
      "120g caster sugar",
      "60g all-purpose flour",
      "Pinch of fleur de sel",
      "Fresh raspberries & gold leaf to serve",
    ],
    steps: [
      "Butter and lightly cocoa-dust 6 dariole molds. Preheat oven to 200°C (400°F).",
      "Melt chocolate and butter together over a bain-marie until silky.",
      "Whisk eggs, yolks and sugar until pale and tripled in volume.",
      "Fold chocolate mixture into eggs, then sift in flour and salt — do not overmix.",
      "Fill molds 3/4. Bake 9 minutes exactly. Invert onto plates, garnish, serve immediately.",
    ],
  },
];

function RecipesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center mb-20">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">From our kitchen to yours</p>
        <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">Recipes</h1>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Three signature dishes from Chef Antoine, written exactly as he prepares them.
        </p>
      </div>

      <div className="space-y-8">
        {recipes.map((r, i) => {
          const isOpen = open === i;
          return (
            <article
              key={r.title}
              className="bg-card/40 border border-border rounded-xl overflow-hidden shadow-card transition-all"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left grid md:grid-cols-[280px_1fr] gap-0 items-stretch"
              >
                <img
                  src={r.img}
                  alt={r.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
                />
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="font-display text-3xl md:text-4xl mb-2 text-foreground">{r.title}</h2>
                  <p className="text-muted-foreground italic mb-5">{r.subtitle}</p>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider">
                    <span className="px-3 py-1 rounded-full border border-gold/40 text-gold">{r.time}</span>
                    <span className="px-3 py-1 rounded-full border border-border text-muted-foreground">Serves {r.servings}</span>
                    <span className="px-3 py-1 rounded-full border border-border text-muted-foreground">{r.difficulty}</span>
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 p-8 md:p-12 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Ingredients</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      {r.ingredients.map((ing) => (
                        <li key={ing} className="flex gap-3">
                          <span className="text-gold mt-1">·</span>
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Method</h3>
                    <ol className="space-y-5">
                      {r.steps.map((step, idx) => (
                        <li key={step} className="flex gap-4">
                          <span className="font-display text-2xl text-gold flex-shrink-0 w-8">{idx + 1}</span>
                          <span className="text-foreground/90 leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
