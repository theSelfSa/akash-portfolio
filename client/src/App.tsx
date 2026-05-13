import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AccentProvider } from "./contexts/AccentContext";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import SpacePage from "./pages/SpacePage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects/:slug" component={ProjectPage} />
      <Route path="/space" component={SpacePage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable
      >
        <AccentProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AccentProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
