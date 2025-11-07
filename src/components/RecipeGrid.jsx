import { Star } from 'lucide-react';

const recipes = [
  {
    title: 'Citrus Avocado Salad',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop',
    tag: 'Quick Bites',
    rating: 4.8,
  },
  {
    title: 'Herbed Pasta Primavera',
    img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1600&auto=format&fit=crop',
    tag: 'Weeknight',
    rating: 4.9,
  },
  {
    title: 'Roasted Veggie Bowl',
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1600&auto=format&fit=crop',
    tag: 'Plant-based',
    rating: 4.7,
  },
  {
    title: 'Berry Yogurt Parfait',
    img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1600&auto=format&fit=crop',
    tag: 'Breakfast',
    rating: 4.6,
  },
];

function RecipeCard({ title, img, tag, rating }) {
  return (
    <article className="group rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2 py-1 text-xs font-medium text-neutral-700 border border-neutral-200">
          {tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 line-clamp-1">{title}</h3>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-amber-400" />
          <span className="text-sm text-neutral-600">{rating}</span>
        </div>
        <button className="mt-4 w-full rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">View Recipe</button>
      </div>
    </article>
  );
}

export default function RecipeGrid() {
  return (
    <section id="recipes" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Featured Recipes</h2>
            <p className="text-neutral-600 mt-1">Seasonal favorites curated from my kitchen.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-lime-700 hover:text-lime-800">See all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((r) => (
            <RecipeCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
