import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './notificationsSlice';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    // Other reducers if any
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
