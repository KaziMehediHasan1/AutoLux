import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

// Initialize socket connection
const socket = io(import.meta.env.VITE_SERVER_URL || "http://localhost:5000", {
  withCredentials: true,
  extraHeaders: {
    "Access-Control-Allow-Origin": "*",
  },
});

const Message = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userMail = searchParams.get("user");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    // socket.on("receiveMessage", (data) => {
    //   setMessages((prevMessages) => [...prevMessages, data]);
    //   setIsTyping(false);
    // });

    // listening for server message
    socket.on("welcome", (message) => {
      console.log(message, "33 no line");
    });

    // sending message to the server..
    socket.emit("message", { user: "mehedi", text: "Hello from client" });

    // Listen for typing indicator
    // socket.on("typing", (data) => {
    //   setIsTyping(data.isTyping);
    // });

    // Listen for stop typing event
    // socket.on("stopTyping", () => {
    //   setIsTyping(false);
    // });

    // Listen for online users update
    // socket.on("updateUser", (users) => {
    //   setOnlineUsers(users);
    // });

    // Cleanup listeners on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // Handle sending a message
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", { content: message, to: userMail });
      setMessage("");
    }
  };

  // Handle typing indicator
  const handleTyping = () => {
    socket.emit("typing", { to: userMail });
  };

  const handleStopTyping = () => {
    socket.emit("stopTyping", { to: userMail });
  };

  return (
    <div className="lg:w-[1320px] mx-auto lg:pt-28 pt-16 lg:pb-20 pb-2">
      <Helmet>
        <title>AutoLux | Message</title>
      </Helmet>

      <form className="bg-slate-200 rounded-lg" onSubmit={sendMessage}>
        {/* Display online users */}
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Online Users:</h2>
          <ul>
            {onlineUsers.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>

        {/* Display received messages */}
        <div className="p-4">
          {messages.map((msg, index) => (
            <p key={index}>{msg.content}</p>
          ))}
        </div>

        {/* Typing indicator */}
        {isTyping && <p className="p-4">Typing...</p>}
        {/* Input and send button */}
        <div className="pt-[535px] h-[600px]">
          <div className="flex items-center px-3 py-3 bg-gray-50">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleTyping}
              onKeyUp={handleStopTyping}
              className="block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg p-2.5"
              placeholder="Your message..."
            />
            <button
              type="submit"
              className="p-2 text-blue-600 rounded-full hover:bg-blue-100"
            >
              <svg
                className="w-5 h-5 rotate-90"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Message;
