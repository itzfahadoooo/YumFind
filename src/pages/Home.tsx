// import Link from "next/link"
import { ChefHat, Search, Star, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2">
            <ChefHat size={36} className="text-blue-600" />
            <span className="text-3xl font-bold text-blue-600">YumFind</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-md font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-md font-medium text-gray-600 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-md font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-md font-medium text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </nav>

          <a href="/app">
            <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">Try It Now</Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Find the Perfect Recipe in Seconds
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover new meals, explore ingredients, and get step-by-step guides for your favorite dishes.
              </p>

              {/* Search Bar Preview */}
              <div className="relative">
                <Input
                  placeholder="Search for recipes or ingredients..."
                  className="h-12 pl-12 pr-4 text-base"
                  disabled
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <div className="flex gap-4 pt-4">
                <a href="/app">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    Explore Recipes
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="cursor-pointer">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <img src="/delicious-food-spread-with-various-dishes-on-a-tab.jpg" alt="Delicious food spread" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How can Recipe Finder help you?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Smart Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Find recipes by name, ingredient, or cuisine type with our powerful search engine.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ChefHat className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Detailed Instructions</h3>
              <p className="text-gray-600 leading-relaxed">
                Get step-by-step cooking instructions with ingredient lists and preparation times.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Save Favorites</h3>
              <p className="text-gray-600 leading-relaxed">
                Bookmark your favorite recipes and build your personal collection for easy access.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ChefHat className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Global Cuisines</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore recipes from around the world including Asian, European, and American dishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img
                src="/person-cooking-in-modern-kitchen-with-recipe-book.jpg"
                alt="Cooking with Recipe Finder"
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to make your next delicious meal?</h2>
              <p className="text-gray-600 leading-relaxed">
                Join thousands of home cooks already using Recipe Finder to discover and prepare amazing dishes.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Search recipes by name or ingredient</h3>
                    <p className="text-gray-600">Type in what you're craving or what ingredients you have on hand.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Explore full recipes with images</h3>
                    <p className="text-gray-600">Browse beautiful food photos and detailed recipe information.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Save your favorites for later</h3>
                    <p className="text-gray-600">Build your personal cookbook with recipes you love.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What Food Lovers Say About Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Recipe Finder has completely changed how I cook! I can find recipes for any ingredient I have in my
                fridge."
              </p>
              <div className="pt-2">
                <p className="font-semibold text-gray-900">Sarah M.</p>
                <p className="text-sm text-gray-500">Home Cook</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The search feature is incredibly helpful. I love exploring different cuisines and trying new dishes
                every week."
              </p>
              <div className="pt-2">
                <p className="font-semibold text-gray-900">James L.</p>
                <p className="text-sm text-gray-500">Food Enthusiast</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                "As a busy parent, Recipe Finder helps me plan meals quickly. The favorites feature is a lifesaver!"
              </p>
              <div className="pt-2">
                <p className="font-semibold text-gray-900">Maria G.</p>
                <p className="text-sm text-gray-500">Parent & Chef</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The variety of recipes is amazing! I've discovered so many new favorite dishes from different
                cultures."
              </p>
              <div className="pt-2">
                <p className="font-semibold text-gray-900">David K.</p>
                <p className="text-sm text-gray-500">Culinary Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Is Recipe Finder free?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes! Recipe Finder is completely free to use. You can search for recipes, view detailed instructions,
                and save your favorites without any cost.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Can I search by ingredients?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Our smart search allows you to find recipes by ingredient, dish name, or cuisine type. Just type what
                you have in your kitchen and discover what you can make.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Do I need an account?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No account is required to search and view recipes. However, creating an account allows you to save your
                favorite recipes and build your personal cookbook.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                Are cooking instructions included?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes! Each recipe includes detailed step-by-step cooking instructions, ingredient lists, preparation
                times, and beautiful food photography to guide you through the cooking process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ChefHat className="h-6 w-6" />
                <span className="text-xl font-bold">Recipe Finder</span>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Discover delicious recipes from around the world and make cooking easier and more enjoyable.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-blue-100 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-blue-100 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-blue-100 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-blue-100 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-4">Subscribe to our newsletter for new recipes and cooking tips.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <Button variant="secondary" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-blue-100 mt-4">Email: hello@recipefinder.com</p>
            </div>
          </div>

          <div className="border-t border-blue-500 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">© 2025 Recipe Finder. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
