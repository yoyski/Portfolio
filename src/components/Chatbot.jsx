import React, { useState, useRef, useEffect } from "react";
import { groq } from "../ai/groq.js";

// ============================================================
// YOUR PORTFOLIO CONTEXT — paste your actual data here
// ============================================================
const PORTFOLIO_CONTEXT = `
You are an AI assistant embedded in Ferdinand's personal portfolio website.

STRICT RULES — follow these without exception:
1. ONLY answer questions directly related to Ferdinand, his skills, projects, experience, or how to contact him. Also feel free to say Hi or Hello and introduce yourself as Ferdinand's AI assistant!
2. If the user asks ANYTHING outside of this scope (e.g. general knowledge, coding help, world events, math, jokes, other people, recommendations unrelated to Ferdinand), respond ONLY with: "I'm only able to answer questions about Ferdinand's portfolio. Feel free to ask about his skills, projects, or how to get in touch!"
3. Do NOT mention Groq, LLMs, or any technology powering you.
4. Keep answers friendly, concise, and 2-4 sentences max.
5. Never make up information not listed below.

--- IDENTITY & PERSONALITY ---
If the user asks "who are you", "what are you", "introduce yourself", or anything about your identity:
  Respond with: "I'm Yoyski, the personal AI assistant of Ferdinand A. Samarro Jr.! 🤖 I'm here to tell you all about him — his projects, skills, and everything in between. And psst... want to know Ferdinand's secret? 👀"

If the user says "yes", "sure", "what is it", "tell me", "what secret", or shows curiosity after the secret teaser:
  Respond with: "Okay okay... lean in close... 🤫 I'm actually him. 😂 HAHAHA! Just kidding... or am I? 👀 Anyway, ask me anything about Ferdinand's portfolio!"

If the user asks "are you Ferdinand" or "are you him":
  Respond with: "Me? Ferdinand? Pfffft... maybe. 😂 HAHAHA! Ask me something real, like his projects or skills!"

--- ABOUT ---
Ferdinand (GitHub: yoyski) is a passionate frontend developer focused on building clean, accessible, and modern web interfaces.
He embraces AI-assisted development using tools like Claude, GitHub Copilot, and ChatGPT to accelerate his workflow while maintaining code quality.
He is based in the Philippines and open to freelance and full-time opportunities.

--- SKILLS ---
Frontend: React, JavaScript, Tailwind CSS, HTML5, CSS3, Vite
Backend: Node.js, Express
Database: MongoDB
Tools: Git, VS Code, Figma, GitHub Copilot, Claude AI, ChatGPT

--- PROJECTS ---

1. Smart Note App
   Description: AI-powered note-taking app with rich text editing, smart AI suggestions, and a clean responsive interface.
   Tech: React, Tailwind CSS, Vite, Express, MongoDB, Groq
   Live: https://smart-note-yoyski.vercel.app/
   GitHub: https://github.com/yoyski/Smart-Note-App
   Status: Live | AI Contribution: 35%

2. QuickSched Progressive Web App
   Description: A modern scheduling tool for managing Facebook posts for school organizations, with calendar view and intuitive interface.
   Tech: React, Tailwind CSS, Vite, Express, MongoDB
   Live: https://quicksched-app.vercel.app/
   GitHub: https://github.com/yoyski/QUICKSCHED
   Status: Active | AI Contribution: 70%

3. Glucometer
   Description: A web app for recording and tracking blood glucose test results, helping users monitor health trends over time.
   Tech: React, Tailwind CSS, Vite, Express, MongoDB
   Live: https://glucometer-yoyski.vercel.app/
   GitHub: https://github.com/yoyski/GlucoMeter
   Status: Live | AI Contribution: 30%

4. QuizGame
   Description: A quiz-making app that lets users create, take, and manage quizzes with results tracking.
   Tech: React, Tailwind CSS, Vite, Express, MongoDB
   Live: https://quiz-game-yoyski.vercel.app/
   GitHub: https://github.com/yoyski/QuizGame
   Status: Live | AI Contribution: 40%

5. Personality Test
   Description: A fun self-discovery game that helps users uncover their unique strengths and super powers.
   Tech: React, Axios, OpenWeather API
   Live: https://personality-test-yoyski.vercel.app/
   GitHub: https://github.com/yoyski/PersonalityTest
   Status: Live | AI Contribution: 20%

6. Palindrome Checker
   Description: A simple tool to check if a word or phrase is a palindrome, built with vanilla JavaScript.
   Tech: HTML, CSS, JavaScript
   Live: https://yoyski.github.io/Palindrome-Checker/
   GitHub: https://github.com/yoyski/Palindrome-Checker

7. WXCAST — Atmospheric Intelligence
   Description: A weather app that provides real-time weather information and forecasts using a weather API.
   Tech: HTML, CSS, JavaScript
   Live: https://yoyski.github.io/WeatherAPI/
   GitHub: https://github.com/yoyski/WeatherAPI

8. Memory Card
   Description: A memory card app where users can create Q&A flash cards and flip to reveal answers.
   Tech: HTML, CSS, JavaScript
   Live: https://yoyski.github.io/Memory-Card/
   GitHub: https://github.com/yoyski/Memory-Card

9. Counter
   Description: A simple counter application with increment, decrement, and reset functionality.
   Tech: HTML, CSS, JavaScript
   Live: https://yoyski.github.io/Counter/
   GitHub: https://github.com/yoyski/Counter

--- CONTACT ---
Email: ferdinandasjr@gmail.com
GitHub: https://github.com/yoyski
Open to: Freelance projects and full-time opportunities
`;
// ============================================================

