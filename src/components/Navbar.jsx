import { ChefHat, Instagram, Twitter } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lime-500 text-white">
              <ChefHat className="h-5 w-5" />
            </span>
            <span className="font-semibold text-neutral-900 tracking-tight">Tastefolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
            <a href="#recipes" className="hover:text-neutral-900 transition-colors">Recipes</a>
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="Instagram" href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <Instagram className="h-5 w-5 text-neutral-700" />
            </a>
            <a aria-label="Twitter" href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <Twitter className="h-5 w-5 text-neutral-700" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
