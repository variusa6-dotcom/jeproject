import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "John D.",
    location: "Newark, NJ",
    text: "Jersey Elite Waterproofing saved my basement! After years of flooding, their team installed a new sump pump and drainage system. Not a drop of water since.",
    rating: 5
  },
  {
    name: "Sarah M.",
    location: "Jersey City, NJ",
    text: "Professional, clean, and on time. They explained everything clearly and the price was fair. Highly recommend for foundation repair.",
    rating: 5
  },
  {
    name: "Mike R.",
    location: "Hoboken, NJ",
    text: "Excellent service. The crawl space encapsulation made a huge difference in the air quality of our home. Thanks guys!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            We take pride in our work and our reputation. See why homeowners trust Jersey Elite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-800/50 p-8 rounded-xl backdrop-blur-sm border border-blue-700"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-blue-100 italic mb-6">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <span className="text-sm text-blue-300">{testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
