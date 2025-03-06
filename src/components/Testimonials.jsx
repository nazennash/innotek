import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import image from '../assets/react.svg';

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
