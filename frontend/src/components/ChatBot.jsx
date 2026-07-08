import { useState,useContext } from "react";
import axios from "axios";
import "./ChatBot.css";
import { StoreContext } from "../context/Context";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const {url}=useContext(StoreContext);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I'm Campus Connect AI. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(url+
        "/api/chat",
        {
          message: userMessage,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: res.data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {isOpen && (
        <div className="chat-box">

          <div className="chat-header">
            Campus Connect AI
            <span onClick={() => setIsOpen(false)}>✖</span>
          </div>

          <div className="chat-body">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "user-msg"
                    : "bot-msg"
                }
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bot-msg">
                Typing...
              </div>
            )}

          </div>

          <div className="chat-footer">

            <input
              value={message}
              placeholder="Ask anything..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

        </div>
      )}
    </>
  );
}