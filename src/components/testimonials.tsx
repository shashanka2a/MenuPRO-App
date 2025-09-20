import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Blogger",
    content: "MenuPRO has completely transformed our dining experience. The digital menu is intuitive and the ordering process is seamless. No more waiting for servers!",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Restaurant Manager",
    content: "Since implementing MenuPRO, our order accuracy has improved by 95% and customer satisfaction is at an all-time high. It's a game-changer for the industry.",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Regular Customer",
    content: "I love how I can see detailed photos and ingredients for each dish. As someone with allergies, this gives me peace of mind when ordering.",
    rating: 5,
    avatar: "EW"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied diners who have experienced the future of dining
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}