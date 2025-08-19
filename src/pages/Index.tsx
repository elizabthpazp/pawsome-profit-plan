import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, TrendingUp, Heart, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-pets.jpg";

const Index = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Complete Guide to Pet Insurance: 2024 Comparison & Reviews",
      description: "Everything you need to know about choosing the right pet insurance for your furry friend",
      category: "Insurance",
      readTime: "12 min read",
      author: "Dr. Sarah Johnson, DVM",
      image: "/api/placeholder/400/250",
      trending: true,
    },
    {
      id: 2,
      title: "The Ultimate Dog Food Review: 25 Brands Tested by Veterinarians",
      description: "Our comprehensive analysis of the best dog foods for every life stage and budget",
      category: "Reviews",
      readTime: "15 min read",
      author: "Pet Nutrition Team",
      image: "/api/placeholder/400/250",
      trending: true,
    },
    {
      id: 3,
      title: "Cat Behavior Decoded: 15 Strange Behaviors Explained",
      description: "Understanding your cat's mysterious behaviors and what they really mean",
      category: "Behavior",
      readTime: "8 min read",
      author: "Dr. Michael Chen, DVM",
      image: "/api/placeholder/400/250",
      trending: false,
    },
  ];

  const categories = [
    {
      name: "Dogs",
      href: "/dogs",
      icon: "🐕",
      description: "Comprehensive guides for dog breeds, training, health, and nutrition",
      count: "150+ articles",
      color: "bg-primary/10 hover:bg-primary/20",
    },
    {
      name: "Cats",
      href: "/cats", 
      icon: "🐱",
      description: "Expert advice on cat behavior, health, grooming, and wellness",
      count: "120+ articles",
      color: "bg-accent/10 hover:bg-accent/20",
    },
    {
      name: "Small Pets",
      href: "/small-pets",
      icon: "🐰",
      description: "Care guides for rabbits, hamsters, guinea pigs, and birds",
      count: "80+ articles",
      color: "bg-secondary/10 hover:bg-secondary/20",
    },
    {
      name: "Reviews",
      href: "/reviews",
      icon: "⭐",
      description: "Honest reviews of pet food, toys, accessories, and health products",
      count: "200+ reviews",
      color: "bg-primary/10 hover:bg-primary/20",
    },
  ];

  const stats = [
    { icon: Users, value: "500K+", label: "Happy Pet Parents" },
    { icon: BookOpen, value: "1000+", label: "Expert Articles" },
    { icon: Award, value: "50+", label: "Veterinarian Contributors" },
    { icon: Star, value: "4.9/5", label: "Reader Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Happy pets - dog, cat, and rabbit together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Heart className="w-3 h-3 mr-1" />
              Trusted by 500K+ Pet Parents
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Pet Care
              <span className="block text-primary">Made Simple</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Veterinarian-approved guides, honest product reviews, and expert health tips 
              for dogs, cats, and small animals. Everything you need to keep your pets happy and healthy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Explore Pet Guides
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg" className="text-lg">
                <Shield className="w-5 h-5 mr-2" />
                Find Pet Insurance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">{value}</div>
                <div className="text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Trending Pet Care Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest expert advice, product reviews, and health tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {article.trending && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {article.author}</span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Explore Pet Care by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find expert advice tailored to your specific pet's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.href}>
                <Card className={`shadow-soft hover:shadow-medium transition-all duration-300 h-full group cursor-pointer ${category.color} border-0`}>
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <CardTitle className="text-xl text-secondary group-hover:text-primary transition-smooth">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="mb-4">
                      {category.count}
                    </Badge>
                    <div className="text-primary font-medium group-hover:text-primary-dark transition-smooth">
                      Explore {category.name} →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
