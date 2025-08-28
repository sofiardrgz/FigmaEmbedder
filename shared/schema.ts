import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const dashboardMetrics = pgTable("dashboard_metrics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  date: timestamp("date").notNull().defaultNow(),
  newLeads: integer("new_leads").notNull().default(0),
  followUps: integer("follow_ups").notNull().default(0),
  answeredCalls: integer("answered_calls").notNull().default(0),
  chartData: jsonb("chart_data"),
});

export const signups = pgTable("signups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  date: timestamp("date").notNull().defaultNow(),
  device: text("device").notNull(),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
  status: text("status").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDashboardMetricsSchema = createInsertSchema(dashboardMetrics).pick({
  newLeads: true,
  followUps: true,
  answeredCalls: true,
  chartData: true,
});

export const insertSignupSchema = createInsertSchema(signups).pick({
  device: true,
  name: true,
  userId: true,
  status: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type DashboardMetrics = typeof dashboardMetrics.$inferSelect;
export type InsertDashboardMetrics = z.infer<typeof insertDashboardMetricsSchema>;
export type Signup = typeof signups.$inferSelect;
export type InsertSignup = z.infer<typeof insertSignupSchema>;
