export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Stay in the loop</h2>
          <p className="mt-2 text-neutral-600">Subscribe for fresh recipes and food stories.</p>
          <form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-md border border-neutral-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-lime-600 text-white px-5 py-3 text-sm font-medium hover:bg-lime-700 transition-colors">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-neutral-500">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
