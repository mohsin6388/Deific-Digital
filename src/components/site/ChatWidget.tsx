import { useState, useEffect, useRef } from "react";

// ============================================================
// CONFIG — set this in your .env file if your backend isn't
// served under the same domain at /ai.
// Vite:  VITE_AI_BACKEND_URL=https://www.deificdigital.com/ai
// If not set, defaults to "/ai" (same-domain via the Nginx route).
// ============================================================
const API_BASE: string =
  (import.meta as any)?.env?.VITE_AI_BACKEND_URL || "/ai";

type Role = "user" | "bot";

interface ChatMessage {
  role: Role;
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [listening, setListening] = useState<boolean>(false);
  const [micSupported, setMicSupported] = useState<boolean>(true);

  const sessionIdRef = useRef<string>("");
  const startedRef = useRef<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const recognitionRef = useRef<any>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  // Session id: persisted per browser tab session
  useEffect(() => {
    let id = sessionStorage.getItem("dg_session_id");
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem("dg_session_id", id);
    }
    sessionIdRef.current = id;
  }, []);

  // Preload speech synthesis voices
  useEffect(() => {
    const load = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
  }, []);

  // Setup speech recognition (mic)
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setMicSupported(false);
      return;
    }
    const rec = new SpeechRecognition();
    rec.lang = "en-IN";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    rec.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      sendMessage(transcript);
    };
    recognitionRef.current = rec;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function detectSpeechLang(text: string) {
    return /[\u0900-\u097F]/.test(text) ? "hi-IN" : "en-IN";
  }

  function pickFemaleVoice(targetLang: string) {
    const voices = voicesRef.current;
    const femaleHints = [
      "neerja",
      "swara",
      "heera",
      "kalpana",
      "lekha",
      "veena",
      "priya",
      "female",
      "google हिन्दी",
      "zira",
      "samantha",
      "moira",
      "tessa",
    ];
    const exactLang = voices.filter(
      (v) => v.lang.toLowerCase() === targetLang.toLowerCase(),
    );
    const indianLang = voices.filter((v) => /^(hi-in|en-in)$/i.test(v.lang));
    for (const pool of [exactLang, indianLang, voices]) {
      if (!pool.length) continue;
      const match = pool.find((v) =>
        femaleHints.some((h) => v.name.toLowerCase().includes(h)),
      );
      if (match) return match;
    }
    const fallbackPool = indianLang.length ? indianLang : voices;
    return (
      fallbackPool.find((v) => !/male/i.test(v.name)) ||
      fallbackPool[0] ||
      voices[0] ||
      null
    );
  }

  function speak(text: string) {
    const targetLang = detectSpeechLang(text);
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1.0;
    utter.pitch = 1.05;
    utter.lang = targetLang;
    const voice = pickFemaleVoice(targetLang);
    if (voice) {
      utter.voice = voice;
      utter.lang = voice.lang;
    }
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  const openChat = async () => {
    setIsOpen(true);
    if (!startedRef.current) {
      startedRef.current = true;
      setIsTyping(true);
      try {
        const res = await fetch(`${API_BASE}/web/start`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: sessionIdRef.current }),
        });
        const data = await res.json();
        const greeting: ChatMessage = { role: "bot", text: data.reply };
        setMessages([greeting]);
        speak(data.reply);
      } catch {
        setMessages([
          {
            role: "bot",
            text: "Connection error — please try again in a moment.",
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    }
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const sendMessage = async (overrideText?: string) => {
    const text = (overrideText ?? input).trim();
    if (!text || sending) return;

    if (!startedRef.current) await openChat();

    setInput("");
    setSending(true);
    setMessages((prev) => [...prev, { role: "user", text }]);
    setIsTyping(true);

    try {
      const res = await fetch(`${API_BASE}/web/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          message: text,
        }),
      });
      const data = await res.json();
      const reply: string =
        data.reply || "Sorry, kuch gadbad hui. Dobara try karein.";
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      speak(reply);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Connection error — please try again in a moment.",
        },
      ]);
    } finally {
      setIsTyping(false);
      setSending(false);
      inputRef.current?.focus();
    }
  };

  const toggleMic = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      return;
    }
    window.speechSynthesis.cancel();
    recognitionRef.current.start();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      <style>{`
        :root {
          --dg-bg: #14161C;
          --dg-panel: #1C1F27;
          --dg-border: #2B2F3A;
          --dg-text: #E8E9ED;
          --dg-muted: #8A8F9C;
          --dg-accent: #FF5A36;
          --dg-user-bubble: #2A2E38;
          --dg-mono: 'IBM Plex Mono', 'Courier New', monospace;
          --dg-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        #dg-launcher {
          position: fixed; bottom: 24px; right: 24px; width: 58px; height: 58px;
          border-radius: 50%; background: var(--dg-accent); border: none;
          color: #14161C; display: flex; align-items: center; justify-content: center; cursor: pointer;
          box-shadow: 0 8px 24px rgba(255,90,54,0.4); z-index: 999998; transition: transform 0.15s ease;
        }
        #dg-launcher:hover { transform: scale(1.06); }
        #dg-launcher:focus-visible { outline: 2px solid var(--dg-accent); outline-offset: 2px; }
        #dg-launcher-ring {
          position: absolute; inset: 0; border-radius: 50%;
          border: 2px solid var(--dg-accent); animation: dg-pulse 2.2s ease-out infinite;
          pointer-events: none;
        }
        #dg-launcher.dg-launcher-open #dg-launcher-ring { display: none; }
        @keyframes dg-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        #dg-launcher-badge {
          position: absolute; top: -2px; right: -2px; width: 14px; height: 14px;
          border-radius: 50%; background: #22C55E; border: 2px solid var(--dg-bg);
        }
        #dg-window {
          position: fixed; bottom: 96px; right: 24px; width: 360px; max-width: calc(100vw - 32px);
          height: 480px; max-height: calc(100vh - 140px); background: var(--dg-panel);
          border: 1px solid var(--dg-border); border-radius: 16px; display: flex; flex-direction: column;
          overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5); z-index: 999999;
          font-family: var(--dg-sans); opacity: 0; transform: translateY(12px);
          transition: opacity 0.2s ease, transform 0.2s ease; pointer-events: none;
        }
        #dg-window.dg-open { opacity: 1; transform: translateY(0); pointer-events: auto; }
        #dg-header {
          background: var(--dg-bg); border-bottom: 1px solid var(--dg-border); padding: 14px 16px;
          display: flex; align-items: center; justify-content: space-between;
        }
        #dg-header-title {
          font-family: var(--dg-mono); font-size: 13px; color: var(--dg-text);
          display: flex; align-items: center; gap: 8px;
        }
        .dg-cursor { color: var(--dg-accent); animation: dg-blink 1.1s steps(1) infinite; }
        @keyframes dg-blink { 50% { opacity: 0; } }
        #dg-close {
          background: none; border: none; color: var(--dg-muted); font-size: 18px;
          cursor: pointer; line-height: 1; padding: 4px;
        }
        #dg-close:hover { color: var(--dg-text); }
        #dg-messages {
          flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 10px;
        }
        .dg-msg { max-width: 85%; font-size: 13.5px; line-height: 1.5; }
        .dg-msg-user {
          align-self: flex-end; background: var(--dg-user-bubble); color: var(--dg-text);
          padding: 8px 12px; border-radius: 10px 10px 2px 10px;
        }
        .dg-msg-user::before { content: "> "; color: var(--dg-accent); font-family: var(--dg-mono); }
        .dg-msg-bot { align-self: flex-start; color: var(--dg-text); padding: 8px 0; }
        .dg-label {
          display: block; font-family: var(--dg-mono); font-size: 10.5px;
          color: var(--dg-muted); margin-bottom: 3px; letter-spacing: 0.03em;
        }
        .dg-msg-typing { color: var(--dg-muted); font-family: var(--dg-mono); font-size: 12px; }
        #dg-inputrow { border-top: 1px solid var(--dg-border); padding: 10px; display: flex; gap: 8px; }
        #dg-input {
          flex: 1; background: var(--dg-bg); border: 1px solid var(--dg-border); border-radius: 8px;
          color: var(--dg-text); padding: 10px 12px; font-size: 13.5px; font-family: var(--dg-sans); outline: none;
        }
        #dg-input:focus { border-color: var(--dg-accent); }
        #dg-mic {
          background: var(--dg-bg); border: 1px solid var(--dg-border); color: var(--dg-text);
          border-radius: 8px; width: 40px; cursor: pointer; font-size: 15px; flex-shrink: 0;
        }
        #dg-mic.dg-listening { background: var(--dg-accent); color: #14161C; border-color: var(--dg-accent); animation: dg-mic-pulse 1.2s infinite; }
        @keyframes dg-mic-pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,90,54,0.5); }
          70% { box-shadow: 0 0 0 8px rgba(255,90,54,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,90,54,0); }
        }
        #dg-send {
          background: var(--dg-accent); border: none; color: #14161C; font-weight: 600;
          font-size: 13px; border-radius: 8px; padding: 0 16px; cursor: pointer;
        }
        #dg-send:disabled { opacity: 0.5; cursor: not-allowed; }
        #dg-send:focus-visible, #dg-input:focus-visible, #dg-mic:focus-visible { outline: 2px solid var(--dg-accent); outline-offset: 1px; }
        @media (prefers-reduced-motion: reduce) {
          #dg-window { transition: none; }
          #dg-launcher-ring { animation: none; }
          .dg-cursor { animation: none; }
        }
      `}</style>

      <button
        id="dg-launcher"
        className={isOpen ? "dg-launcher-open" : ""}
        aria-label="Open support chat"
        onClick={openChat}
      >
        {!isOpen && <span id="dg-launcher-ring" />}
        {!isOpen && <span id="dg-launcher-badge" />}
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H9l-4.2 3.36A.5.5 0 0 1 4 20V5.5Z"
              fill="currentColor"
            />
            <circle cx="8.5" cy="10" r="1.15" fill="#14161C" />
            <circle cx="12" cy="10" r="1.15" fill="#14161C" />
            <circle cx="15.5" cy="10" r="1.15" fill="#14161C" />
          </svg>
        )}
      </button>

      <div
        id="dg-window"
        className={isOpen ? "dg-open" : ""}
        role="dialog"
        aria-label="Support chat"
      >
        <div id="dg-header">
          <div id="dg-header-title">
            Support Deific Digital<span className="dg-cursor">_</span>
          </div>
          <button
            id="dg-close"
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>

        <div id="dg-messages">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`dg-msg ${m.role === "user" ? "dg-msg-user" : "dg-msg-bot"}`}
            >
              {m.role === "bot" && <span className="dg-label">SUPPORT</span>}
              <span>{m.text}</span>
            </div>
          ))}
          {isTyping && (
            <div className="dg-msg dg-msg-typing">SUPPORT is typing...</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div id="dg-inputrow">
          {micSupported && (
            <button
              id="dg-mic"
              className={listening ? "dg-listening" : ""}
              aria-label="Speak your message"
              onClick={toggleMic}
              type="button"
            >
              🎤
            </button>
          )}
          <input
            id="dg-input"
            ref={inputRef}
            type="text"
            placeholder="Type your message..."
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button id="dg-send" onClick={() => sendMessage()} disabled={sending}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
