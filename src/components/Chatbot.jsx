import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: 'Xin chào! Bạn có thể hỏi nhanh về 6 cặp phạm trù hoặc cách trình bày bài MLN111.',
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Gợi ý: hãy xem phần Học thuyết để lấy ý chính, sau đó dùng Khảo nghiệm để luyện cách vận dụng vào tình huống.',
          sender: 'bot',
        },
      ]);
    }, 800);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chatbot-toggle animate-fade-in" onClick={() => setIsOpen(true)} aria-label="Mở trợ lý">
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window animate-fade-in">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <MessageCircle size={20} />
              <span>Trợ lý MLN111</span>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Đóng trợ lý">
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={`${message.text}-${index}`} className={`message-bubble ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder="Nhập câu hỏi của bạn..."
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSend} aria-label="Gửi câu hỏi">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
