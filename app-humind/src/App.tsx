import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="chatBox">
      <div className="messageList">
        {messages.map((msg, idx) => (
          <div key={idx} className="message">{msg}</div>
        ))}
      </div>
      <div className="input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
    </div>
  );
}
function App() {
  //const [count, setCount] = useState<number>(0)
  return (
    <>
      <div className="landing">
        <h1>Humind</h1>
      </div>
      <div><ChatBox /></div>
    </>
  )
}

export default App
