import * as notifData from '../../notifications.json';
import { schema } from 'normalizr';

// create entities
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Get notifications by user id
const getAllNotificationsByUser = (userId) => {
  return notifData.default.filter(notification => notification.author.id === userId).map(notification => notification.context);
}

export { user, message, notification, getAllNotificationsByUser };
