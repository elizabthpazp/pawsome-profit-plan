import { ArrowRight, Star, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Health = () => {
  const healthCategories = [
    {
      title: "Preventive Care",
      description: "Vaccination schedules, regular checkups, and preventive treatments for all pets",
      articles: 44,
      color: "bg-primary/10",
    },
    {
      title: "Emergency Care",
      description: "First aid techniques, emergency situations, and when to seek immediate veterinary help",
      articles: 36,
      color: "bg-accent/10",
    },
    {
      title: "Common Conditions",
      description: "Recognition, treatment, and management of frequent health issues in pets",
      articles: 52,
      color: "bg-secondary/10",
    },
    {
      title: "Senior Pet Care",
      description: "Age-related health concerns and specialized care for aging pets",
      articles: 29,
      color: "bg-primary/10",
    },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Vaccination Schedule Guide: Protecting Your Pet's Health",
      description: "Complete vaccination timelines for dogs, cats, and other pets with expert veterinary recommendations",
      author: "Dr. Maria Santos, DVM",
      readTime: "20 min read",
      rating: 4.9,
      category: "Preventive Care",
      image: "/vaccination.png",
       slug: 'vaccination-schedule-guide'
    },
    {
      id: 2,
      title: "Pet Emergency First Aid: Essential Skills Every Owner Should Know",
      description: "Life-saving techniques for common pet emergencies, from choking to heatstroke",
      author: "Dr. Kevin Wright, Emergency Vet",
      readTime: "15 min read",
      rating: 4.8,
      category: "Emergency Care",
      image: "/pet-emergency.png",
       slug: 'pet-emergency-first-aid'
    },
    {
      id: 3,
      title: "Arthritis in Pets: Early Detection and Management",
      description: "How to recognize signs of arthritis and provide effective pain management for aging pets",
      author: "Dr. Jennifer Liu, Veterinary Orthopedist",
      readTime: "13 min read",
      rating: 4.9,
      category: "Senior Care",
      image: "/arthritis.png",
       slug: 'arthritis-in-pets'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
       <Navigation />
      {/* Hero Section */}
      <section className="py-16 trust-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🏥</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Pet Health Guides
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive health information from licensed veterinarians covering preventive care, emergency treatment, and wellness for all pets
            </p>
            <Button variant="hero" size="lg" asChild>
               <a href={`#health-section`} rel="noopener noreferrer"> 
              Explore Health Guides
              <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
            Pet Health Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthCategories.map((category) => (
              <Card key={category.title} className={`${category.color} border-0 shadow-soft hover:shadow-medium transition-smooth cursor-pointer group`}>
                <CardHeader>
                  <CardTitle className="text-lg text-secondary group-hover:text-primary transition-smooth">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{category.articles} articles</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="health-section" className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
             Health Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                 <a href={`/article/${article.slug}`} rel="noopener noreferrer"> <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3 bg-white text-primary">
                    {article.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{article.rating}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                    {article.title}
                  </CardTitle>
                  <CardDescription>
                    {article.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
               <a href={`/blog`} rel="noopener noreferrer"> 
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
<Footer />
    </div>
  );
};

export default Health;