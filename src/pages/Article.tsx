import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Star, Calendar, Tag, Share, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getArticleBySlug, getFeaturedArticles } from "@/data/articles";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : null;
  const relatedArticles = getFeaturedArticles().filter(a => a.id !== article?.id).slice(0, 3);

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

  const formatContent = (content: string) => {
    // Split content into sections and format
    const sections = content.split('\n\n').filter(section => section.trim());
    
    return sections.map((section, index) => {
      const trimmedSection = section.trim();
      
      // Handle headings
      if (trimmedSection.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl font-bold text-secondary mb-6 mt-8">
            {trimmedSection.substring(2)}
          </h1>
        );
      }
      
      if (trimmedSection.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-secondary mb-4 mt-8">
            {trimmedSection.substring(3)}
          </h2>
        );
      }
      
      if (trimmedSection.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-secondary mb-3 mt-6">
            {trimmedSection.substring(4)}
          </h3>
        );
      }
      
      // Handle lists
      if (trimmedSection.includes('\n- ')) {
        const items = trimmedSection.split('\n').filter(item => item.trim().startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside mb-6 space-y-2">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-card-foreground">
                {item.substring(2)}
              </li>
            ))}
          </ul>
        );
      }
      
      // Handle bold text in paragraphs
      if (trimmedSection.includes('**')) {
        const formattedText = trimmedSection.split('**').map((text, textIndex) => 
          textIndex % 2 === 1 ? <strong key={textIndex}>{text}</strong> : text
        );
        return (
          <p key={index} className="mb-4 text-card-foreground leading-relaxed">
            {formattedText}
          </p>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="mb-4 text-card-foreground leading-relaxed">
          {trimmedSection}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-smooth"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </nav>

          {/* Article Meta */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">{article.category}</Badge>
              {article.trending && (
                <Badge className="bg-accent text-accent-foreground">Trending</Badge>
              )}
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                <span>{article.rating}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.description}
            </p>

            {/* Author and Meta Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 p-6 bg-muted rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">{article.author}</h3>
                  <p className="text-sm text-muted-foreground">{article.authorTitle}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime}
                </div>
              </div>
            </div>

            {/* Article Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-medium">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-between mb-8 p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-2">
                <Share className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none content-prose">
              {formatContent(article.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <Separator className="mb-8" />
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{article.author}</CardTitle>
                    <CardDescription>{article.authorTitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our expert contributors bring years of veterinary experience and specialized knowledge 
                  to provide you with the most accurate and helpful pet care information. All articles 
                  are reviewed by our editorial team to ensure quality and accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-secondary mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} to={`/article/${relatedArticle.slug}`}>
                    <Card className="shadow-soft hover:shadow-medium transition-smooth group cursor-pointer h-full">
                      <div className="relative">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">
                          {relatedArticle.category}
                        </Badge>
                        <CardTitle className="text-base group-hover:text-primary transition-smooth line-clamp-2">
                          {relatedArticle.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {relatedArticle.readTime}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="hero-gradient text-white text-center p-8 shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl mb-4 text-white">
                  <Heart className="w-6 h-6 inline mr-2" />
                  Love Our Pet Care Content?
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Get weekly expert tips, product reviews, and health advice delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" size="lg" className="font-semibold">
                  Subscribe to Our Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Article;