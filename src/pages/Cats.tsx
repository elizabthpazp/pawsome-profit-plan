import { ArrowRight, Star, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cats = () => {
  const catCategories = [
    {
      title: "Cat Breeds",
      description: "Comprehensive breed profiles with personality traits, care needs, and health information",
      articles: 52,
      color: "bg-primary/10",
    },
    {
      title: "Behavior & Training",
      description: "Understanding feline behavior and positive reinforcement training techniques",
      articles: 41,
      color: "bg-accent/10",
    },
    {
      title: "Health & Veterinary Care",
      description: "Preventive healthcare, common conditions, and wellness guidelines for cats",
      articles: 48,
      color: "bg-secondary/10",
    },
    {
      title: "Nutrition & Feeding",
      description: "Cat food guides, feeding schedules, and dietary requirements by life stage",
      articles: 39,
      color: "bg-primary/10",
    },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Maine Coon Complete Care Guide: The Gentle Giant",
      description: "Everything you need to know about caring for Maine Coons, from grooming to health maintenance",
      author: "Dr. Emily Rodriguez, DVM",
      readTime: "18 min read",
      rating: 4.9,
      category: "Breed Guide",
      image: "/maine.png",
       slug: "maine-coon-complete-care"
    },
    {
      id: 2,
      title: "Litter Box Training: Solutions for Common Problems",
      description: "Expert strategies for successful litter training and solving elimination issues",
      author: "Sarah Mitchell, Feline Behaviorist",
      readTime: "14 min read",
      rating: 4.8,
      category: "Behavior",
      image: "/litter.png",
     slug: "litter-box-training-solutions"
    },
    {
      id: 3,
      title: "Indoor Cat Enrichment: Creating a Stimulating Environment",
      description: "How to keep indoor cats mentally and physically active with environmental enrichment",
      author: "Dr. James Parker, DVM",
      readTime: "11 min read",
      rating: 4.9,
      category: "Wellness",
      image: "/indoor.png",
      slug: "indoor-cat-enrichment"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 trust-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🐱</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Cat Care Guides
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert advice on cat breeds, behavior, health, and nutrition from certified veterinarians and feline specialists
            </p>
            <Button variant="hero" size="lg" asChild>
               <a href={`#cats-section`} rel="noopener noreferrer"> 
              Explore Cat Guides
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
            Cat Care Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catCategories.map((category) => (
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
      <section id="cats-section" className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
             Cat Care Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                 <a href={`/article/${article.slug}`} rel="noopener noreferrer">  <div className="relative">
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

export default Cats;