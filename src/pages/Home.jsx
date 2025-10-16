import { ChefHat, Search, Star, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

// const hoverScale = {
//   whileHover: { scale: 1.05 },
//   transition: { type: "spring", stiffness: 300, damping: 10 },
// }

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChefHat size={36} className="text-blue-600" />
            <span className="text-3xl font-bold text-blue-600">YumFind</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-6">
            {["Features", "How It Works", "Testimonials", "FAQ"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-md font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.a href="/app" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">Try It Now</Button>
          </motion.a>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Find the Perfect Recipe in Seconds
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
                Discover new meals, explore ingredients, and get step-by-step guides for your favorite dishes.
              </motion.p>

              <motion.div variants={itemVariants} className="relative group">
                <Input
                  placeholder="Search for recipes or ingredients..."
                  className="h-12 pl-12 pr-4 text-base"
                  disabled
                />
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  whileHover={{ scale: 1.2, color: "#2563eb" }}
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                <motion.a href="/app" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    Explore Recipes
                  </Button>
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="cursor-pointer">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/delicious-food-spread-with-various-dishes-on-a-tab.jpg"
                alt="Delicious food spread"
                className="rounded-2xl shadow-2xl"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How can Recipe Finder help you?</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Search, title: "Smart Search", desc: "Find recipes by name, ingredient, or cuisine type with our powerful search engine." },
              { icon: ChefHat, title: "Detailed Instructions", desc: "Get step-by-step cooking instructions with ingredient lists and preparation times." },
              { icon: Star, title: "Save Favorites", desc: "Bookmark your favorite recipes and build your personal collection for easy access." },
              { icon: ChefHat, title: "Global Cuisines", desc: "Explore recipes from around the world including Asian, European, and American dishes." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-gray-50 rounded-xl p-6 space-y-4 cursor-pointer"
              >
                <motion.div
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                  whileHover={{ backgroundColor: "#2563eb", color: "#fff" }}
                >
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative order-2 md:order-1"
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/person-cooking-in-modern-kitchen-with-recipe-book.jpg"
                alt="Cooking with Recipe Finder"
                className="rounded-2xl shadow-xl"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              />
            </motion.div>

            <motion.div
              className="space-y-8 order-1 md:order-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to make your next delicious meal?
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed">
                Join thousands of home cooks already using Recipe Finder to discover and prepare amazing dishes.
              </motion.p>

              <div className="space-y-6">
                {[
                  { num: 1, title: "Search recipes by name or ingredient", desc: "Type in what you're craving or what ingredients you have on hand." },
                  { num: 2, title: "Explore full recipes with images", desc: "Browse beautiful food photos and detailed recipe information." },
                  { num: 3, title: "Save your favorites for later", desc: "Build your personal cookbook with recipes you love." },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 cursor-pointer"
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold"
                      whileHover={{ scale: 1.2, backgroundColor: "#1e40af" }}
                    >
                      {step.num}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          >
            What Food Lovers Say About Us
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "Sarah M.", role: "Home Cook", text: "Recipe Finder has completely changed how I cook! I can find recipes for any ingredient I have in my fridge." },
              { name: "James L.", role: "Food Enthusiast", text: "The search feature is incredibly helpful. I love exploring different cuisines and trying new dishes every week." },
              { name: "Maria G.", role: "Parent & Chef", text: "As a busy parent, Recipe Finder helps me plan meals quickly. The favorites feature is a lifesaver!" },
              { name: "David K.", role: "Culinary Student", text: "The variety of recipes is amazing! I've discovered so many new favorite dishes from different cultures." },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 cursor-pointer"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      whileHover={{ scale: 1.2, rotate: 20 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                <div className="pt-2">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Accordion type="single" collapsible>
              {[
                { value: "item-1", title: "Is Recipe Finder free?", content: "Yes! Recipe Finder is completely free to use. You can search for recipes, view detailed instructions, and save your favorites without any cost." },
                { value: "item-2", title: "Can I search by ingredients?", content: "Our smart search allows you to find recipes by ingredient, dish name, or cuisine type. Just type what you have in your kitchen and discover what you can make." },
                { value: "item-3", title: "Do I need an account?", content: "No account is required to search and view recipes. However, creating an account allows you to save your favorite recipes and build your personal cookbook." },
                { value: "item-4", title: "Are cooking instructions included?", content: "Yes! Each recipe includes detailed step-by-step cooking instructions, ingredient lists, preparation times, and beautiful food photography to guide you through the cooking process." },
              ].map((faq, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <AccordionItem value={faq.value} className="bg-white rounded-lg border border-gray-200 px-6">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline hover:text-blue-600 transition-colors">
                      {faq.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{faq.content}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-12 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <ChefHat className="h-6 w-6" />
                <span className="text-xl font-bold">Recipe Finder</span>
              </motion.div>
              <p className="text-blue-100 leading-relaxed">
                Discover delicious recipes from around the world and make cooking easier and more enjoyable.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Features", "How It Works", "FAQ"].map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a href="/" className="text-blue-100 hover:text-white transition-colors">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-4">Subscribe to our newsletter for new recipes and cooking tips.</p>
              <motion.div className="flex gap-2" whileHover={{ scale: 1.05 }}>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
              <p className="text-sm text-blue-100 mt-4">Email: hello@recipefinder.com</p>
            </motion.div>
          </motion.div>

          <div className="border-t border-blue-500 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">© 2025 Recipe Finder. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy) => (
                <motion.a
                  key={policy}
                  href="#"
                  className="text-blue-100 hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  {policy}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}