import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi there! I'm AdeBot. I can tell you about Ashaolu's skills, projects, or experience. How can I help?",
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    try {
      // Filter history to only text content logic is handled in service, 
      // but we pass the full state here for context
      const responseText = await sendMessageToGemini(messages, userMessage.text);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: "Oops! I'm having trouble connecting to my brain right now. Please try again later.",
        timestamp: new Date()
      }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } bg-gradient-to-r from-primary to-secondary text-white`}
        aria-label="Open Chatbot"
      >
        <MessageSquare size={28} />
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
        </span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right flex flex-col max-h-[80vh] ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">AdeBot AI</h3>
              <p className="text-xs text-white/80 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></span>
                Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50 scrollbar-hide">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-br-none'
                    : 'bg-white/10 text-gray-100 rounded-bl-none border border-white/5'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loadingState === LoadingState.LOADING && (
            <div className="flex justify-start">
              <div className="bg-white/10 text-gray-100 p-3 rounded-2xl rounded-bl-none border border-white/5 flex items-center space-x-2">
                <Loader2 size={16} className="animate-spin text-primary" />
                <span className="text-xs text-gray-400">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-card border-t border-white/10 shrink-0">
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about my skills..."
              className="w-full bg-dark/50 text-white placeholder-gray-500 border border-white/10 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loadingState === LoadingState.LOADING}
              className="absolute right-2 p-2 bg-white/10 hover:bg-primary text-white rounded-lg disabled:opacity-50 disabled:hover:bg-white/10 transition-all"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-2">
             <p className="text-[10px] text-gray-500">Powered by Google Gemini 2.5 Flash</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;