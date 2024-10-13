
export interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}


export interface ApiResponse<T> {
  success: boolean;
  status: number;
  message: string;
  data?: T;
}

