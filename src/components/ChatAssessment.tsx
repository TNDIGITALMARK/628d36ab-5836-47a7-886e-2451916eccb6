'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: '0',
  role: 'assistant',
  content: "Welcome to your wellness journey. I'm here to understand your unique health goals and guide you toward personalized holistic wellness recommendations. Let's start with a simple question: What brings you here today? What aspect of your health or wellness would you like to focus on?",
  timestamp: new Date(),
};

const AI_RESPONSES = [
  {
    keywords: ['energy', 'tired', 'fatigue', 'exhausted'],
    response: "I understand energy levels are a concern for you. Low energy can stem from many sources - sleep quality, nutrition, stress, or lifestyle patterns. Can you tell me more about when you typically feel most tired? Is it throughout the day, or at specific times?",
  },
  {
    keywords: ['stress', 'anxiety', 'overwhelmed', 'worried'],
    response: "Thank you for sharing that. Stress and anxiety affect so many aspects of our wellbeing. It's wonderful that you're taking steps to address this. What are your main stress triggers? Is it work-related, personal relationships, or something else?",
  },
  {
    keywords: ['sleep', 'insomnia', 'rest', 'sleeping'],
    response: "Sleep is foundational to health - you're wise to focus on this. Quality rest affects everything from mood to immune function. How many hours are you currently sleeping per night? And do you have trouble falling asleep, staying asleep, or both?",
  },
  {
    keywords: ['nutrition', 'diet', 'eating', 'food', 'weight'],
    response: "Nutrition is such a powerful tool for wellness. What we eat directly impacts our energy, mood, and long-term health. What does your current diet look like? Are there any specific dietary concerns or preferences I should know about?",
  },
  {
    keywords: ['exercise', 'fitness', 'workout', 'movement', 'active'],
    response: "Movement is medicine! Regular physical activity benefits both body and mind. What's your current relationship with exercise? Do you have a routine, or is this something you're looking to develop?",
  },
  {
    keywords: ['pain', 'chronic', 'inflammation', 'ache'],
    response: "Chronic pain or discomfort can significantly impact quality of life. I'm here to help explore holistic approaches that may support your wellbeing. Can you describe where you experience discomfort and how long you've been dealing with this?",
  },
  {
    keywords: ['meditation', 'mindfulness', 'mental', 'focus'],
    response: "Mindfulness and mental clarity are essential components of holistic wellness. These practices can transform how we experience daily life. Have you tried meditation or mindfulness practices before? What appeals to you about this area?",
  },
];

const DEFAULT_RESPONSE = "That's really helpful to know. Every person's wellness journey is unique, and I'm here to provide guidance tailored specifically to you. Could you share a bit more about your daily routine and any wellness practices you currently follow?";

const CLOSING_RESPONSES = [
  "Based on what you've shared, I'm getting a clear picture of your wellness needs. Let me ask one more thing: What does success look like for you? What would make you feel like your health and wellness goals are being met?",
  "Thank you for sharing all of this with me. You've given me valuable insights into your wellness journey. I'd love to know - are there any specific health concerns or conditions I should be aware of as we create your personalized recommendations?",
  "This is wonderful information. One final question to help me provide the most relevant guidance: What's your biggest obstacle right now when it comes to prioritizing your health and wellness?",
];

export default function ChatAssessment() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Remove initial load animation after first render
    const timer = setTimeout(() => setIsInitialLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Check if we should give a closing response
    if (messageCount >= 4) {
      const randomClosing = CLOSING_RESPONSES[Math.floor(Math.random() * CLOSING_RESPONSES.length)];
      return randomClosing;
    }

    // Find matching response based on keywords
    for (const responseOption of AI_RESPONSES) {
      if (responseOption.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return responseOption.response;
      }
    }

    return DEFAULT_RESPONSE;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setMessageCount(prev => prev + 1);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: generateAIResponse(userMessage.content),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, aiResponse]);
    setIsTyping(false);

    // After 6 exchanges, offer to move to personalized recommendations
    if (messageCount >= 5) {
      setTimeout(async () => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        const finalMessage: Message = {
          id: (Date.now() + 2).toString(),
          role: 'assistant',
          content: "Thank you for sharing so openly with me. I now have a comprehensive understanding of your wellness needs and goals. Based on our conversation, I can provide you with personalized holistic health recommendations. Would you like to see your customized wellness plan now?",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, finalMessage]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h1 className="text-lg font-medium text-foreground">Wellness Assistant</h1>
              <p className="text-xs text-muted-foreground">Your personal guide to holistic health</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 py-8 max-w-3xl">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
                style={{
                  animationDelay: isInitialLoad && index === 0 ? '200ms' : '0ms',
                }}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-6 py-4 shadow-sm transition-all hover:shadow-md ${
                    message.role === 'user'
                      ? 'bg-foreground text-background'
                      : 'bg-secondary text-foreground'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.role === 'user'
                        ? 'text-background/60'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="max-w-[80%] rounded-2xl px-6 py-4 bg-secondary shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"></span>
                    </div>
                    <span className="text-xs text-muted-foreground">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-background/80 backdrop-blur-sm sticky bottom-0 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '400ms' }}>
        <div className="container mx-auto px-6 py-4 max-w-3xl">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share your thoughts..."
                rows={1}
                className="w-full px-4 py-3 pr-12 border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground resize-none min-h-[52px] max-h-[200px] shadow-sm transition-shadow hover:shadow-md focus:shadow-md"
                style={{
                  height: 'auto',
                  overflowY: inputValue.split('\n').length > 3 ? 'auto' : 'hidden',
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${Math.min(target.scrollHeight, 200)}px`;
                }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="h-[52px] px-5 bg-foreground text-background rounded-2xl hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center shadow-sm hover:shadow-md"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            This AI assistant provides general wellness guidance. Always consult healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}
