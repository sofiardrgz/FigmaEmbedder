import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Messages from "@/pages/messages";
import Demo from "@/pages/demo";
import EmbeddableDashboard from "@/components/dashboard/EmbeddableDashboard";
import EmbeddableMessagingDashboard from "@/components/messages/EmbeddableMessagingDashboard";
import EmbeddableDemoAnimation from "@/components/dashboard/EmbeddableDemoAnimation";
import EmbeddableSalesDashboard from "@/components/dashboard/EmbeddableSalesDashboard";
import EmbeddableMessagesOnly from "@/components/messages/EmbeddableMessagesOnly";
import EmbeddableContactsOnly from "@/components/contacts/EmbeddableContactsOnly";
import EmbeddableCalendarOnly from "@/components/calendar/EmbeddableCalendarOnly";
import EmbeddableCopilotOnly from "@/components/copilot/EmbeddableCopilotOnly";
import EmbeddableMarketingOnly from "@/components/marketing/EmbeddableMarketingOnly";
import EmbeddablePaymentsOnly from "@/components/payments/EmbeddablePaymentsOnly";
import SalesCard from "@/components/cards/SalesCard";
import MessagesCard from "@/components/cards/MessagesCard";
import ContactsCard from "@/components/cards/ContactsCard";
import CalendarCard from "@/components/cards/CalendarCard";
import CopilotCard from "@/components/cards/CopilotCard";
import MarketingCard from "@/components/cards/MarketingCard";
import PaymentsCard from "@/components/cards/PaymentsCard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/messages" component={Messages} />
      <Route path="/demo" component={Demo} />
      <Route path="/embed" component={() => <EmbeddableDashboard showSafariFrame={true} />} />
      <Route path="/embed/no-frame" component={() => <EmbeddableDashboard showSafariFrame={false} />} />
      <Route path="/embed/no-sidebar" component={() => <EmbeddableDashboard showSafariFrame={true} showSidebar={false} />} />
      <Route path="/embed/messages" component={() => <EmbeddableMessagingDashboard showSafariFrame={true} />} />
      <Route path="/embed/messages/no-frame" component={() => <EmbeddableMessagingDashboard showSafariFrame={false} />} />
      <Route path="/embed/messages/no-sidebar" component={() => <EmbeddableMessagingDashboard showSafariFrame={true} showSidebar={false} />} />
      <Route path="/embed/demo" component={() => <EmbeddableDemoAnimation showSafariFrame={true} />} />
      <Route path="/embed/demo/no-frame" component={() => <EmbeddableDemoAnimation showSafariFrame={false} />} />
      <Route path="/embed/sales" component={() => <EmbeddableSalesDashboard showSafariFrame={true} />} />
      <Route path="/embed/sales/no-frame" component={() => <EmbeddableSalesDashboard showSafariFrame={false} />} />
      <Route path="/embed/messages-only" component={() => <EmbeddableMessagesOnly showSafariFrame={true} />} />
      <Route path="/embed/messages-only/no-frame" component={() => <EmbeddableMessagesOnly showSafariFrame={false} />} />
      <Route path="/embed/contacts" component={() => <EmbeddableContactsOnly showSafariFrame={true} />} />
      <Route path="/embed/contacts/no-frame" component={() => <EmbeddableContactsOnly showSafariFrame={false} />} />
      <Route path="/embed/calendar" component={() => <EmbeddableCalendarOnly showSafariFrame={true} />} />
      <Route path="/embed/calendar/no-frame" component={() => <EmbeddableCalendarOnly showSafariFrame={false} />} />
      <Route path="/embed/copilot" component={() => <EmbeddableCopilotOnly showSafariFrame={true} />} />
      <Route path="/embed/copilot/no-frame" component={() => <EmbeddableCopilotOnly showSafariFrame={false} />} />
      <Route path="/embed/marketing" component={() => <EmbeddableMarketingOnly showSafariFrame={true} />} />
      <Route path="/embed/marketing/no-frame" component={() => <EmbeddableMarketingOnly showSafariFrame={false} />} />
      <Route path="/embed/payments" component={() => <EmbeddablePaymentsOnly showSafariFrame={true} />} />
      <Route path="/embed/payments/no-frame" component={() => <EmbeddablePaymentsOnly showSafariFrame={false} />} />
      
      {/* Card Components (220px x 300px) */}
      <Route path="/card/sales" component={() => <SalesCard />} />
      <Route path="/card/messages" component={() => <MessagesCard />} />
      <Route path="/card/contacts" component={() => <ContactsCard />} />
      <Route path="/card/calendar" component={() => <CalendarCard />} />
      <Route path="/card/copilot" component={() => <CopilotCard />} />
      <Route path="/card/marketing" component={() => <MarketingCard />} />
      <Route path="/card/payments" component={() => <PaymentsCard />} />
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
