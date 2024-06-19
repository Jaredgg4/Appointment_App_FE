export interface Notification {
    id: string;
    message: string;
    read: boolean;
  }
  
  export interface NotificationsState {
    notifications: Notification[];
  }
  