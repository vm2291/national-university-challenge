import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CompetitionStructure from "./pages/CompetitionStructure";
import EventStructure from "./pages/EventStructure";
import EventGallery from "./pages/EventGallery";
import Voices from "./pages/Voices";
import Prizes from "./pages/Prizes";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/competition-structure" element={<CompetitionStructure />} />
          <Route path="/event-structure" element={<EventStructure />} />
          <Route path="/event-gallery" element={<EventGallery />} />
          <Route path="/voices" element={<Voices />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;