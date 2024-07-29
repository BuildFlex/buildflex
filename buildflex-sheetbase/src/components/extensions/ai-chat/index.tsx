import React, { useState, useRef, useEffect } from 'react';
import { CloseCircle, Add, Magicpen, Sort, Chart } from 'iconsax-react';

interface ChatMessage {
  type: 'user' | 'ai';
  content: string;
}

const AIChatDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { type: 'user', content: inputMessage }]);
      setInputMessage('');
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: 'ai', content: `Echo: ${inputMessage}` },
        ]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-[90px] bottom-0 w-96 bg-white shadow-lg flex flex-col">
      {/* Header */}
      <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">AI chat tool</h2>
        <button onClick={onClose} className="text-white">
          <CloseCircle size={24} />
        </button>
      </div>

      {/* Options */}
      <div className="p-4 bg-gray-50">
        <p className="text-sm text-gray-600 mb-2">
          Select an option to learn how I can work with your data in table:
        </p>
        <div className="space-y-2">
          {[
            { icon: Add, text: 'Add formula columns' },
            { icon: Magicpen, text: 'Highlight' },
            { icon: Sort, text: 'Sort and filter' },
            { icon: Chart, text: 'Analyze' },
          ].map((option, index) => (
            <button
              key={index}
              className="w-full text-left p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 flex items-center"
            >
              <option.icon size={20} className="mr-2 text-gray-500" />
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {/* Chat content */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${message.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-4 bg-blue-700">
        <div className="flex items-center bg-white rounded-lg">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask a question or make a request about data in a table"
            className="flex-grow p-2 rounded-l-lg focus:outline-none"
          />
          <button onClick={handleSendMessage} className="p-2 text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatDrawer;
