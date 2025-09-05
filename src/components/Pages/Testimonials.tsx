import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../ExportedFiles/Testimonial";


export default function TestimonialCarousel() {
  const [current, setCurrent] = useState<number>(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="max-w-2xl sm:max-w-3xl md:max-w-5xl mx-auto py-10 px-4">
  <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
    {TESTIMONIALS.map((testimonial, index) => (
      <div
        key={index}
        className={`transition-transform duration-700 ease-in-out ${
          index === current
            ? "translate-x-0 relative"
            : "translate-x-full absolute top-0 left-0 w-full"
        }`}
      >
        <div className="p-6 sm:p-8 flex flex-col items-center text-center">
          {/* Image */}
            <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-35 h-35 sm:w-40 sm:h-40 rounded-full object-cover shadow-md mb-4"
        />
        
          <h3 className="text-lg sm:text-xl font-semibold">
            {testimonial.name}
          </h3>
          <a 
            href={testimonial.profile} 
            className="text-gray-400 text-sm sm:text-base" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Profile
          </a>

          <p className="text-gray-600 text-base sm:text-lg mb-4 break-words text-center">
            "{testimonial.message}"
          </p>

        </div>
      </div>
    ))}

    {/* Indicators */}
    <div className="flex justify-center space-x-2 pb-4">
      {TESTIMONIALS.map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-full cursor-pointer ${
            index === current ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => setCurrent(index)}
        ></span>
      ))}
    </div>
  </div>
</div>

  );
}

