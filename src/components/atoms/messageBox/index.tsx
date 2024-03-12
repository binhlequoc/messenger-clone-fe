import { useMemo } from "react";
import "./styles.scss";
import clsx from "clsx";

interface IMessageBox {
  roomId: string;
  numberOfUnreadMessage: number;
  lastMessageAt: Date;
  users: {
    firstName: string;
    lastName: string;
    avatar: string;
  }[];
  messages: {
    userId: string;
    roomId: string;
    text: string;
    files: string[];
    isRead: boolean;
  }[];
}

export default function MessageBox({
  users,
  messages,
  numberOfUnreadMessage,
  lastMessageAt,
}: IMessageBox) {
  const firstUser = useMemo(() => {
    return users[0];
  }, [users]);

  const lastMessage = useMemo(() => {
    return messages[0];
  }, []);

  return (
    <div
      className={clsx(
        "message-box",
        !lastMessage.isRead && "message-box--active"
      )}
    >
      {firstUser && (
        <>
          <img className="message-box__avatar" src={firstUser.avatar} />
          <div className="message-box__middle">
            <div className="message-box__name">{`${firstUser.firstName} ${firstUser.lastName}`}</div>
            {lastMessage && (
              <div className="message-box__last-message">
                {lastMessage.text}
              </div>
            )}
          </div>
          <div className="message-box__right">
            <div className="message-box__text">{`${lastMessageAt.getHours()}:${lastMessageAt.getMinutes()}`}</div>
            <div className="message-box__unread-message">
              {numberOfUnreadMessage}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
