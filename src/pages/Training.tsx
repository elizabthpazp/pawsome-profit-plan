import { ArrowRight, Star, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Training = () => {
  const trainingCategories = [
    {
      title: "Basic Obedience",
      description: "Essential commands, house training, and foundational behaviors for all pets",
      articles: 47,
      color: "bg-primary/10",
    },
    {
      title: "Behavioral Issues",
      description: "Solutions for aggression, anxiety, destructive behaviors, and other problem areas",
      articles: 54,
      color: "bg-accent/10",
    },
    {
      title: "Advanced Training",
      description: "Tricks, agility, specialized skills, and competitive training techniques",
      articles: 32,
      color: "bg-secondary/10",
    },
    {
      title: "Puppy & Kitten Training",
      description: "Early socialization, basic manners, and age-appropriate training methods",
      articles: 39,
      color: "bg-primary/10",
    },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "House Training Your Puppy: A Complete 8-Week Program",
      description: "Step-by-step house training guide with realistic timelines and troubleshooting tips",
      author: "Sarah Martinez, Certified Dog Trainer",
      readTime: "22 min read",
      rating: 4.9,
      category: "Basic Training",
      image: "/puppy-training.png",
       slug: 'house-training-your-puppy-8-week-program'
    },
    {
      id: 2,
      title: "Separation Anxiety in Dogs: Training Solutions That Work",
      description: "Evidence-based techniques to help dogs overcome separation anxiety and stress",
      author: "Dr. Michael Thompson, Animal Behaviorist",
      readTime: "18 min read",
      rating: 4.8,
      category: "Behavior Issues",
      image: "/anxiety.png",
       slug: 'separation-anxiety-in-dogs-training-solutions'
    },
    {
      id: 3,
      title: "Clicker Training Basics: Positive Reinforcement for All Pets",
      description: "Learn the fundamentals of clicker training for dogs, cats, birds, and small animals",
      author: "Jennifer Wu, KPA-CTP Trainer",
      readTime: "14 min read",
      rating: 4.9,
      category: "Training Methods",
      image: "/clicker.png",
       slug: 'clicker-training-basics-positive-reinforcement'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
       <Navigation />
      {/* Hero Section */}
      <section className="py-16 trust-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Pet Training Guides
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert training techniques and behavioral solutions from certified trainers and animal behaviorists for all types of pets
            </p>
            <Button variant="hero" size="lg" asChild>
               <a href={`#training-section`} rel="noopener noreferrer"> 
              Explore Training Guides
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
            Training Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingCategories.map((category) => (
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
      <section id="training-section" className="py-16 subtle-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
             Training Articles
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

export default Training;