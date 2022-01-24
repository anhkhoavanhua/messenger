import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [messages, setMessages] = useState([]);
  const handleSend = () => {
    setMessages([
      ...messages,
      {
        name: name,
        message: mess,
      },
    ]);
    setMess("");
  };

  const [mess, setMess] = useState("");
  const [name, setName] = useState("");
  return (
    <div>
      {messages?.map((item) => {
        return (
          <div>
            {item?.name}: {item?.message}
          </div>
        );
      })}
      <input
        value={name}
        onChange={(e) => setName(e?.target?.value)}
        placeholder="tên"
      />
      <input
        value={mess}
        onChange={(e) => setMess(e?.target?.value)}
        placeholder="tin nhắn"
      />
      <button className="btn btn-primary" onClick={handleSend}>
        Gửi
      </button>
    </div>
  );
}

export default App;
