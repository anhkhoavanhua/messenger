import { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { firebaseConfig, getFirebaseDatabase } from "./services/firebase";
import { ref, onValue } from "firebase/database";
import { AppLayout } from "./containers/AppLayout";
import { ChatRecords } from "./containers/ChatRecords";
import { Col, Container, Row } from "react-bootstrap";

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
  const firebaseDB = useMemo(() => {
    return getFirebaseDatabase(firebaseConfig);
  }, []);

  useEffect(() => {
    const starCountRef = ref(firebaseDB);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, [firebaseDB]);

  return (
    <AppLayout>
      <div>
        <ChatRecords messages={messages} />
        <Container>
          <Row>
            <div className="col-auto ps-0" style={{width: 100}}>
              <input
                value={name}
                onChange={(e) => setName(e?.target?.value)}
                placeholder="tên"
                className="form-control"
              />
            </div>
            <Col className="p-0">
              <input
                value={mess}
                onChange={(e) => setMess(e?.target?.value)}
                placeholder="tin nhắn"
                className="form-control"
              />
            </Col>
            <div className="col-auto pe-0">
              <button className="btn btn-primary" onClick={handleSend}>
                Gửi
              </button>
            </div>
          </Row>
        </Container>
      </div>
    </AppLayout>
  );
}

export default App;
