import MessageBox from "@/components/atoms/messageBox";
import "./styles.scss";

const DATA_TEMP = [
  {
    roomId: "1",
    numberOfUnreadMessage: 3,
    lastMessageAt: new Date(),
    users: [
      {
        firstName: "Carla",
        lastName: "Nguyen",
        avatar:
          "https://vtv1.mediacdn.vn/zoom/640_400/2022/10/28/1625851366581-1666942675378236082671-crop-16669426829141221318866.jpg",
      },
    ],
    messages: [
      {
        userId: "userid",
        roomId: "room",
        text: "Hello BinhLQ",
        files: [""],
        isRead: false,
      },
    ],
  },
  {
    roomId: "2",
    numberOfUnreadMessage: 3,
    lastMessageAt: new Date(),
    users: [
      {
        firstName: "Billie",
        lastName: "Eilish",
        avatar:
          "https://vtv1.mediacdn.vn/zoom/640_400/2022/10/28/1625851366581-1666942675378236082671-crop-16669426829141221318866.jpg",
      },
    ],
    messages: [
      {
        userId: "userid",
        roomId: "room",
        text: "Hello BinhLQ",
        files: [""],
        isRead: false,
      },
    ],
  },
];
export default function ListFriend() {
  return (
    <div className="list-friend">
      <div className="spacing"></div>
      {DATA_TEMP.map((message) => (
        <MessageBox key={message.roomId} {...message} />
      ))}
    </div>
  );
}
