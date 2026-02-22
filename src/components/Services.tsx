import { motion } from 'motion/react';
import { Droplets, ShieldCheck, Home, Hammer, Wrench, Warehouse } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: "Basement Waterproofing",
    description: "Keep your basement dry with our advanced drainage systems and sealants. Prevent mold and water damage for good."
  },
  {
    icon: ShieldCheck,
    title: "Foundation Repair",
    description: "Fix cracks, bowing walls, and settling foundations. We restore the structural integrity of your home."
  },
  {
    icon: Warehouse, // Using Warehouse as a proxy for Crawl Space
    title: "Crawl Space Encapsulation",
    description: "Seal your crawl space from moisture and pests. Improve air quality and energy efficiency."
  },
  {
    icon: Wrench,
    title: "Sump Pump Installation",
    description: "Reliable sump pump systems with battery backups to keep water out, even during power outages."
  },
  {
    icon: Hammer,
    title: "Mold Remediation",
    description: "Safe and effective mold removal. We identify the source and prevent it from coming back."
  },
  {
    icon: Home,
    title: "Exterior Drainage",
    description: "Manage surface water with french drains, grading, and downspout extensions to protect your foundation."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive waterproofing and foundation solutions tailored to your home's specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
