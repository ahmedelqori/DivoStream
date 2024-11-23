import { useState } from "react";
import {
  Notificationbar,
  CloseNotification,
  NotificationContent,
} from "./NotificationBar.styled";

const NotificationBar = () => {
  const content = "Hi This Web Site For Streaming games and Other things";
  const [isClose, setIsClose] = useState(false);
  return (
    <>
      {!isClose ? (
        <Notificationbar>
          <NotificationContent>{content}</NotificationContent>
          <CloseNotification
            aria-label="Close notification"
            onClick={() => setIsClose(true)}
          >
            X
          </CloseNotification>
        </Notificationbar>
      ) : null}
    </>
  );
};

export default NotificationBar;
