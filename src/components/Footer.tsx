import { Link } from "react-router-dom";
import { Heart, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Pet Care",
      links: [
        { name: "Dog Care Guides", href: "/dogs" },
        { name: "Cat Care Tips", href: "/cats" },
        { name: "Small Pet Care", href: "/small-pets" },
        { name: "Pet Health", href: "/health" },
      ],
    },
    {
      title: "Resources",
      links: [ 
        { name: "Training Guides", href: "/training" }, 
        { name: "Pet Insurance", href: "/health" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" }, 
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/pawsomepets" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/pawsomepets" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/pawsomepets" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/pawsomepets" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Weekly Pet Care Tips & Exclusive Reviews
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-lg">
              Join 50,000+ pet parents who trust our expert advice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-foreground border-0 focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" className="whitespace-nowrap font-semibold">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe Free
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-3">
              Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Pawsome</span>
                  <span className="text-xl font-bold text-primary">Pets</span>
                </div>
              </Link>
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                Your trusted source for expert pet care guides, veterinarian-approved health tips, 
                and honest product reviews for dogs, cats, and small animals.
              </p>
              <div className="flex space-x-4">
                Contact to: catewebs@yahoo.com
                {/* {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-light rounded-lg flex items-center justify-center hover:bg-primary transition-smooth group"
                  >
                    <Icon className="w-5 h-5 text-secondary-foreground group-hover:text-white transition-smooth" />
                  </a>
                ))} */}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-secondary-foreground/80 hover:text-primary transition-smooth"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-light py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} PawsomePets. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
              >
                Terms of Service
              </Link>
              {/* <Link
                to="/cookies"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
              >
                Cookie Policy
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;