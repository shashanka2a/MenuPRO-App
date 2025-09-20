import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    content: "MenuPRO has increased our revenue by 30% while reducing operational costs. The $19/month fee is nothing compared to the commission we were paying before!",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Restaurant Manager",
    content: "Since implementing MenuPRO, our order accuracy has improved by 95% and customer satisfaction is at an all-time high. The analytics help us make better business decisions.",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Restaurant Owner",
    content: "Finally, a solution that doesn't take a cut of our sales! The flat $19/month fee means we keep 100% of our revenue. It's been a game-changer for our business.",
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