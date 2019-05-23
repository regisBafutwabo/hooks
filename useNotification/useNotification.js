/************************ useNotification *********************************************
 * - function that generate a notification on an eventListener
 * - the options part can be checked here for more information: https://developer.mozilla.org/en-US/docs/Web/API/notification
 ******************************************************************************/

export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      return;
    }
    const fireNotif = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title, options);
      }
    };
    return fireNotif;
  };