import { ArrowLeft, Clock, User, Star, Share2, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";

const BlogArticle = () => {
  const { slug } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const articleSlug = slug || "golden-retriever-care"; 
  // Function to parse frontmatter from markdown
  const parseFrontmatter = (content) => {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
      return { metadata: {}, content };
    }

    const [, frontmatterStr, markdownContent] = match;
    const metadata = {};
    
    frontmatterStr.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
        
        if (key === 'tags' && value.startsWith('[')) {
          // Parse array format: [tag1, tag2, tag3]
          metadata[key] = value.slice(1, -1).split(',').map(tag => tag.trim().replace(/^["']|["']$/g, ''));
        } else {
          metadata[key] = value;
        }
      }
    });

    return { metadata, content: markdownContent };
  };

  // Function to convert markdown to HTML (basic implementation)
  const parseMarkdown = (markdown) => {
    return markdown
      // Headers
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-10 mb-6">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-12 mb-8">$1</h1>')
      
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Lists
      .replace(/^\- (.*$)/gm, '<li class="ml-4 mb-2">• $1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-4 mb-2">$1. $2</li>')
      
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>')
      
      // Clean up
      .replace(/<p class="mb-4"><h/g, '<h')
      .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
      .replace(/<p class="mb-4"><li/g, '<li')
      .replace(/<\/li><\/p>/g, '</li>');
  };

  // Load article from file system
useEffect(() => {
  const loadArticle = async () => {
    try {
      const filename = `${articleSlug}.md`;
      const res = await fetch(`/articles/${filename}`);

      if (!res.ok) {
        console.warn("Artículo no encontrado:", filename);
        setArticle(null);   // 👈 esto asegura que caes en el 404
        setLoading(false);
        return;
      }

      const fileContent = await res.text();
      const { metadata, content } = parseFrontmatter(fileContent);

      setArticle({
        ...metadata,
        content,
        htmlContent: parseMarkdown(content),
      });
      setLoading(false);
    } catch (error) {
      console.error("Error loading article:", error);
      setArticle(null);   // 👈 forzar a null en cualquier error
      setLoading(false);
    }
  };

  loadArticle();
}, [articleSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }
 
  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the article you're looking for.
          </p>
          <Button asChild>
           <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = [
    {
      id: 1,
      title: "Labrador Retriever vs Golden Retriever: Which Is Right for You?",
      category: "Breed Comparison",
      readTime: "8 min read",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Best Dog Foods for Golden Retrievers in 2024",
      category: "Nutrition",
      readTime: "12 min read",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Golden Retriever Puppy Training: First Month Guide",
      category: "Training",
      readTime: "10 min read",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
         <Navigation />
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" className="text-primary">
              <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="text-sm text-muted-foreground mb-4">
              <span>Home</span> / <span>Dogs</span> / <span>Breed Guides</span>
            </div>

            {/* Category Badge */}
            <Badge className="mb-4 bg-primary/10 text-primary">{article.category}</Badge>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                {article.rating} rating
              </div>
              <span>{article.publishDate}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <Button 
                variant={isLiked ? "default" : "outline"} 
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Liked' : 'Like'}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Save for Later
              </Button>
            </div>

            {/* Featured Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg shadow-soft mb-8"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <div className="text-xl text-muted-foreground mb-8">
                    {article.description}
                  </div>
                  
                  {/* Article content rendered from markdown */}
                  <div 
                    className="prose prose-lg max-w-none leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.htmlContent }}
                  />
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                   {(article.tags || []).map((tag) => (
  <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
    {tag}
  </Badge>
))}

                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  {/* Table of Contents */}
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Table of Contents</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <nav className="space-y-2">
                        <a href="#introduction" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Introduction</a>
                        <a href="#physical" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Physical Characteristics</a>
                        <a href="#temperament" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Temperament</a>
                        <a href="#health" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Health Considerations</a>
                        <a href="#training" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Training & Exercise</a>
                        <a href="#nutrition" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Nutrition Guidelines</a>
                      </nav>
                    </CardContent>
                  </Card>

                  {/* Author Info */}
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">About the Author</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{article.author}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Veterinarian with 15+ years of experience specializing in large breed dogs and preventive care.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8">Related Articles</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.id} className="cursor-pointer hover:shadow-medium transition-shadow">
                  <div className="relative">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-white text-primary">
                      {relatedArticle.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedArticle.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {relatedArticle.readTime}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default BlogArticle;