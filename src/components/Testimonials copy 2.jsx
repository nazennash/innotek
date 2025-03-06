import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const TestimonialsCarousel = () => {
  const scrollRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Tesla's partnership with this company transformed our approach to sustainable energy. Their innovative solutions helped us optimize our manufacturing processes, resulting in a 30% increase in efficiency.",
      author: "Elon Musk",
      position: "CEO",
      company: "Tesla",
      avatar: "../assets/react.svg",
      stars: 5
    },
    {
      id: 2,
      text: "As we scaled Apple's supply chain, we needed partners who understood our commitment to perfection. This team delivered beyond our expectations, helping us maintain our quality standards while meeting unprecedented demand.",
      author: "Tim Cook",
      position: "Chief Executive Officer",
      company: "Apple Inc.",
      avatar: "/api/placeholder/80/80",
      stars: 5
    },
    {
      id: 3,
      text: "Microsoft's cloud infrastructure faced unique challenges that required innovative thinking. Their strategic insights and technical expertise helped us revolutionize our Azure platform, driving growth across enterprise solutions.",
      author: "Satya Nadella",
      position: "CEO",
      company: "Microsoft",
      avatar: "/api/placeholder/80/80",
      stars: 5
    },
    {
      id: 4,
      text: "Amazon's customer-obsessed approach demands partners who share our values. This company has consistently supported our mission to be Earth's most customer-centric company, helping us pioneer new frontiers in e-commerce.",
      author: "Andy Jassy",
      position: "President and CEO",
      company: "Amazon",
      avatar: "/api/placeholder/80/80",
      stars: 5
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
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          </div>

          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide"
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
                  <div className="bg-white rounded-lg shadow-xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 text-sm">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                        <div className="text-indigo-600 text-sm">{testimonial.position}</div>
                        <div className="text-gray-500 text-xs">{testimonial.company}</div>
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