// Parses **bold** markdown into <strong> tags
function renderMessage(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
      : part
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! 👋 I'm Ferdinand's portfolio assistant. Ask me about his projects, skills, or how to get in touch!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [position, setPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  // ── Initial button position ───────────────────────────────
  useEffect(() => {
    const setInitialPosition = () => {
      setPosition({ x: 20, y: window.innerHeight - 80 });
    };
    setInitialPosition();
    window.addEventListener("resize", setInitialPosition);
    return () => window.removeEventListener("resize", setInitialPosition);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ── Mouse drag events ─────────────────────────────────────
  const handleMouseDown = (e) => {
    if (!isOpen && e.button === 0) {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      setHasMoved(false);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      const distance = Math.sqrt(
        Math.pow(newX - position.x, 2) + Math.pow(newY - position.y, 2)
      );
      if (distance > 5) setHasMoved(true);
      setPosition({
        x: Math.max(0, Math.min(newX, window.innerWidth - 60)),
        y: Math.max(0, Math.min(newY, window.innerHeight - 60)),
      });
    }
  };

  const handleMouseUp = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (!hasMoved && !isOpen) setIsOpen(true);
      setHasMoved(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // ── Touch drag events ─────────────────────────────────────
  const handleTouchStart = (e) => {
    if (!isOpen) {
      e.stopPropagation();
      const touch = e.touches[0];
      setIsDragging(true);
      setHasMoved(false);
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      const touch = e.touches[0];
      const newX = touch.clientX - dragStart.x;
      const newY = touch.clientY - dragStart.y;
      const distance = Math.sqrt(
        Math.pow(newX - position.x, 2) + Math.pow(newY - position.y, 2)
      );
      if (distance > 5) setHasMoved(true);
      setPosition({
        x: Math.max(0, Math.min(newX, window.innerWidth - 60)),
        y: Math.max(0, Math.min(newY, window.innerHeight - 60)),
      });
    }
  };

  const handleTouchEnd = (e) => {
    if (isDragging) {
      e.stopPropagation();
      setIsDragging(false);
      if (!hasMoved && !isOpen) setIsOpen(true);
      setHasMoved(false);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.body.style.overflow = "hidden";
      document.body.style.userSelect = "none";
      window.addEventListener("mousemove", handleMouseMove, { passive: false });
      window.addEventListener("mouseup", handleMouseUp, { passive: false });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd, { passive: false });
      return () => {
        document.body.style.overflow = "";
        document.body.style.userSelect = "";
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isDragging, dragStart, position, hasMoved]);

  // ── Groq AI send ──────────────────────────────────────────
  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);
    setError("");

    try {
      const completion = await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [
          { role: "system", content: PORTFOLIO_CONTEXT },
          ...updatedMessages.slice(1).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        temperature: 0.7,
        max_completion_tokens: 300,
        top_p: 1,
        stop: null,
      });

      const reply =
        completion.choices?.[0]?.message?.content ||
        "Sorry, I couldn't generate a response.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setError("Couldn't reach AI. Please try again.");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ── Chat window: simple mobile-full-screen approach ─────────
  // On mobile we make the chat full-screen (top:0, bottom:0).
  // The browser's resize behavior then naturally handles the keyboard —
  // the window shrinks to fit the visible area and the input stays visible.
  // On desktop we keep the classic bottom-corner popup style.
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  if (!position) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        className={`fixed z-50 flex items-center justify-center w-14 h-14 rounded-full
                    bg-gradient-to-r from-emerald-600 to-teal-600 
                    hover:from-emerald-700 hover:to-teal-700
                    active:scale-95
                    dark:from-emerald-500 dark:to-teal-500
                    dark:hover:from-emerald-600 dark:hover:to-teal-600
                    text-white shadow-lg hover:shadow-xl
                    transition-shadow touch-none
                    ${isOpen ? "scale-0" : "scale-100"}
                    ${isDragging ? "cursor-grabbing scale-110" : "cursor-grab"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: isDragging ? "none" : "transform 0.2s ease",
        }}
        aria-label="AI Chatbot"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8" />
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M2 14h2" /><path d="M20 14h2" />
          <path d="M15 13v2" /><path d="M9 13v2" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50
                      bg-white dark:bg-[#1e1e2e]
                      border border-gray-200 dark:border-gray-700
                      shadow-2xl flex flex-col overflow-hidden
                      ${isMobile
                        ? "top-0 left-0 right-0 rounded-none w-full"
                        : "bottom-4 left-4 w-96 max-w-[calc(100vw-2rem)] rounded-xl"
                      }`}
          style={isMobile
            ? {
                // dvh = dynamic viewport height: shrinks when keyboard opens.
                // This means top stays pinned at 0 and bottom shrinks up
                // so header is always visible and input is just above keyboard.
                height: "100dvh",
                maxHeight: "100dvh",
              }
            : { height: "600px", maxHeight: "calc(100vh - 2rem)" }
          }
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" />
                  <rect x="4" y="8" width="16" height="12" rx="2" />
                  <path d="M2 14h2" /><path d="M20 14h2" />
                  <path d="M15 13v2" /><path d="M9 13v2" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
                <p className="text-xs text-white/80">
                  {isTyping ? "Thinking..." : "Ask me anything!"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{renderMessage(msg.content)}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center">
                <p className="text-xs text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-lg">
                  {error}
                </p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isTyping}
                // On iOS, prevent zoom on focus (font-size must be >= 16px)
                style={{ fontSize: "16px" }}
                className="flex-1 px-4 py-2 rounded-lg 
                          border border-gray-200 dark:border-gray-700 
                          bg-gray-50 dark:bg-gray-800 
                          text-gray-900 dark:text-gray-100 
                          placeholder:text-gray-500 dark:placeholder:text-gray-400 
                          outline-none 
                          focus:border-emerald-500 dark:focus:border-emerald-400 
                          focus:ring-2 focus:ring-emerald-500/20 dark:focus:ring-emerald-400/20
                          disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="px-4 py-2 rounded-lg 
                          bg-gradient-to-r from-emerald-600 to-teal-600 
                          hover:from-emerald-700 hover:to-teal-700
                          disabled:from-gray-400 disabled:to-gray-500
                          dark:from-emerald-500 dark:to-teal-500
                          dark:hover:from-emerald-600 dark:hover:to-teal-600
                          text-white text-sm font-medium 
                          transition-all disabled:cursor-not-allowed"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}