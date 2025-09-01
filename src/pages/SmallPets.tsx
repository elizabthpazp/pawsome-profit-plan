import { ArrowRight, Star, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SmallPets = () => {
  const smallPetCategories = [
    {
      title: "Rabbits & Guinea Pigs",
      description: "Complete care guides for rabbits, guinea pigs, and other herbivorous small pets",
      articles: 38,
      color: "bg-primary/10",
    },
    {
      title: "Hamsters & Small Rodents",
      description: "Housing, diet, and health care for hamsters, gerbils, mice, and rats",
      articles: 42,
      color: "bg-accent/10",
    },
    {
      title: "Birds & Avians",
      description: "Care guides for budgies, cockatiels, canaries, and other pet birds",
      articles: 35,
      color: "bg-secondary/10",
    },
    {
      title: "Habitat & Environment",
      description: "Proper housing, enrichment, and environmental setup for all small pets",
      articles: 31,
      color: "bg-primary/10",
    },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Holland Lop Rabbit Care: Your Complete Guide",
      description: "Everything you need to know about caring for Holland Lop rabbits, from diet to grooming",
      author: "Dr. Amanda Foster, Exotic Vet",
      readTime: "16 min read",
      rating: 4.9,
      category: "Rabbits",
      image: "/rabbit.png",
       slug: 'holland-lop-rabbit-care'
    },
    {
      id: 2,
      title: "Syrian Hamster Setup: Creating the Perfect Habitat",
      description: "Step-by-step guide to setting up a proper enclosure for Syrian hamsters",
      author: "Lisa Chen, Small Animal Specialist",
      readTime: "12 min read",
      rating: 4.8,
      category: "Habitat",
      image: "/hamster.png",
       slug: 'syrian-hamster-setup'
    },
    {
      id: 3,
      title: "Budgie Health Signs: When to See an Avian Vet",
      description: "Learn to recognize early health warning signs in budgerigars and other small birds",
      author: "Dr. Robert Kim, Avian Veterinarian",
      readTime: "10 min read",
      rating: 4.9,
      category: "Birds",
      image: "/budgie.png",
       slug: 'budgie-health-signs'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 trust-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🐹</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Small Pet Care Guides
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert advice for rabbits, guinea pigs, hamsters, birds, and other small pets from exotic veterinarians and small animal specialists
            </p>
            <Button variant="hero" size="lg" asChild>
               <a href={`#small-section`} rel="noopener noreferrer"> 
              Explore Small Pet Guides
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
            Small Pet Care Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smallPetCategories.map((category) => (
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
      <section id="small-section" className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
             Small Pet Care Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                <Link to={`/article/${article.slug}`}>  <div className="relative">
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

export default SmallPets;