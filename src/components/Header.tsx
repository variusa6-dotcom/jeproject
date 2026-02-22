import { useState } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-blue-900" />
          <span className="text-xl font-bold tracking-tight text-blue-900">
            Jersey Elite Waterproofing
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-blue-900 transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium hover:text-blue-900 transition-colors">
            About Us
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-blue-900 transition-colors">
            Testimonials
          </a>
          <Button variant="secondary" size="sm" className="gap-2">
            <Phone className="h-4 w-4" />
            (929) 355-5351
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white"
          >
            <nav className="flex flex-col p-4 gap-4">
              <a
                href="#services"
                className="text-sm font-medium hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm font-medium hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <Button variant="secondary" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
