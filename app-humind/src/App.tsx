import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CreateTopic() {
  return (
    <div className="topicButton w-full   rounded-bl-lg rounded-tr-lg">
      <h1 className='p-3'>
        Create a philosophical topic
      </h1>
      <h2 className='text-center p-0.5'>
        Assisted by AI
      </h2>
      <input className='mx-auto block' type="text" placeholder="What's on your mind ?"></input>
    </div>
  )
}
function TopicButton() {
  const [click, setClick] = useState<boolean>(false);
  return (
    <div className='p-2'>
      <button onClick={() => setClick(true)}> Create a Topic</button>
      {click && <CreateTopic />}
    </div>
  )
}
function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="chatBox w-full max-w-md bg-gray-800 p-4 rounded-bl-lg rounded-tr-lg shadow-lg">
      <div className="messageList mb-4 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="message p-2 bg-gray-600 text-red-500 rounded">{msg}</div>
        ))}
      </div>
      <div className="input flex gap-2">
        <input
          className="flex-1 border rounded px-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="w-full text-5xl font-bold text-center p-4">
        Humind
      </h1>
      <TopicButton />
      <ChatBox />
    </div>
  );
}


export default App
