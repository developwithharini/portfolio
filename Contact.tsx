import { ArrowLeft, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll be in touch soon with exclusive updates.",
    });
    
    setEmail("");
    setName("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="p-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span className="text-sm uppercase tracking-wider">Back to Home</span>
        </Link>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 fade-in mb-16">
            <h1 className="hero-title text-4xl md:text-6xl mb-8">
              GET IN TOUCH
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to create something extraordinary? Join our exclusive waitlist for priority access 
              to premium photography and videography services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8 slide-up">
              <h2 className="text-2xl uppercase tracking-wider">Join the Waitlist</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero-primary w-full px-8 py-4 rounded-lg text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SUBMITTING..." : "JOIN WAITLIST"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 slide-up">
              <h2 className="text-2xl uppercase tracking-wider">Connect</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:narek@lowanglemedia.com" 
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      narek@lowanglemedia.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Instagram className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Instagram</h3>
                    <a 
                      href="https://instagram.com/lowanglemedia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      @lowanglemedia
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-8">
                <h3 className="text-lg uppercase tracking-wider mb-4">Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automotive Photography</li>
                  <li>• Landscape Cinematography</li>
                  <li>• Commercial Videography</li>
                  <li>• Brand Content Creation</li>
                  <li>• Event Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;