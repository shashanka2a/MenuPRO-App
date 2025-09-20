import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Truffle Pasta",
    description: "Hand-made pasta with black truffle, parmesan, and wild mushrooms",
    price: "$28",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1711539137930-3fa2ae6cec60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzU4Mzc3NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Popular"
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Atlantic salmon with roasted vegetables and lemon herb sauce",
    price: "$32",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1758157836016-3f3fbc5bf796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwbWVhbHxlbnwxfHx8fDE3NTg0MDMxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Chef's Choice"
  },
  {
    id: 3,
    name: "Artisan Pizza",
    description: "Wood-fired pizza with fresh mozzarella, basil, and San Marzano tomatoes",
    price: "$24",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1646257099268-c560a1230dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwcGl6emElMjBzbGljZXxlbnwxfHx8fDE3NTg0MDMxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "New"
  },
  {
    id: 4,
    name: "Garden Salad",
    description: "Fresh mixed greens with seasonal vegetables and house vinaigrette",
    price: "$18",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NTgzMDAzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Healthy"
  }
];

export function MenuGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Featured Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our chef's carefully crafted dishes made with the finest ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-orange-600 text-white">
                  {item.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}