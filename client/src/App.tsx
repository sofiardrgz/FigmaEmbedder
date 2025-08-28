import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Messages from "@/pages/messages";
import EmbeddableDashboard from "@/components/dashboard/EmbeddableDashboard";
import EmbeddableMessagingDashboard from "@/components/messages/EmbeddableMessagingDashboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/messages" component={Messages} />
      <Route path="/embed" component={() => <EmbeddableDashboard showSafariFrame={true} />} />
      <Route path="/embed/no-frame" component={() => <EmbeddableDashboard showSafariFrame={false} />} />
      <Route path="/embed/no-sidebar" component={() => <EmbeddableDashboard showSafariFrame={true} showSidebar={false} />} />
      <Route path="/embed/messages" component={() => <EmbeddableMessagingDashboard showSafariFrame={true} />} />
      <Route path="/embed/messages/no-frame" component={() => <EmbeddableMessagingDashboard showSafariFrame={false} />} />
      <Route path="/embed/messages/no-sidebar" component={() => <EmbeddableMessagingDashboard showSafariFrame={true} showSidebar={false} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
