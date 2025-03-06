import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const EnhancedTestimonialsCarousel = () => {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      text: "Tesla's partnership with this company transformed our approach to sustainable energy. Their innovative solutions helped us optimize our manufacturing processes, resulting in a 30% increase in efficiency.",
      author: "Elon Musk",
      position: "CEO",
      company: "Tesla",
      avatar: "/api/placeholder/80/80",
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

  const cardWidth = 320; // Width of each card + margin
  
  useEffect(() => {
    if (!isAutoScrolling || isPaused) return;
    
    const autoScroll = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        scrollToCard(nextIndex);
      }
    }, 5000);
    
    return () => clearInterval(autoScroll);
  }, [currentIndex, isAutoScrolling, isPaused]);

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const scrollLeft = index * cardWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    scrollToCard(nextIndex);
    setIsPaused(true);
    // Resume auto-scrolling after user interaction
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    scrollToCard(prevIndex);
    setIsPaused(true);
    // Resume auto-scrolling after user interaction
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Handle scroll events to update the current index
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const index = Math.round(scrollPosition / cardWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index % testimonials.length);
      }
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Left/Right Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-indigo-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-indigo-700" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-indigo-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-indigo-700" />
            </button>
            
            {/* Carousel Container */}
            <div 
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto scrollbar-hide snap-x"
                style={{ 
                  scrollBehavior: 'smooth', 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
                onScroll={handleScroll}
              >
                {testimonials.map((testimonial, idx) => (
                  <div 
                    key={testimonial.id} 
                    className="w-80 flex-shrink-0 mx-4 snap-center"
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
            
            {/* Indicator Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => {
                    scrollToCard(idx);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    idx === currentIndex % testimonials.length ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonialsCarousel;