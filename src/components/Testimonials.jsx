import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import image from '../assets/react.svg';

const TestimonialsCarousel = () => {
  const scrollRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Innovative Digital Computers transformed our security infrastructure. Their endpoint and firewall solutions have given us peace of mind. Professional team, delivered on time.",
      author: "James Kamau",
      position: "IT Director",
      company: "Frepers Security",
      avatar: "../assets/react.svg",
      stars: 5
    },
    {
      id: 2,
      text: "We needed a partner who could handle our growing data and networking needs. They designed and implemented our campus network—reliable, scalable, and well documented. Highly recommend.",
      author: "Grace Wanjiku",
      position: "Operations Manager",
      company: "Hi Tech Data Group",
      avatar: "/api/placeholder/80/80",
      stars: 4
    },
    {
      id: 3,
      text: "From CRM to ERP and website development, they've been our go-to tech partner. East Africa Tech Solutions has grown with their support. Responsive, knowledgeable, and truly invested in our success.",
      author: "Peter Omondi",
      position: "CEO",
      company: "East Africa Tech Solutions",
      avatar: "/api/placeholder/80/80",
      stars: 3
    },
    {
      id: 4,
      text: "Their VPN and surveillance solutions helped us secure our branches across the country. Clear communication, fair pricing, and support that doesn't end after go-live. A trusted vendor.",
      author: "Mary Akinyi",
      position: "Head of Security",
      company: "Frepers Security",
      avatar: "/api/placeholder/80/80",
      stars: 4
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  useEffect(() => {
    if (!isInitialized && scrollRef.current) {
      setIsInitialized(true);
      
      const scrollAnimation = () => {
        if (scrollRef.current) {
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 3) {
            scrollRef.current.style.transition = 'none';
            scrollRef.current.scrollLeft = 0;
            void scrollRef.current.offsetHeight;
          }
          
          scrollRef.current.style.transition = 'scroll-left 30s linear';
          scrollRef.current.scrollLeft += 1;
        }
        
        requestAnimationFrame(scrollAnimation);
      };
      
      const animationId = requestAnimationFrame(scrollAnimation);
      return () => cancelAnimationFrame(animationId);
    }
  }, [isInitialized]);

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hear From Our Clients</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide flex "
              style={{ 
                scrollBehavior: 'smooth', 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {duplicatedTestimonials.map((testimonial, idx) => (
                <div 
                  key={`${testimonial.id}-${idx}`} 
                  className="w-80 flex-shrink-0 mx-4"
                >
                    <div className='flex items-center justify-center h-full flex-col'>
                    <div className="h-32 w-24 rounded-full overflow-hidden shadow-lg mr-4 z-1000 flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={testimonial.author} 
                          className="w-20 h-20 object-contain" 
                        />
                      </div>
                      
                  <div className="relative -top-10 bg-white rounded-3xl shadow-lg p-6 h-full flex items-center justify-center flex-col">
                    <div className="flex items-center mb-4 mt-4">
                      <div className="flex">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} size={18} className="text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 text-sm italic">
                      "{testimonial.text}"
                    </blockquote>

                    
                      
                      <div className="text-center flex items-center justify-between space-x-10">
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        {/* <div className="text-indigo-600 text-sm">{testimonial.position}</div>
                        <div className="text-gray-500 text-xs">{testimonial.company}</div> */}
                      </div>
                    </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
