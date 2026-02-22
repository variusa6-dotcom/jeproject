import { motion } from 'motion/react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              New Jersey's Premier Waterproofing Specialists
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              At Jersey Elite Waterproofing, we understand that your home is your biggest investment. For over 20 years, we've been protecting New Jersey homes from water damage, mold, and foundation issues.
            </p>
            <p className="text-slate-600 mb-8">
              Our team of certified technicians uses state-of-the-art technology and proven methods to ensure your basement and crawl space stay dry permanently. We don't just patch problems; we provide lasting solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span className="font-medium text-slate-900">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Users className="h-5 w-5 text-orange-600" />
                <span className="font-medium text-slate-900">Certified Experts</span>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Award className="h-5 w-5 text-orange-600" />
                <div className="flex flex-col text-left">
                  <span className="font-medium text-slate-900">Licensed & Insured</span>
                  <span className="text-xs text-slate-500">Lic # 13VH13531500</span>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Clock className="h-5 w-5 text-orange-600" />
                <span className="font-medium text-slate-900">24/7 Emergency Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
