import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">MenuPRO</h3>
            <p className="text-gray-400 mb-4">
              Transforming the dining experience with innovative digital menu solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MenuPRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}