import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from "./notificationActionTypes";
import { notificationsNormalizer } from '../schema/notifications';

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index
  }
}

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter
  }
}

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: notificationsNormalizer(data).entities.notifications,
});

export const fetchNotifications = () => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const response = await fetch('/notifications.json');
    if (!response.ok) {
      throw new Error('Failed to fetch notifications');
    }
    const data = await response.json();
    dispatch(setNotifications(data));
  } catch (error) {
    console.error('Error fetching notifications:', error);
  } finally {
    dispatch(setLoadingState(false));
  }
};
