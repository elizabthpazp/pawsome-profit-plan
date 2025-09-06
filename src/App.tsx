import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import SmallPets from "./pages/SmallPets";
import Health from "./pages/Health";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import About from "./pages/about"; 
import { Analytics } from "@vercel/analytics/react"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/small-pets" element={<SmallPets />} />
          <Route path="/health" element={<Health />} />
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:slug" element={<Article />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <Analytics/>
      </BrowserRouter>
    </TooltipProvider> 
  </QueryClientProvider>
);

export default App;
