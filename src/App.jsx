import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Tastefolio. Crafted with love and lots of olive oil.</p>
        <a href="#top" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Back to top</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900" id="top">
      <Navbar />
      <main>
        <Hero />
        <RecipeGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
