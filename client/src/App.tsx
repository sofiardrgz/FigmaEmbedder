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
import AutomationsCard from "@/components/cards/AutomationsCard";
import CopilotCard from "@/components/cards/CopilotCard";
import MarketingCard from "@/components/cards/MarketingCard";
import PaymentsCard from "@/components/cards/PaymentsCard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/messages" component={Messages} />
      <Route path="/demo" component={Demo} />
      <Route path="/embed" component={() => <EmbeddableDashboard showSafariFrame={false} />} />
      <Route path="/embed/with-frame" component={() => <EmbeddableDashboard showSafariFrame={true} />} />
      <Route path="/embed/no-sidebar" component={() => <EmbeddableDashboard showSafariFrame={false} showSidebar={false} />} />
      <Route path="/embed/messages" component={() => <EmbeddableMessagingDashboard showSafariFrame={false} />} />
      <Route path="/embed/messages/with-frame" component={() => <EmbeddableMessagingDashboard showSafariFrame={true} />} />
      <Route path="/embed/messages/no-sidebar" component={() => <EmbeddableMessagingDashboard showSafariFrame={false} showSidebar={false} />} />
      <Route path="/embed/demo" component={() => <EmbeddableDemoAnimation showSafariFrame={false} />} />
      <Route path="/embed/demo/with-frame" component={() => <EmbeddableDemoAnimation showSafariFrame={true} />} />
      <Route path="/embed/sales" component={() => <EmbeddableSalesDashboard showSafariFrame={false} />} />
      <Route path="/embed/sales/with-frame" component={() => <EmbeddableSalesDashboard showSafariFrame={true} />} />
      <Route path="/embed/messages-only" component={() => <EmbeddableMessagesOnly showSafariFrame={false} />} />
      <Route path="/embed/messages-only/with-frame" component={() => <EmbeddableMessagesOnly showSafariFrame={true} />} />
      <Route path="/embed/contacts" component={() => <EmbeddableContactsOnly showSafariFrame={false} />} />
      <Route path="/embed/contacts/with-frame" component={() => <EmbeddableContactsOnly showSafariFrame={true} />} />
      <Route path="/embed/calendar" component={() => <EmbeddableCalendarOnly showSafariFrame={false} />} />
      <Route path="/embed/calendar/with-frame" component={() => <EmbeddableCalendarOnly showSafariFrame={true} />} />
      <Route path="/embed/copilot" component={() => <EmbeddableCopilotOnly showSafariFrame={false} />} />
      <Route path="/embed/copilot/with-frame" component={() => <EmbeddableCopilotOnly showSafariFrame={true} />} />
      <Route path="/embed/marketing" component={() => <EmbeddableMarketingOnly showSafariFrame={false} />} />
      <Route path="/embed/marketing/with-frame" component={() => <EmbeddableMarketingOnly showSafariFrame={true} />} />
      <Route path="/embed/payments" component={() => <EmbeddablePaymentsOnly showSafariFrame={false} />} />
      <Route path="/embed/payments/with-frame" component={() => <EmbeddablePaymentsOnly showSafariFrame={true} />} />
      
      {/* Individual Card Components (260px x 140px) */}
      <Route path="/embed/sales-card" component={() => <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh'}}><SalesCard /></div>} />
      <Route path="/embed/messages-card" component={() => <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh'}}><MessagesCard /></div>} />
      <Route path="/embed/contacts-card" component={() => <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh'}}><ContactsCard /></div>} />
      <Route path="/embed/calendar-card" component={() => <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh'}}><CalendarCard /></div>} />
      <Route path="/embed/automations-card" component={() => <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh'}}><AutomationsCard /></div>} />
      <Route path="/embed/copilot-card" component={() => <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh'}}><CopilotCard /></div>} />
      <Route path="/embed/marketing-card" component={() => <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh'}}><MarketingCard /></div>} />
      <Route path="/embed/payments-card" component={() => <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh'}}><PaymentsCard /></div>} />
      
      {/* All Cards Grid */}
      <Route path="/embed/cards" component={() => (
        <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto'}}>
            <SalesCard />
            <MessagesCard />
            <ContactsCard />
            <CalendarCard />
            <AutomationsCard />
            <CopilotCard />
            <MarketingCard />
            <PaymentsCard />
          </div>
        </div>
      )} />
      
      {/* Scroll Views */}
      <Route path="/embed/scroll" component={() => (
        <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <SalesCard />
          <MessagesCard />
          <ContactsCard />
          <CalendarCard />
          <AutomationsCard />
          <CopilotCard />
          <MarketingCard />
          <PaymentsCard />
        </div>
      )} />
      
      <Route path="/embed/scroll-horizontal" component={() => (
        <div style={{padding: '20px', backgroundColor: '#0d0d0d', minHeight: '100vh', display: 'flex', gap: '20px', overflowX: 'auto', alignItems: 'center'}}>
          <SalesCard />
          <MessagesCard />
          <ContactsCard />
          <CalendarCard />
          <AutomationsCard />
          <CopilotCard />
          <MarketingCard />
          <PaymentsCard />
        </div>
      )} />
      
      {/* Legacy Card Routes */}
      <Route path="/card/sales" component={() => <SalesCard />} />
      <Route path="/card/messages" component={() => <MessagesCard />} />
      <Route path="/card/contacts" component={() => <ContactsCard />} />
      <Route path="/card/calendar" component={() => <CalendarCard />} />
      <Route path="/card/automations" component={() => <AutomationsCard />} />
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
