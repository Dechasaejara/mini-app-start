
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

export type TelegramGetUpdate = {
  ok: boolean;
  result: Array<{
    update_id: number;
    channel_post: {
      message_id: number;
      chat: {
        id: number;
        title: string;
        username: string;
        type: string;
      };
      date: number; // Unix timestamp
      text: string;
    };
  }>;
};

