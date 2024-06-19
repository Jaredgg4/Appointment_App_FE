
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationsState, Notification } from '@/types/notificationTypes';

const initialState: NotificationsState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    markNotificationAsRead: (state, action: PayloadAction<string>) => {
      const notificationIndex = state.notifications.findIndex(notification => notification.id === action.payload);
      if (notificationIndex !== -1) {
        state.notifications[notificationIndex].read = true;
      }
    },
  },
});

export const { addNotification, markNotificationAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
