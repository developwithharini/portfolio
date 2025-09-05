import { Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/hero-mountain-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dramatic mountain landscape with classic car silhouette"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-end min-h-screen px-8 md:px-16 lg:px-24">
        <div className="text-right space-y-6 fade-in">
          {/* Main Title */}
          <h1 className="hero-title text-2xl md:text-3xl lg:text-4xl">
            NAREK VOSKANYAN
          </h1>
          
          {/* Subtitle */}
          <h2 className="hero-subtitle text-lg md:text-xl lg:text-2xl">
            L O W A N G L E M E D I A
          </h2>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 slide-up">
            <button 
              className="btn-hero-primary px-8 py-3 rounded-full text-sm md:text-base"
              onClick={() => window.open('/work', '_self')}
            >
              DISCOVER
            </button>
            <button 
              className="btn-hero-secondary px-8 py-3 rounded-full text-sm md:text-base"
              onClick={() => window.open('/contact', '_self')}
            >
              JOIN THE WAITLIST
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-4 fade-in">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            <Instagram size={24} />
          </a>
          <a
            href="mailto:contact@lowanglemedia.com"
            className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;