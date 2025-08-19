import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, User, TrendingUp, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import petInsuranceImage from "@/assets/pet-insurance.jpg";
import dogFoodImage from "@/assets/dog-food-review.jpg";
import catBehaviorImage from "@/assets/cat-behavior.jpg";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articles = [
    {
      id: 1,
      title: "Complete Guide to Pet Insurance: 2024 Comparison & Reviews",
      description: "Everything you need to know about choosing the right pet insurance for your furry friend. Compare top providers, coverage options, and costs.",
      author: "Dr. Sarah Johnson, DVM",
      readTime: "12 min read",
      publishDate: "2024-01-15",
      category: "Insurance",
      rating: 4.9,
      image: petInsuranceImage,
      trending: true,
      featured: true,
    },
    {
      id: 2,
      title: "The Ultimate Dog Food Review: 25 Brands Tested by Veterinarians",
      description: "Our comprehensive analysis of the best dog foods for every life stage and budget. Nutritional breakdowns and expert recommendations included.",
      author: "Pet Nutrition Team",
      readTime: "15 min read",
      publishDate: "2024-01-12",
      category: "Reviews",
      rating: 4.8,
      image: dogFoodImage,
      trending: true,
      featured: true,
    },
    {
      id: 3,
      title: "Cat Behavior Decoded: 15 Strange Behaviors Explained",
      description: "Understanding your cat's mysterious behaviors and what they really mean. Expert insights into feline psychology and communication.",
      author: "Dr. Michael Chen, DVM",
      readTime: "8 min read",
      publishDate: "2024-01-10",
      category: "Behavior",
      rating: 4.7,
      image: catBehaviorImage,
      trending: false,
      featured: false,
    },
    {
      id: 4,
      title: "Puppy Training Schedule: Week-by-Week Guide for New Owners",
      description: "A complete training schedule for your new puppy's first 16 weeks, including house training, basic commands, and socialization.",
      author: "Mark Thompson, Dog Trainer",
      readTime: "10 min read",
      publishDate: "2024-01-08",
      category: "Training",
      rating: 4.9,
      image: "/api/placeholder/400/250",
      trending: false,
      featured: false,
    },
    {
      id: 5,
      title: "Emergency Pet First Aid: What Every Pet Owner Should Know",
      description: "Essential first aid techniques that could save your pet's life. Step-by-step instructions for common emergencies.",
      author: "Dr. Lisa Martinez, DVM",
      readTime: "14 min read",
      publishDate: "2024-01-05",
      category: "Health",
      rating: 4.8,
      image: "/api/placeholder/400/250",
      trending: false,
      featured: false,
    },
    {
      id: 6,
      title: "Best Cat Litter 2024: Complete Buying Guide and Reviews",
      description: "Compare the top cat litters for odor control, clumping, and eco-friendliness. Find the perfect litter for your cat's needs.",
      author: "Cat Care Experts",
      readTime: "11 min read",
      publishDate: "2024-01-03",
      category: "Reviews",
      rating: 4.6,
      image: "/api/placeholder/400/250",
      trending: false,
      featured: false,
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Health", label: "Health & Wellness" },
    { value: "Reviews", label: "Product Reviews" },
    { value: "Training", label: "Training & Behavior" },
    { value: "Insurance", label: "Pet Insurance" },
    { value: "Behavior", label: "Pet Behavior" },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 trust-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet Care Blog & Expert Guides
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Stay updated with the latest veterinarian-approved advice, product reviews, and expert tips for keeping your pets healthy and happy
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 subtle-gradient">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">
              Featured Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="shadow-medium hover:shadow-strong transition-smooth group cursor-pointer">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                      {article.trending && (
                        <Badge className="bg-accent text-accent-foreground">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{article.rating}</span>
                      </div>
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
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {article.trending && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{article.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author.split(',')[0]}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary mt-3 p-0">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found matching your search criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;