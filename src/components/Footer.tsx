import { ShieldCheck, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">Jersey Elite</span>
          </div>
          <p className="text-sm text-slate-400">
            Providing top-tier waterproofing solutions for New Jersey homeowners since 2005. Licensed & Insured.
            <br />
            <span className="text-slate-500 text-xs">Lic # 13VH13531500</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Basement Waterproofing</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Foundation Repair</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Crawl Space Encapsulation</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Sump Pump Installation</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Mold Remediation</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-orange-500 shrink-0" />
              <span>(929) 355-5351</span>
            </li>
          </ul>
        </div>

        {/* Social / Hours */}
        <div>
          <h3 className="text-white font-semibold mb-4">Business Hours</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="flex justify-between">
              <span>Everyday</span>
              <span>24 Hours</span>
            </li>
          </ul>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Jersey Elite Waterproofing. All rights reserved.
      </div>
    </footer>
  );
}
