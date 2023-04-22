export type LayoutProps = {
  children: React.ReactNode;
};

export interface ApiResponse {
  success: boolean;
  error?: string;
}

export interface HtmlInputValue {
  value: string;
}
