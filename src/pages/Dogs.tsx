import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Dogs = () => {
  const dogCategories = [
    {
      title: "Dog Breeds",
      description: "Complete breed guides with care requirements, temperament, and health information",
      articles: 45,
      color: "bg-primary/10",
    },
    {
      title: "Training & Behavior",
      description: "Expert training techniques and behavior modification strategies",
      articles: 38,
      color: "bg-accent/10",
    },
    {
      title: "Health & Wellness",
      description: "Veterinary health guides, preventive care, and common health issues",
      articles: 42,
      color: "bg-secondary/10",
    },
    {
      title: "Nutrition & Diet",
      description: "Dog food reviews, feeding guides, and nutritional requirements",
      articles: 35,
      color: "bg-primary/10",
    },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Golden Retriever Complete Care Guide: Everything You Need to Know",
      description: "A comprehensive guide covering health, training, grooming, and nutrition for Golden Retrievers",
      author: "Dr. Sarah Johnson, DVM",
      readTime: "15 min read",
      rating: 4.9,
      category: "Breed Guide",
      image: "/golden.png",
      slug: 'golden-retriever-care'
    },
    {
      id: 2,
      title: "Puppy Training Basics: The First 8 Weeks at Home",
      description: "Essential training techniques every new puppy owner needs to know",
      author: "Mark Thompson, Dog Trainer",
      readTime: "12 min read",
      rating: 4.8,
      category: "Training",
      image: "/training.png",
            slug: 'puppy-training-basics'
    },
    {
      id: 3,
      title: "Dog Food Allergies: Signs, Causes, and Solutions",
      description: "How to identify and manage food allergies in dogs with expert veterinary advice",
      author: "Dr. Michael Chen, DVM",
      readTime: "10 min read",
      rating: 4.9,
      category: "Health",
      image: "/allergies.png",
            slug: 'dog-food-allergies'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 trust-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🐕</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Dog Care Guides
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert advice on dog breeds, training, health, and nutrition from certified veterinarians and professional dog trainers
            </p>
            <Button variant="hero" size="lg" asChild>
               <a href={`#dogs-section`} rel="noopener noreferrer"> 
              Explore Dog Guides
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
            Dog Care Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dogCategories.map((category) => (
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
      <section id="dogs-section" className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
             Dog Care Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                  <Link to={`/article/${article.slug}`}>
                <div className="relative">
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
                </Link>
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

      <Footer />
    </div>
  );
};

export default Dogs;