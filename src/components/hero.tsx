import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onLaunchApp: () => void;
}

export function Hero({ onLaunchApp }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmclMjByZXN0YXVyYW50fGVufDF8fHx8MTc1ODQwMzE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gourmet food plating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforming Dining with Digital Menu
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Experience the future of restaurant ordering with our intuitive digital menu system
        </p>
        <Button 
          onClick={onLaunchApp}
          size="lg" 
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-xl rounded-full"
        >
          Order Now
        </Button>
      </div>
    </section>
  );
}