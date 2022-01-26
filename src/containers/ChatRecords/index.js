import '../../styles/ChatRecords.css';

export const ChatRecords = ({ messages }) => {
  return (
    <div className="chat-records-container">
      {messages?.map((item) => {
        return (
          <div>
            {item?.name}: {item?.message}
          </div>
        );
      })}
    </div>
  );
};
