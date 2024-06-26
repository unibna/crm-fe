export interface SaleReportTelesaleUser {
  handle_by?: string;
  total_lead_assigned?: number;
  cold_lead_assigned?: number;
  hot_lead_assigned?: number;
  total_lead_processed?: number;
  cold_lead_processed?: number;
  cold_lead_processed_is_buy?: number;
  cold_lead_processed_not_qualified?: number;
  hot_lead_processed?: number;
  hot_lead_processed_is_buy?: number;
  hot_lead_processed_not_qualified?: number;
  total_revenue?: number;
  hot_revenue?: number;
  cold_revenue?: number;
  total_order?: number;
  hot_order?: number;
  cold_order?: number;
  talktime?: number;
  cold_lead_not_qualified_ratio?: number;
  cold_lead_is_buy_ratio?: number;
  hot_lead_not_qualified_ratio?: number;
  hot_lead_is_buy_ratio?: number;
  aov?: number;
  cold_data_aov?: number;
  hot_data_aov?: number;
  cold_data_revenue_per_lead?: number;
  hot_data_revenue_per_lead?: number;
}
export interface SaleReportTotal {
  aov?: number;
  assigned_date?: string;
  assigned_lead?: number;
  buy_lead?: number;
  buy_ratio?: number;
  created_date?: Date;
  lasted_created_date?: Date;
  lead_channel?: string;
  new_lead?: number;
  not_buy_lead?: number;
  order_channel?: string;
  processed_date?: Date;
  processed_lead?: number;
  processing_lead?: number;
  qualified_lead?: number;
  telesale?: string;
  total_customer?: number;
  total_lead?: number;
  total_order?: number;
  total_revenue?: number;
  unassigned_lead?: number;
  waiting_lead?: number;
}
export interface SaleReportCompareTotalRevenue {
  total_revenue_1?: number;
  total_revenue_2?: number;
  total_revenue_change?: string;
  total_revenue_percent_change?: string;
  buy_ratio_1?: number;
  buy_ratio_2?: number;
  buy_ratio_change?: string;
  buy_ratio_percent_change?: string;
  aov_1?: number;
  aov_2?: number;
  aov_change?: string;
  aov_percent_change?: string;
  qualified_lead_1?: number;
  qualified_lead_2?: number;
  qualified_lead_change?: string;
  qualified_lead_percent_change?: string;
  processed_1?: number;
  processed_2?: number;
  processed_change?: string;
  processed_percent_change?: string;
  total_customer_1?: number;
  total_customer_2?: number;
  total_customer_change?: string;
  total_customer_percent_change?: string;
  total_lead_1?: number;
  total_lead_2?: number;
  total_lead_change?: string;
  total_lead_percent_change?: string;
  total_order_1?: number;
  total_order_2?: number;
  total_order_change?: string;
  total_order_percent_change?: string;
}
