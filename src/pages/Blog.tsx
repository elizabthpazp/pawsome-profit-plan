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
      image: '/pet-insurance.jpg',
  trending: false,
      featured: false,
      slug: "complete-guide-to-pet-insurance",
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
      image: './dog-food-review.jpg',
trending: false,
      featured: false,
      slug: "ultimate-dog-food-review",
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
      image: '/cat-behavior.jpg',
      trending: false,
      featured: false,
      slug: "cat-behavior-decoded-strange-behaviors",
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
      image: "/puppy.png",
      trending: false,
      featured: false,
      slug: 'week-by-week-guide-for-new-owners'
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
      image: "/emergency.png",
      trending: false,
      featured: false,
      slug: 'emergency-pet-first-aid'
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
      image: "/cat-sitter.png",
      trending: false,
      featured: false,
      slug: 'best-cat-litter-2024-complete-buying-guide'
    },
     {
      id: 7,
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
      id: 8,
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
      id: 9,
      title: "Dog Food Allergies: Signs, Causes, and Solutions",
      description: "How to identify and manage food allergies in dogs with expert veterinary advice",
      author: "Dr. Michael Chen, DVM",
      readTime: "10 min read",
      rating: 4.9,
      category: "Health",
      image: "/allergies.png",
            slug: 'dog-food-allergies'
    },
      {
      id: 10,
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
      id: 11,
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
      id: 12,
      title: "Indoor Cat Enrichment: Creating a Stimulating Environment",
      description: "How to keep indoor cats mentally and physically active with environmental enrichment",
      author: "Dr. James Parker, DVM",
      readTime: "11 min read",
      rating: 4.9,
      category: "Wellness",
      image: "/indoor.png",
      slug: "indoor-cat-enrichment"
    },
     {
      id: 13,
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
      id: 14,
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
      id: 15,
      title: "Budgie Health Signs: When to See an Avian Vet",
      description: "Learn to recognize early health warning signs in budgerigars and other small birds",
      author: "Dr. Robert Kim, Avian Veterinarian",
      readTime: "10 min read",
      rating: 4.9,
      category: "Birds",
      image: "/budgie.png",
       slug: 'budgie-health-signs'
    },
    {
      id: 16,
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
      id: 17,
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
      id: 18,
      title: "Arthritis in Pets: Early Detection and Management",
      description: "How to recognize signs of arthritis and provide effective pain management for aging pets",
      author: "Dr. Jennifer Liu, Veterinary Orthopedist",
      readTime: "13 min read",
      rating: 4.9,
      category: "Senior Care",
      image: "/arthritis.png",
       slug: 'arthritis-in-pets'
    },
    {
      id: 19,
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
      id: 20,
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
      id: 21,
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

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Health", label: "Health & Wellness" },
    { value: "Reviews", label: "Product Reviews" },
    { value: "Training", label: "Training & Behavior" },
    { value: "Insurance", label: "Pet Insurance" },
    { value: "Behavior", label: "Pet Behavior" },
  ];

const filteredArticles = articles.filter((article) => {
  const queryWords = searchQuery.toLowerCase().split(" ");

  const text = (
    article.title +
    " " +
    article.description +
    " " +
    article.author +
    " " +
    article.category
  ).toLowerCase();

  const matchesSearch = queryWords.every((word) => text.includes(word));

  const matchesCategory =
    selectedCategory === "all" || article.category === selectedCategory;

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
               Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="shadow-medium hover:shadow-strong transition-smooth group cursor-pointer">
                    <Link to={`/article/${article.slug}`}>
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
                </Link>  </Card>
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
                <Link to={`/article/${article.slug}`}>
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
    ...
    <Button variant="ghost" size="sm" className="text-primary mt-3 p-0" asChild>
      <Link to={`/article/${article.slug}`}>
      Read More
      <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </Button> 

                </CardContent>
            </Link>    </Card>
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