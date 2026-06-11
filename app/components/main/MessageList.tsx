"use client";

import { useState } from "react";
import chatbotData from "../../data/hitesh-chatbot.json";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

function findBotResponse(input: string) {
  const text = input.toLowerCase().trim();

  for (const intent of chatbotData.intents) {
    for (const pattern of intent.patterns) {
      const normalizedPattern = pattern.toLowerCase();
      if (text === normalizedPattern) {
        const responses = intent.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
      if (text.includes(normalizedPattern) || normalizedPattern.includes(text)) {
        const responses = intent.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
  }

  return "Sorry, I don't know that yet — try asking about JavaScript, React, or career advice.";
}

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I'm HiteshBot. Ask me anything about web dev.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: input,
    };

    const botMessage: Message = {
      id: messages.length + 2,
      sender: "bot",
      text: findBotResponse(input),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="flex h-full min-h-[540px] flex-col gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-950 p-4 text-slate-100 shadow-2xl shadow-black/30">
      <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/95 p-5 shadow-inner shadow-slate-950/50">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Conversation</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-50">Ask HiteshBot anything</h2>
          </div>
          <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400 ring-1 ring-slate-700">
            Predefined AI
          </span>
        </div>
        <div className="space-y-3 overflow-y-auto max-h-[420px] pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-[1.25rem] px-4 py-3 max-w-[80%] leading-relaxed ${
                  message.sender === "user"
                    ? "bg-indigo-500 text-white"
                    : "bg-slate-800 text-slate-200"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none ring-2 ring-transparent transition focus:border-slate-500 focus:ring-slate-700"
        />
        <button
          onClick={handleSend}
          className="rounded-2xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
        >
          Send
        </button>
      </div>
    </div>
  );
}
