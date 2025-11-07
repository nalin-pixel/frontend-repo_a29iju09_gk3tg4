import { ArrowRight, Salad } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-lime-50 via-white to-white" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-lime-100 text-lime-700 px-3 py-1 text-xs font-medium mb-4">
              <Salad className="h-4 w-4" /> Fresh & Flavorful
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              A personal corner for recipes, food stories, and tasty experiments
            </h1>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Welcome to my food-focused world. I share simple, seasonal recipes, kitchen tips, and curated bites from my culinary adventures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#recipes" className="inline-flex items-center gap-2 rounded-md bg-lime-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-lime-700 transition-colors">
                Explore Recipes <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-neutral-800 transition-colors">
                About Me
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-lime-100 to-emerald-100 p-2">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"
                alt="Fresh salad bowl"
                className="h-full w-full object-cover rounded-xl shadow"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
